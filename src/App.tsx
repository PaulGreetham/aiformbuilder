import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import QueryBar from './components/QueryBar/QueryBar';
import Conversation from './components/Conversation/Conversation';
import FormDisplay from './components/FormDisplay/FormDisplay';
import './App.css';
import { Message, FormField } from './types';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([{ sender: 'ai', text: 'Hello, what form can I help you create today?' }]);
  const [formFields, setFormFields] = useState<FormField[]>([]);
  const [formTitle, setFormTitle] = useState<string>('');
  const [currentQuestionTitle, setCurrentQuestionTitle] = useState<string>('');
  const [currentQuestionType, setCurrentQuestionType] = useState<string>(''); // Added to handle question type for multiple choice
  const [waitingFor, setWaitingFor] = useState<string>('formDescription');

  const handleQuerySubmit = (query: string) => {
    const userMessage: Message = { sender: 'user', text: query };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    switch (waitingFor) {
      case 'formDescription':
        handleFormDescription(query);
        break;
      case 'formName':
        handleFormName(query);
        break;
      case 'questionTitle':
        handleQuestionTitle(query);
        break;
      case 'questionType':
        handleQuestionType(query);
        break;
      case 'multipleChoiceQuestionTitle':
        handleMultipleChoiceQuestionTitle(query);
        break;
      case 'multipleChoiceOptions':
        handleMultipleChoiceOptions(query);
        break;
      default:
        break;
    }
  };

  const handleFormDescription = (description: string) => {
    const aiResponse: Message = {
      sender: 'ai',
      text: 'Ok. What would you like to call this form?',
    };
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
      setWaitingFor('formName');
    }, 1000);
  };

  const handleFormName = (name: string) => {
    setFormTitle(name);

    const aiResponse: Message = {
      sender: 'ai',
      text: 'What is the first question you would like to ask?',
    };
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
      setWaitingFor('questionTitle');
    }, 1000);
  };

  const handleQuestionTitle = (title: string) => {
    setCurrentQuestionTitle(title);

    const aiResponse: Message = {
      sender: 'ai',
      text: 'Would you like a text or multiple choice answer?',
      options: ['Text', 'Multiple Choice'],
    };
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
      setWaitingFor('questionType');
    }, 1000);
  };

  const handleQuestionType = (type: string) => {
    setCurrentQuestionType(type); // Save the type of question for multiple choice handling

    if (type.toLowerCase() === 'multiple choice') {
      const aiFollowUp: Message = {
        sender: 'ai',
        text: 'Ok. First, what is the name of this question?',
      };
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, aiFollowUp]);
        setWaitingFor('multipleChoiceQuestionTitle');
      }, 1000);
    } else {
      const newFormField: FormField = { title: currentQuestionTitle, type: 'text' };
      setFormFields((prevFields) => [...prevFields, newFormField]);

      const aiFollowUp: Message = {
        sender: 'ai',
        text: 'What would you like to ask next?',
      };
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, aiFollowUp]);
        setWaitingFor('questionTitle');
      }, 1000);
    }
  };

  const handleMultipleChoiceQuestionTitle = (title: string) => {
    setCurrentQuestionTitle(title);

    const aiResponse: Message = {
      sender: 'ai',
      text: 'What options would you like to add? (Separate options with commas)',
    };
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
      setWaitingFor('multipleChoiceOptions');
    }, 1000);
  };

  const handleMultipleChoiceOptions = (options: string) => {
    const userMessage: Message = { sender: 'user', text: options };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const optionsArray = options.split(',').map((option) => option.trim());
    const newFormField: FormField = {
      title: currentQuestionTitle,
      type: 'multiple-choice',
      options: optionsArray,
    };
    setFormFields((prevFields) => [...prevFields, newFormField]);

    const aiFollowUp: Message = {
      sender: 'ai',
      text: 'What would you like to ask next?',
    };
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, aiFollowUp]);
      setWaitingFor('questionTitle');
    }, 1000);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <h1 className="animated-title">FormBuilder</h1>
        <QueryBar onSubmit={handleQuerySubmit} />
        <Conversation messages={messages} />
        <FormDisplay formTitle={formTitle} formFields={formFields} />
      </div>
    </div>
  );
};

export default App;
