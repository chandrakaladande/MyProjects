import React from 'react';
import Accordion from './Accordion';
import './App.css';

const App = () => {
  const items = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'Why use React?',
      content: 'React makes it painless to create interactive UIs.',
    },
    {
      title: 'How to learn React?',
      content: 'You can learn React by reading the official documentation and building projects.',
    },
  ];

  return (
    <div>
      <h1>Accordion Example</h1>
      <Accordion items={items} />
    </div>
  );
};

export default App;
