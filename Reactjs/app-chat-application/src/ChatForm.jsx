// ChatForm.js

import React, { useState } from 'react';

function ChatForm({ onSubmit }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const message = {
      id: new Date().getTime(),
      text,
      timestamp: new Date().toLocaleString(),
    };
    onSubmit(message);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ChatForm;
