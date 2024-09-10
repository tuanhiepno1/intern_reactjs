import React from 'react';
import { Layout, Row, Col, Button, Input } from 'antd';
import { SettingOutlined, FileExcelOutlined, EditOutlined, DeleteOutlined, PlusOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import '../../../../assets/styles/Header.css';

const { Header } = Layout;

const GroupListHeaderManage = ({ onAddNewIntern, onCreateNewGroup }) => {
    return (
        <Header className="header-container">
            <Row justify="space-between" align="middle">
                <Col span={12}>
                    <h2 className="header-title">Group List</h2>
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
                        icon={<UsergroupAddOutlined />}
                        className="header-btn-schedule"
                        onClick={onCreateNewGroup}
                    >
                        Create New Group
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
        </Header>
    );
};

export default GroupListHeaderManage;
