import React from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddInternModal = ({ isVisible, onCancel, onAdd }) => {
  const [form] = Form.useForm();

  const handleAdd = () => {
    form
      .validateFields()
      .then(values => {
        onAdd(values);
        form.resetFields();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      title={<span><PlusOutlined /> Add New Intern</span>}
      visible={isVisible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="add" type="primary" onClick={handleAdd}>
          Add
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[{ required: true, message: 'Please input the intern\'s full name!' }]}
        >
          <Input placeholder="Full Name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input the phone number!' }]}
        >
          <Input placeholder="Phone Number" />
        </Form.Item>
        <Form.Item
          name="position"
          label="Position"
          rules={[{ required: true, message: 'Please input the position!' }]}
        >
          <Input placeholder="Position" />
        </Form.Item>
        {/* Add other fields as necessary */}
      </Form>
    </Modal>
  );
};

export default AddInternModal;
