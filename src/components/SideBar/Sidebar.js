import React, { useState } from 'react';
import { FaUsers, FaStickyNote,FaWallet,FaFileContract, FaComments, FaUserFriends, FaCalendarAlt, FaEnvelope, FaCog, FaShoppingCart } from 'react-icons/fa';
import './Sidebar.css';
import { useLocation,Link } from 'react-router-dom';
import leftNav from '../../assets/images/leftNav.png';
import rightNav from '../../assets/images/rightNav.png';
import FeatherIcon from 'feather-icons-react';
import { svgProfile } from '../../components/svgCustom/svgCustom';
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
        {!isCollapsed && <h4>Võ Nhật Anh</h4>}
      </div>
      <nav>
        <ul>
          <li>
          <Link to="/nhomlop">
            <FaUsers />
            {!isCollapsed && <span>Hồ sơ nhân viên</span>}
            </Link>
          </li>
          <li>
            <FaWallet />
            {!isCollapsed && <span>Hồ sơ lương</span>}
          </li>
          <li>
            <FaFileContract />
            {!isCollapsed && <span>Thông tin hợp đồng</span>}
          </li>
          <li>
            <FaUserFriends />
            {!isCollapsed && <span>Quá trình công tác</span>}
          </li>
          <li>
            <Link to="/registerLeave">
            <FaCalendarAlt />
            {!isCollapsed && <span>Quản lý nghỉ</span>}
            </Link>
          </li>
          <li>
            <FaEnvelope />
            {!isCollapsed && <span>Quản lý làm thêm</span>}
          </li>
          <li>
            <FaCog />
            {!isCollapsed && <span>Settings</span>}
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button onClick={toggleSidebar} className="toggle-button">
          {isCollapsed ? 
             <svg
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             stroke="white"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
             className="feather feather-chevrons-right"
           >
             <polyline points="13 17 18 12 13 7" />
             <polyline points="6 17 11 12 6 7" />
           </svg>
           : 
           <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevrons-left"
        >
          <polyline points="11 17 6 12 11 7"></polyline>
          <polyline points="18 17 13 12 18 7"></polyline>
        </svg>
           }
        </button>
        {!isCollapsed && <span className="toggle-label">Thu gọn</span>}
      </div>
    </div>
  );
}

export default Sidebar;
