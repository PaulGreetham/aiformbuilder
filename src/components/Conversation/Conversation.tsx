import React from 'react';
import './Conversation.css';
import { Message } from '../../types';
import ChatMessage from '../ChatMessage/ChatMessage';

interface ConversationProps {
  messages: Message[];
}

const Conversation: React.FC<ConversationProps> = ({ messages }) => {
  return (
    <div className="conversation-container">
      {messages.map((msg, index) => (
        <ChatMessage key={index} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
};

export default Conversation;
