import React from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import CustomHeader from '../components/Header/Header';

import '../assets/styles/NaviGation.css';


const NaviGation = () => {
  return (
    <div className="layout-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-container">
        <CustomHeader />
        {/* Nội dung khác có thể nằm dưới Header */}
      </div>
    </div>
  );
};

export default NaviGation;
