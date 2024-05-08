import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  VStack,
  Heading,
  Text,
  HStack,
  Avatar,
  Spacer,
  useToast
} from '@chakra-ui/react';

export default function Chat() {
  const router = useRouter();
  const { name, roomID } = router.query;
  const audioRef = useRef();
  const [userCount, setUserCount] = useState(0);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recording, setRecording] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const toast = useToast()

    
    useEffect(() => {
    if (!roomID || !name) {
      router.push('/');
      return;
    }



    const ws = new WebSocket(`https://audio-chat-server.vercel.app/ws?roomID=${encodeURIComponent(roomID)}`);
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(event.data)
      if (data.type === 'userCount') {
        setUserCount(data.count);
      }
    };

    const mediaConstraints = { audio: true };
    navigator.mediaDevices.getUserMedia(mediaConstraints)
      .then(stream => {
        audioRef.current.srcObject = stream;
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setRecordedChunks(prev => [...prev, event.data]);
          }
        };

        recorder.onstop = () => {
          console.log(recordedChunks.length)
          // if (recordedChunks.length === 0) {
          //   toast({
          //     title: "No recording to save",
          //     description: "You did not record any audio.",
          //     status: "warning",
          //     duration: 2000,
          //     isClosable: true,
          //   });
          // }
        };
      })
      .catch(error => {
        console.error("Error accessing media devices.", error);
        toast({
          title: "Error accessing media devices",
          description: "Unable to access microphone. Please check permissions.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });



    // Cleanup on unmount
    return () => {
      mediaRecorder?.stop();
      recordedChunks.forEach(chunk => URL.revokeObjectURL(chunk));
      ws.close();
    };
  }, [name, roomID]);

  const toggleMute = () => {
    const audioTrack = audioRef.current.srcObject.getAudioTracks()[0];
    audioTrack.enabled = isMuted;
    setIsMuted(!isMuted);
  };

  const startRecording = () => {
    setRecordedChunks([]);
    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setRecording(false);
  };

  const saveRecording = () => {
    const blob = new Blob(recordedChunks, { type: 'audio/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `recording_${new Date().toISOString()}.webm`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  };

  console.log(recordedChunks.length)

  return (
    <VStack spacing={4} align="center" p={5}>
    <Heading>Room: {roomID}</Heading>
      <Heading>Welcome {name}!</Heading>
	<Text>User count: {userCount}</Text>
      <audio ref={audioRef} autoPlay />
      <HStack spacing={4}>
        <Button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</Button>
        <Button onClick={recording ? stopRecording : startRecording}>
          {recording ? 'Stop Recording' : 'Start Recording'}
        </Button>
        <Button onClick={saveRecording} disabled={recordedChunks === 0}>
          Save Recording
        </Button>
      </HStack>
<VStack mt={10}>
{Array.from({ length: userCount }).map((_, index) => (
          <Box key={index} p={25} shadow="md" borderWidth="1px">
            <HStack>
              <Avatar name={`User ${index + 1}`} />
              <Text>{`User ${index + 1}`}</Text>
            </HStack>
          </Box>
        ))}
        <Spacer />
      <Button colorScheme="blue" onClick={() => router.push('/')}>
        Leave Room
      </Button>
      </VStack>
    </VStack>
  );
}
