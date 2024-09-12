import { UserAddOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Modal, Row, Col } from 'antd';
import React from 'react';
import './style.css';

const { Option } = Select;

function CreateGroupModal({ visible, onCancel }) {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then(values => {
      console.log('Form values:', values);

      onCancel();
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
  };

  return (
    <Modal
      className="create-group-modal"
      visible={visible}
      title={<h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>Create Group</h1>}
      onCancel={onCancel}
      footer={null}
      width={1000}
    >
      <Form form={form} layout="horizontal" className="create-group-form">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="role" rules={[{ required: true }]}>
              <label className="create-group-label">Role</label>
              <Select className="create-group-select" placeholder="Mentor/Leader/Intern">
                <Option value="mentor">Mentor</Option>
                <Option value="leader">Leader</Option>
                <Option value="intern">Intern</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="project" rules={[{ required: true }]}>
              <label className="create-group-label">Project</label>
              <Select className="create-group-select" placeholder="Intern System">
                <Option value="internSystem">Intern System</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="groupZalo" rules={[{ required: true }]}>
              <label className="create-group-label">Group Zalo</label>
              <Input className="create-group-input" placeholder="FE Intern System" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item name="mentor" rules={[{ required: true }]}>
              <label className="create-group-label">Mentor</label>
              <Input className="create-group-input" placeholder="Esther Eden" />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end">
          <Col>
            <Form.Item style={{ marginBottom: 0 }}>
              <Button className="create-group-button" type="primary" onClick={handleOk} icon={<UserAddOutlined />}>
                Create Group
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default CreateGroupModal;
