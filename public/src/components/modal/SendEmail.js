import React from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import '../../assets/styles/SendEmail.css'

const SendEmailModal = ({ isVisible, onCancel, onSend }) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  const handleSend = () => {
    form
      .validateFields()
      .then(values => {
        onSend(values);
        form.resetFields();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      title={<span><MailOutlined /> Send Email</span>}
      visible={isVisible}
      onCancel={onCancel}
      footer={[
        <Button key="send" type="primary" onClick={handleSend} className="send-email-button">
          <MailOutlined /> Send Email
        </Button>,
      ]}
    >
      <Form form={form} layout="horizontal" className="send-email-form">
        <Form.Item
          
          name="type"
          label="Type of Email"
          rules={[{ required: true, message: 'Please select the type of email!' }]}
        >
          <Select placeholder="Select type of email">
            <Option value="Email interview">Email interview</Option>
            <Option value="Email result">Email result</Option>
            <Option value="Internship information">Internship information</Option>
          </Select>
        </Form.Item>

        <Form.Item
        className="send-email-form-item"
          name="message"
          label="Message"
          rules={[{ required: true, message: 'Please input the message!' }]}
        >
          <Input.TextArea rows={4} placeholder="Message" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SendEmailModal;