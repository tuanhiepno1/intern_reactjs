import React, { useState } from 'react';
import { Layout, Row, Col, Button, Input } from 'antd';
import { SettingOutlined, FileExcelOutlined, EditOutlined, MailOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import SendEmailModal from '../modal/SendEmail'; // Đường dẫn tùy chỉnh
import AddInternModal from '../modal/AddNewIntern'; // Đường dẫn tùy chỉnh
import '../../assets/styles/Header.css';

const { Header } = Layout;

const HeaderConfirmCV = () => {
  const [isSendEmailModalVisible, setSendEmailModalVisible] = useState(false);
  const [isAddInternModalVisible, setAddInternModalVisible] = useState(false);

  const showSendEmailModal = () => setSendEmailModalVisible(true);
  const handleSendEmailModalCancel = () => setSendEmailModalVisible(false);
  const handleSendEmail = (values) => {
    console.log('Sending email with values:', values);
    setSendEmailModalVisible(false);
  };

  const showAddInternModal = () => setAddInternModalVisible(true);
  const handleAddInternModalCancel = () => setAddInternModalVisible(false);
  const handleAddIntern = (values) => {
    console.log('Adding new intern with values:', values);
    setAddInternModalVisible(false);
  };

  return (
    <Header className="header-container">
      <Row justify="space-between" align="middle">
        <Col span={12}>
          <h2 className="header-title">Confirm CV</h2>
        </Col>
        <Col>
          <div className="header-user-info">
            <div>
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="header-user-avatar"
              />
            </div>
            <div className="header-text-info">
              <strong>Natalie Brogan</strong>
              <p>Admin</p>
            </div>
            <SettingOutlined className="header-settings-icon" />
          </div>
        </Col>
      </Row>
      <Row className="header-search-row" justify="space-between" align="middle" style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Input placeholder="Search for Information" className="header-search-input" />
        </Col>
        <Col className="header-action-buttons" style={{ textAlign: 'right' }}>
          <Button type="primary" icon={<MailOutlined />} className="header-btn-schedule" onClick={showSendEmailModal}>
            Send Email
          </Button>
          <Button type="default" icon={<FileExcelOutlined />} className="header-btn-export">
            Export Excel
          </Button>
          <Button type="danger" icon={<EditOutlined />} className="header-btn-edit">
            Edit
          </Button>
          <Button type="danger" icon={<DeleteOutlined />} className="header-btn-delete">
            Delete
          </Button>
          <Button type="primary" icon={<PlusOutlined />} className="header-btn-add" onClick={showAddInternModal}>
            Add New Intern
          </Button>
        </Col>
      </Row>

      {/* Modals */}
      <SendEmailModal
        isVisible={isSendEmailModalVisible}
        onCancel={handleSendEmailModalCancel}
        onSend={handleSendEmail}
      />
      <AddInternModal
        isVisible={isAddInternModalVisible}
        onCancel={handleAddInternModalCancel}
        onAdd={handleAddIntern}
      />
    </Header>
  );
};

export default HeaderConfirmCV;
