import React, { useState } from 'react';
import { Modal, Button, List, Avatar } from 'antd';
import { UserOutlined, PlusOutlined, LogoutOutlined, CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const AccountLogin = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const navigate = useNavigate();

  const accounts = [
    { name: 'Francis Sam', email: 'francissam@gmail.com' },
    { name: 'Francis Sam', email: 'francissam@gmail.com' },
    { name: 'Francis Sam', email: 'francissam@gmail.com' },
  ];

  const handleManageAccount = () => {
    navigate('/account-management');
  };

  const handleAccountClick = () => {
    navigate('/dashboard');
  };

  const handleClose = () => {
    setIsModalVisible(false);
    // Thêm logic để quay lại trang trước đó nếu cần
  };

  return (
    <Modal
      visible={isModalVisible}
      footer={null}
      closable={false}
      width={300}
      bodyStyle={{ padding: 0 }}
    >
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <CloseOutlined
          style={{ position: 'absolute', top: 10, right: 10, fontSize: '16px' }}
          onClick={handleClose}
        />
        <Avatar size={64} icon={<UserOutlined />} />
        <h2>Natalie Brogan</h2>
        <Button type="primary" onClick={handleManageAccount}>
          Manage Your Account
        </Button>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={accounts}
        renderItem={(item) => (
          <List.Item onClick={handleAccountClick} style={{ cursor: 'pointer' }}>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={item.name}
              description={item.email}
            />
          </List.Item>
        )}
      />
      <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <Button icon={<PlusOutlined />}>Add account</Button>
        <Button icon={<LogoutOutlined />}>Sign out</Button>
      </div>
    </Modal>
  );
};

export default AccountLogin;
