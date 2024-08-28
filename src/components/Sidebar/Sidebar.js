import React from 'react';
import { Layout, Menu } from 'antd';
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
  return (
    <Sider width={300} className="site-layout-background">
      <div className="logo" style={{ padding: '20px', textAlign: 'center' }}>
        <img src="your-logo-url" alt="Logo" style={{ width: '100%' }} />
      </div>
      <Menu mode="inline" defaultSelectedKeys={['dashboard']}>
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.SubMenu key="cv-management" icon={<FileOutlined />} title="CV Management">
          <Menu.Item key="approve-cv">Approve CV</Menu.Item>
          <Menu.Item key="confirm-cv">Confirm CV</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="list-management" icon={<TeamOutlined />} title="List Management">
          <Menu.Item key="intern-list">Intern List</Menu.Item>
          <Menu.Item key="group-list">Group List</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="project-management" icon={<ProjectOutlined />}>
          Project Management
        </Menu.Item>
        <Menu.Item key="position-management" icon={<UserOutlined />}>
          Position Management
        </Menu.Item>
        <Menu.Item key="technology-management" icon={<FileTextOutlined />}>
          Technology Management
        </Menu.Item>
        <Menu.Item key="group-zalo-management" icon={<UsergroupAddOutlined />}>
          Group Zalo Management
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
      <div className="sidebar-footer" style={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'center' }}>
        <div className="user-info" style={{ padding: '20px' }}>
          <UserOutlined style={{ fontSize: '24px' }} />
          <div style={{ marginTop: '10px' }}>
            <strong>Natalie Brogan</strong>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
