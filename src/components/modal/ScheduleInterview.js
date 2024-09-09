import React from 'react';
import { Modal, Form, Input, Select, DatePicker, TimePicker, Button, Row, Col } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import '../../assets/styles/ScheduleInterview.css';

const { Option } = Select;
const { TextArea } = Input;

const ScheduleInterview = ({ visible, onClose, internId }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Submitted values:', values);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      title={`Schedule interview for Intern's ID: ${internId}`}
      onCancel={onClose}
      footer={null}
      width={800}
      className="schedule-interview-modal"
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="date" label="Date">
              <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" placeholder="DD/MM/YYYY" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="startTime" label="Start Time">
              <TimePicker style={{ width: '100%' }} format="HH:mm" placeholder="12:00 AM" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="duration" label="Time Duration">
              <Select placeholder="15 minutes">
                <Option value="15">15 minutes</Option>
                <Option value="30">30 minutes</Option>
                <Option value="45">45 minutes</Option>
                <Option value="60">60 minutes</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="interviewType" label="Types of Interviews">
              <Select placeholder="Online/Offline">
                <Option value="online">Online</Option>
                <Option value="offline">Offline</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="interviewer" label="Interviewer">
              <Select placeholder="Position">
                <Option value="position">Position</Option>
                <Option value="nguyen_van_a">Nguyen Van A</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="linkOrAddress" label="Link Google Meet/Address">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="emailType" label="Send Email">
              <Select placeholder="Types of Email">
                <Option value="interview">Email interview</Option>
                <Option value="result">Email result</Option>
                <Option value="info">Internship information</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="rank" label="Rank">
              <Select placeholder="Intern/Senior/Junior">
                <Option value="intern">Intern</Option>
                <Option value="senior">Senior</Option>
                <Option value="junior">Junior</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="to" label="To:">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="bcc" label="BCC:">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="emailContent" label="Choose types of Email">
              <Select placeholder="Types of Email">
                <Option value="interview">Email interview</Option>
                <Option value="result">Email result</Option>
                <Option value="info">Internship information</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item name="emailBody">
              <TextArea rows={4} placeholder="Enter your mail..." />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="set-schedule-btn" icon={<ClockCircleOutlined />}>
            Set schedule
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ScheduleInterview;
