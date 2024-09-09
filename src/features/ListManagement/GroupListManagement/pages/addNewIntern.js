import React from 'react';
import { Modal, Form, Input, Select, Row, Col, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import './style.css';

const { Option } = Select;

const AddInternForm = ({ visible, onCancel, onAdd }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        onAdd(values);
        form.resetFields();
    };

    return (
        <Modal
            visible={visible}
            title={<h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>Add New Intern</h1>}
            onCancel={onCancel}
            footer={null}
            width={984}
            className="add-intern-modal"
        >
            <Form form={form} layout="horizontal" onFinish={onFinish} className="add-intern-form">
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item name="internId" rules={[{ required: true }]}>
                            <label><strong>Intern ID</strong></label>
                            <Input placeholder="#12345128" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="fullName" rules={[{ required: true }]}>
                            <label><strong>Full name</strong></label>
                            <Input placeholder="Esther Eden" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="phoneNumber" rules={[{ required: true }]}>
                            <label><strong>Phone Number</strong></label>
                            <Input placeholder="0376782528" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item name="position" rules={[{ required: true }]}>
                            <label><strong>Position</strong></label>
                            <Input placeholder="Back-End" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="school" rules={[{ required: true }]}>
                            <label><strong>School</strong></label>
                            <Input placeholder="FPT University" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="address" rules={[{ required: true }]}>
                            <label><strong>Address</strong></label>
                            <Input placeholder="District 9" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item name="email" rules={[{ required: true, type: 'email' }]}>
                            <label><strong>Email</strong></label>
                            <Input placeholder="abc@gmail.com" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="cv" rules={[{ required: true }]}>
                            <label><strong>Link CV</strong></label>
                            <Input placeholder="Link" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="mentor" rules={[{ required: true }]}>
                            <label><strong>Mentor</strong></label>
                            <Input placeholder="Ajmal Abdul" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item name="project" rules={[{ required: true }]}>
                            <label><strong>Project</strong></label>
                            <Input placeholder="Intern System" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="groupZalo" rules={[{ required: true }]}>
                            <label><strong>Group Zalo</strong></label>
                            <Input placeholder="FE Intern System" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="role" rules={[{ required: true }]}>
                            <label><strong>Role</strong></label>
                            <Select placeholder="Leader">
                                <Option value="Leader">Leader</Option>
                                <Option value="Member">Member</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="add-intern-button" icon={<UserAddOutlined />}>
                        Add New Intern
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddInternForm;
