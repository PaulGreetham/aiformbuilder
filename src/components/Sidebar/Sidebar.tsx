import React from 'react';
import './Sidebar.css';
import { FaHome, FaSearch, FaBook, FaSignInAlt } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <h1 className="sidebar-title">FormBuilder</h1>
      <nav>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <FaHome className="sidebar-icon" />
            Home
          </li>
          <li className="sidebar-item">
            <FaSearch className="sidebar-icon" />
            Discover
          </li>
          <li className="sidebar-item">
            <FaBook className="sidebar-icon" />
            Library
          </li>
          <li className="sidebar-item">
            <FaSignInAlt className="sidebar-icon" />
            Sign In
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
