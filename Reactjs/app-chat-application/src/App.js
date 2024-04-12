import React, { useState, useEffect } from 'react';
import './App.css';
import MessageList from './MessageList';
import ChatForm from './ChatForm';


function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Simulate fetching messages from a server
    // For demo purposes, we're using a static array of messages
    const fetchData = async () => {
      const response = await fetch('/api/messages');
      const data = await response.json();
      setMessages(data);
    };

    fetchData();
  }, []);

  const handleMessageSubmit = (message) => {
    setMessages([...messages, message]);
    // Simulate sending message to server
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };

  return (
    <div className="App">
      <h1>Chat Application</h1>
      <MessageList messages={messages} />
      <ChatForm onSubmit={handleMessageSubmit} />
    </div>
  );
}

export default App;
