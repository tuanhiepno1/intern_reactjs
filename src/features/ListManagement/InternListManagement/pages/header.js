import React, { useState } from 'react';
import { Layout, Row, Col, Button, Input } from 'antd';
import { SettingOutlined, FileExcelOutlined, EditOutlined, DeleteOutlined, PlusOutlined, MailOutlined } from '@ant-design/icons';
import SendEmailModal from './sendemail';
import '../../../../assets/styles/Header.css';

const { Header } = Layout;

const InternListHeaderManage = ({ onAddNewIntern }) => {
    const [isEmailModalVisible, setIsEmailModalVisible] = useState(false);

    const showEmailModal = () => {
        setIsEmailModalVisible(true);
    };

    const handleEmailModalCancel = () => {
        setIsEmailModalVisible(false);
    };

    const handleSendEmail = (emailData) => {
        console.log('Sending email:', emailData);
        setIsEmailModalVisible(false);
        // Implement your email sending logic here
    };

    return (
        <Header className="header-container">
            <Row justify="space-between" align="middle">
                <Col span={12}>
                    <h2 className="header-title">Intern List</h2>
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
                    <Button
                        type="primary"
                        icon={<MailOutlined />}
                        className="header-btn-schedule"
                        onClick={showEmailModal}
                    >
                        Send Email
                    </Button>
                    <Button type="primary" icon={<FileExcelOutlined />} className="header-btn-export">
                        Export Excel
                    </Button>
                    <Button type="default" icon={<EditOutlined />} className="header-btn-edit">
                        Edit
                    </Button>
                    <Button type="danger" icon={<DeleteOutlined />} className="header-btn-delete">
                        Delete
                    </Button>
                    <Button type="primary" icon={<PlusOutlined />} className="header-btn-add" onClick={onAddNewIntern}>
                        Add New Intern
                    </Button>
                </Col>
            </Row>

            <SendEmailModal
                visible={isEmailModalVisible}
                onCancel={handleEmailModalCancel}
                onSend={handleSendEmail}
            />
        </Header>
    );
};

export default InternListHeaderManage;
