import React from 'react';
import './ChatMessage.css';

interface ChatMessageProps {
  sender: 'user' | 'ai';
  text: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, text }) => {
  return (
    <div className={sender === 'user' ? 'user-message' : 'ai-message'}>
      {text}
    </div>
  );
};

export default ChatMessage;
