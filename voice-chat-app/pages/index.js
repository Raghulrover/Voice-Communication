// pages/index.js
import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Input,
  VStack,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react'

export default function Home() {
  const [name, setName] = useState('')
  const router = useRouter()
  const toast = useToast()

  const joinRoom = () => {
    if (!name) {
      toast({
        title: "Error",
        description: "Name cannot be empty.",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
      return;
    }
    router.push(`/chat?name=${encodeURIComponent(name)}&roomID=defaultRoom`)
  }

  return (
    <VStack spacing={4} justify="center" align="center" height="100vh">
      <Heading>Welcome to the Chat Room</Heading>
      <Text>Enter your name to join the room:</Text>
      <Box>
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button mt={5} colorScheme="teal" onClick={joinRoom} disabled={!name.trim()}>Join Room</Button>
      </Box>
    </VStack>
  )
}




