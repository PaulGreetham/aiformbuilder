import React, { useState } from 'react';
import './QueryBar.css';

interface QueryBarProps {
  onSubmit: (query: string) => void;
}

const QueryBar: React.FC<QueryBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form className="query-form" onSubmit={handleSubmit}>
      <input
        className="query-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask anything..."
      />
      <button className="query-button" type="submit">SUBMIT</button>
    </form>
  );
};

export default QueryBar;
