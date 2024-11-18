import React, { useState } from 'react';
import { FaHome, FaStickyNote, FaComments, FaUserFriends, FaCalendarAlt, FaEnvelope, FaCog, FaShoppingCart } from 'react-icons/fa';
import './Sidebar.css';
import { useLocation } from 'react-router-dom';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const location = useLocation();
  const isLoginPage = location.pathname.toLocaleLowerCase() == '/login';

  if (isLoginPage) {
    return null;
  }
  return (
    

    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      
      <div className="profile">
        <img src="https://materialpro-react-main.netlify.app/assets/user4-CwbtKSXY.jpg" alt="Profile" />
        {!isCollapsed && <h4>Steave Rojer</h4>}
      </div>
      <nav>
        <ul>
          <li>
            <FaHome />
            {!isCollapsed && <span>Home</span>}
          </li>
          <li>
            <FaStickyNote />
            {!isCollapsed && <span>Notes</span>}
          </li>
          <li>
            <FaComments />
            {!isCollapsed && <span>Chat</span>}
          </li>
          <li>
            <FaUserFriends />
            {!isCollapsed && <span>Contacts</span>}
          </li>
          <li>
            <FaCalendarAlt />
            {!isCollapsed && <span>Calendar</span>}
          </li>
          <li>
            <FaEnvelope />
            {!isCollapsed && <span>Messages</span>}
          </li>
          <li>
            <FaCog />
            {!isCollapsed && <span>Settings</span>}
          </li>
          <li>
            <FaShoppingCart />
            {!isCollapsed && <span>Shop</span>}
          </li>
        </ul>
      </nav>
      <div className="footer">
        <button onClick={toggleSidebar} className="toggle-button">
          {isCollapsed ? '☰' : '✕'}
        </button>
        {!isCollapsed && <span className="toggle-label">Thu gọn</span>}
      </div>
    </div>
  );
}

export default Sidebar;
