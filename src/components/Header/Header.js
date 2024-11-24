import React from 'react';
import './Header.css'; // Import CSS cho header
import logoApp from '../../assets/images/deflogo.png';
import { UserContext } from '../context/UserContext';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
const Header = (props) => {
  const { user, logoutContext } = useContext(UserContext);
  const location = useLocation();
  /* if ((user && user.isAuthenticated === true) || location.pathname === '/') { */
  return (
    <div className="header">
      {/* Logo */}
      <div className="header-logo">
      <img
          src={logoApp}
          width="90"
          height="30"
          className="d-inline-block align-top"
          alt="React Boostrap logo"
        />
      </div>

      {/* Actions */}
      <div className="header-actions">
        {/* Notification Icon */}
        <div className="header-notification">
          <span className="notification-icon">🔔</span>
          <span className="notification-count">3</span>
        </div>

        {/* Language Selection */}
        <div className="header-language">
          <img src="https://flagcdn.com/vn.svg" alt="Vietnam Flag" className="flag-icon" />
        </div>

        {/* User Profile */}
        <div className="header-user">
          <img
            src="https://materialpro-react-main.netlify.app/assets/user4-CwbtKSXY.jpg"
            alt="User Avatar"
            className="user-avatar"
          />
          <span className="user-name">Võ Nhật Anh</span>
        </div>
      </div>
    </div>
  );
/* } else {
  return <></>;
} */
};

export default Header;
