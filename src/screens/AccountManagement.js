import React from 'react';
import { Layout, Card, Avatar, Typography, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import "../assets/styles/AccountManagement.css";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const AccountManagement = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/dashboard');
  };

  return (
    <Layout>
      <Content style={{ padding: '50px', position: 'relative' }}>
        <Button
          icon={<CloseOutlined />}
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 1,
          }}
        />
        <Card className="account-management">
          <div className="user-info-container">
            <Avatar size={64} src="../assets/images/user.png" />
            <Title level={3}>Hello Natalie Brogan!</Title>
            <Paragraph>nataliebrogan@gmail.com</Paragraph>
          </div>
          <div className="card-container">
            <Card className="card-content-account">
              <Title level={3}>Privacy & personalization</Title>
              <p>See the data in your Intern System Account and choose what activity is saved, to personalize your experience.</p>
              <a href='#/'> Manage your data and privacy</a>
            </Card>
            <Card className="card-content-account">
              <Title level={3}>Security Recommendations</Title>
              <p>Recommended actions found in the Security Check-Up.</p>
              <a href='#/'>Protect your account</a>
            </Card>
          </div>
          <Card className="card-content1-account">
            <Title level={3}>Privacy Check-Up</Title>
            <p>Choose the privacy settings that are right for you with this step-by-step guide.</p>
            <a href='#/'>Take Privacy Check-Up</a>
          </Card>
          <div className="search-section">
            <Title level={3}>What are you looking for?</Title>
            <ul>
              <li><a href="#/">Search Intern System Account</a></li>
              <li><a href="#/">See Help Options</a></li>
              <li><a href="#/">Send Feedback</a></li>
            </ul>
          </div>
        </Card>
      </Content>
    </Layout>
  );
};

export default AccountManagement;