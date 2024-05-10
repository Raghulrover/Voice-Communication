package main

import (
    "log"
    "net/http"
    "encoding/json"
    "sync"

    "github.com/gorilla/websocket"
    "os"
)

var upgrader = websocket.Upgrader{
    CheckOrigin: func(r *http.Request) bool {
        return true
    },
}

type Room struct {
    peers map[*websocket.Conn]bool
    lock  sync.Mutex
}

var rooms = make(map[string]*Room)
var lock sync.Mutex

func getRoom(roomID string) *Room {
    lock.Lock()
    defer lock.Unlock()
    if room, ok := rooms[roomID]; ok {
        return room
    }
    room := &Room{
        peers: make(map[*websocket.Conn]bool),
    }
    rooms[roomID] = room
    return room
}

func (room *Room) broadcastUserCount() {
    count := len(room.peers)
    msg, _ := json.Marshal(map[string]interface{}{
        "type": "userCount",
        "count": count,
    })
    for conn := range room.peers {
        conn.WriteMessage(websocket.TextMessage, msg)
    }
}

func (room *Room) joinRoom(ws *websocket.Conn) {
    room.lock.Lock()
    room.peers[ws] = true
    room.lock.Unlock()
    room.broadcastUserCount()
}

func (room *Room) leaveRoom(ws *websocket.Conn) {
    room.lock.Lock()
    delete(room.peers, ws)
    room.lock.Unlock()
    room.broadcastUserCount()
}

func (room *Room) broadcast(message []byte, sender *websocket.Conn) {
    room.lock.Lock()
    defer room.lock.Unlock()
    for conn := range room.peers {
        if conn != sender {
            conn.WriteMessage(websocket.TextMessage, message)
        }
    }
}

func websocketHandler(w http.ResponseWriter, r *http.Request) {
    roomID := r.URL.Query().Get("roomID")
    if roomID == "" {
        http.Error(w, "Room ID is required", http.StatusBadRequest)
        return
    }
    ws, err := upgrader.Upgrade(w, r, nil)
    if err != nil {
        log.Println("Error upgrading to WebSocket:", err)
        return
    }
    defer ws.Close()

    room := getRoom(roomID)
    room.joinRoom(ws)
    defer room.leaveRoom(ws)

    for {
        _, msg, err := ws.ReadMessage()
        if err != nil {
            log.Println("Error reading WebSocket message:", err)
            break
        }
        room.broadcast(msg, ws)
    }
}

func main() {
    http.HandleFunc("/ws", websocketHandler)

    // Get the PORT from the environment
    port := os.Getenv("PORT")
    if port == "" {
        log.Fatal("$PORT must be set")
        return
    }

    // Start the server on the assigned port
    log.Printf("Server is starting on port %s", port)
    log.Fatal(http.ListenAndServe(":"+port, nil))
}