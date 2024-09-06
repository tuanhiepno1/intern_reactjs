import React from 'react';
import { Layout, Typography, Avatar, Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import '../../assets/styles/HeaderTechnology.css';

const { Header } = Layout;
const { Title } = Typography;

const TechnologyHeader = () => {
  return (
    <Header className="technology-header">
      <div className="technology-header-top">
        <Title level={2} className="technology-title">Technology Management</Title>
        <div className="technology-user-info">
          <Avatar src="path_to_avatar_image.jpg" />
          <div className="technology-user-details">
            <span className="technology-user-name">Natalie Brogan</span>
            <span className="technology-user-role">Admin</span>
          </div>
          <SettingOutlined className="technology-settings-icon" />
        </div>
      </div>
      <div className="technology-header-bottom">
        <Menu mode="horizontal" className="technology-menu">
          <Menu.Item key="back-end">Back-End</Menu.Item>
          <Menu.Item key="front-end">Front-End</Menu.Item>
          <Menu.Item key="business-analyst">Business Analyst</Menu.Item>
          <Menu.Item key="marketing">Marketing</Menu.Item>
          <Menu.Item key="design">Design</Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default TechnologyHeader;
