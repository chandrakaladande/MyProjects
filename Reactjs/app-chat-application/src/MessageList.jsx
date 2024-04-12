// MessageList.js

import React from 'react';

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map(message => (
        <div key={message.id} className="message">
          <span>{message.text}</span>
          <span>{message.timestamp}</span>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
