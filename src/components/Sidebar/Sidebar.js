import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  FileOutlined,
  TeamOutlined,
  ProjectOutlined,
  SettingOutlined,
  UserOutlined,
  FileTextOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import '../../assets/styles/Sidebar.css';

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();

  return (
    <Sider width={350} className="site-layout-background">
      <div className="logo" style={{ padding: '20px', textAlign: 'center' }}>
        <img src="../assets/images/Logo.svg" alt="Logo" />
      </div>
      <Menu mode="inline" selectedKeys={[location.pathname]}>
        <Menu.Item className='ant-menu-item-sidebar' key="/" icon={<DashboardOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.SubMenu key="cv-management" icon={<FileOutlined />} title="CV Management">
          <Menu.Item key="/approve-cv">
            <Link to="/approve-cv">Approve CV</Link>
          </Menu.Item>
          <Menu.Item key="/confirm-cv">
            <Link to="/confirm-cv">Confirm CV</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="list-management" icon={<TeamOutlined />} title="List Management">
          <Menu.Item key="/intern-list">
            <Link to="/intern-list">Intern List</Link>
          </Menu.Item>
          <Menu.Item key="/group-list">
            <Link to="/group-list">Group List</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item className='ant-menu-item-sidebar' key="/projectmanagement" icon={<ProjectOutlined />}>
          <Link to="/projectmanagement">Project Management</Link>
        </Menu.Item>
        <Menu.Item className='ant-menu-item-sidebar' key="/positionmanagement" icon={<UserOutlined />}>
          <Link to="/positionmanagement">Position Management</Link>
        </Menu.Item>
        <Menu.Item className='ant-menu-item-sidebar' key="/technology-management" icon={<FileTextOutlined />}>
          <Link to="/technology-management">Technology Management</Link>
        </Menu.Item>
        <Menu.Item className='ant-menu-item-sidebar' key="/group-zalo-management" icon={<UsergroupAddOutlined />}>
          <Link to="/group-zalo-management">Group Zalo Management</Link>
        </Menu.Item>
        <Menu.Item className='ant-menu-item-sidebar' key="/settings" icon={<SettingOutlined />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
      <div className="sidebar-footer" style={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'center' }}>
        <div className="user-info" style={{ padding: '20px' }}>
          <div className='img-user'>
            <img src="../assets/images/user.png" alt="User" />
          </div>
          <div className='text-info'>
            <strong>Natalie Brogan</strong>
            <p>Admin</p>
          </div>
          <div>
            <SettingOutlined />
          </div>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
