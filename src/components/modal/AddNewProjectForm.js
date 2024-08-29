import React from "react";
import { Modal, Form, Input, DatePicker, Row, Col, Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import '../../assets/styles/AddNewProjectForm.css'
const AddNewProjectForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const statusMenu = (
    <Menu>
      <Menu.Item key="1">Not Started</Menu.Item>
      <Menu.Item key="2">In Process</Menu.Item>
      <Menu.Item key="3">Completed</Menu.Item>
    </Menu>
  );

  return (
    <Modal
      visible={visible}
      title="Add New Project"
      okText="Create Project"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="add_new_project"
        initialValues={{
          status: "In process",
        }}
        className="add-new-project"
      >
        <Row gutter={16} style={{width: '100%', marginTop: '30px'}}>
          <Col span={8}>
            <Form.Item
              name="title"
              label="Project Title"
              rules={[{ required: true, message: "Please input the project title!" }]}
            >
              <Input placeholder="Enter project title" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="position"
              label="Position"
              rules={[{ required: true, message: "Please input the position!" }]}
            >
              <Input placeholder="Enter position" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="technology"
              label="Technology"
              rules={[{ required: true, message: "Please input the technology!" }]}
            >
              <Input placeholder="Enter technology" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} style={{width: '100%', marginTop: '30px'}}>
          <Col span={8}>
            <Form.Item
              name="leader"
              label="Leader"
              rules={[{ required: true, message: "Please input the leader!" }]}
            >
              <Input placeholder="Enter leader" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="subLeader"
              label="Sub Leader"
              rules={[{ required: true, message: "Please input the sub leader!" }]}
            >
              <Input placeholder="Enter sub leader" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="mentor"
              label="Mentor"
              rules={[{ required: true, message: "Please input the mentor!" }]}
            >
              <Input placeholder="Enter mentor" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} style={{width: '100%', marginTop: '30px'}}>
          <Col span={8}>
            <Form.Item
              name="startDate"
              label="Start Date"
              rules={[{ required: true, message: "Please select the start date!" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="releaseDate"
              label="Release Date"
              rules={[{ required: true, message: "Please select the release date!" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="groupZalo"
              label="Group Zalo"
            >
              <Input placeholder="Enter Group Zalo" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} style={{width: '100%', marginTop: '30px'}}>
          <Col span={8}>
            <Form.Item
              name="status"
              label="Status"
            >
              <Dropdown overlay={statusMenu} trigger={['click']}>
                <Button>
                  In process <DownOutlined />
                </Button>
              </Dropdown>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddNewProjectForm;
