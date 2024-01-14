import React , {useState,useEffect} from 'react'
import { TextField, IconButton, Container, Paper ,Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


import './chatbox.css'

export default function Chatbox() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    

 const handleUserMessage = async() => {
        if (input.trim() === '') return;
    
        // User response
        setMessages([...messages, { text: input, type: 'user' }]);
        setInput('');
    
        try {
          // Send the user message to the server and await the response
          const response = await fetch('server-endpoint', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: input }),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          // Parse the server response
          const { answer } = await response.json();
    
          // Add the AI's response to the local state
          const newAiMessage = { text: answer, type: 'ai' };
          setMessages([...messages, newAiMessage]);
        } catch (error) {
          console.error('Error sending/receiving messages:', error);
        }
      }
    
    
      useEffect(() => {
        
        const messageContainer = document.getElementById('message-container');
        if (messageContainer) {
          messageContainer.scrollTop = messageContainer.scrollHeight;
        }
      }, [messages]);
    
  return (
    <div>
 <Container maxWidth="md" className="chatbox-container">
        <Paper elevation={3} className="chatbox-paper">
            <div className='wellcoming'>Hi! Im the digital lawyer , please start the chat here ✍️</div>
        <div id="message-container" className="message-container">
            {messages.map((message, index) => (
              <Grid key={index} container justifyContent={message.type === 'user' ? 'flex-end' : 'flex-start'}>
                <Grid item>
                  <Paper
                    elevation={3}
                    className={`message ${message.type === 'user' ? 'user-message' : 'ai-message'}`}
                    style={{
                      backgroundColor: message.type === 'user' ? '#082567' : 'white',
                      color: message.type === 'ai-massage' ?  '#082567':'white', // Text color
                      padding:'10px',
                      borderRadius:'10px'
                    }}
                  >
                    
                    {message.text}
                  </Paper>
                </Grid>
              </Grid>
            ))}
          </div>
          <div className="input-container">
            <TextField
              fullWidth
              multiline
              maxRows={5}
              variant="outlined"
              label="Talk with Digital Lower"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <IconButton  style={{ color: '#082567' }} onClick={handleUserMessage}>
              <SendIcon />
            </IconButton>
          </div>
        </Paper>
      </Container>


    </div>
  )
}
