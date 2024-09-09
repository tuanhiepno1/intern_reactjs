import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Button,
  Input,
  Table,
  Select,
  DatePicker,
  Space,
  Pagination,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  EyeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "../assets/styles/InternList.css";
import InternListView from '../components/modal/InternListView';

const { Content } = Layout;
const { Option } = Select;

const InternList = ({ onSelectIntern }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedIntern, setSelectedIntern] = useState(null);

  const showModal = (record) => {
    setSelectedIntern(record);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    { title: "Intern ID", dataIndex: "internId", key: "internId" },
    {
      title: "Date Submitted Form",
      dataIndex: "dateSubmitted",
      key: "dateSubmitted",
    },
    { title: "Full Name", dataIndex: "fullName", key: "fullName" },
    { title: "Date Of Birth", dataIndex: "dateOfBirth", key: "dateOfBirth" },
    { title: "Phone number", dataIndex: "phoneNumber", key: "phoneNumber" },
    { title: "Position", dataIndex: "position", key: "position" },
    { title: "School", dataIndex: "school", key: "school" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "CV",
      dataIndex: "cv",
      key: "cv",
      render: (text) => <a href={text}>Link</a>,
    },
    {
      title: "Comments CV",
      dataIndex: "commentsCV",
      key: "commentsCV",
      render: (text, record) => (
        <Space>
          <span>{text} comments</span>
          <Button icon={<PlusOutlined />} size="small" />
        </Space>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => {
        let color =
          text === "Passed" ? "green" : text === "Failed" ? "red" : "orange";
        return <span style={{ color: color }}>{text}</span>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button icon={<EyeOutlined />} size="small" onClick={() => showModal(record)}>
            View
          </Button>
          <Button icon={<MessageOutlined />} size="small">
            Feedback
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      internId: "#12345128",
      dateSubmitted: "2 Jan 2023",
      fullName: "Esther Eden",
      dateOfBirth: "16/07/2001",
      phoneNumber: "0376782528",
      position: "Back-End",
      school: "FPT University",
      address: "District 9",
      email: "abc@gmail.com",
      cv: "#",
      commentsCV: "2",
      status: "Passed",
    },
    {
        key: "2",
        internId: "#12345128",
        dateSubmitted: "2 Jan 2023",
        fullName: "Esther Eden",
        dateOfBirth: "16/07/2001",
        phoneNumber: "0376782528",
        position: "Back-End",
        school: "FPT University",
        address: "District 9",
        email: "abc@gmail.com",
        cv: "#",
        commentsCV: "2",
        status: "Passed",
      },
      {
        key: "3",
        internId: "#12345128",
        dateSubmitted: "2 Jan 2023",
        fullName: "Esther Eden",
        dateOfBirth: "16/07/2001",
        phoneNumber: "0376782528",
        position: "Back-End",
        school: "FPT University",
        address: "District 9",
        email: "abc@gmail.com",
        cv: "#",
        commentsCV: "2",
        status: "Passed",
      },
      {
        key: "4",
        internId: "#12345128",
        dateSubmitted: "2 Jan 2023",
        fullName: "Esther Eden",
        dateOfBirth: "16/07/2001",
        phoneNumber: "0376782528",
        position: "Back-End",
        school: "FPT University",
        address: "District 9",
        email: "abc@gmail.com",
        cv: "#",
        commentsCV: "2",
        status: "Passed",
      },
    // Add more data here...
  ];

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      if (selectedRows.length > 0) {
        onSelectIntern(selectedRows[0].internId);
      }
    },
  };

  return (
    <Layout className="intern-list-layout">
      <Content className="intern-list-content">
        <div style={{ display: 'flex' }}>
          <div className="filter-form" style={{ flex: 7 }}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Input placeholder="Enter Intern's ID" />
              </Col>
              <Col span={8}>
                <Input placeholder="Enter Intern's Full name" />
              </Col>
              <Col span={8}>
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="Enter Intern's D.O.B"
                />
              </Col>
              <Col span={8}>
                <Input placeholder="Enter Intern's Phone number" />
              </Col>
              <Col span={8}>
                <Select
                  style={{ width: "100%" }}
                  placeholder="Enter Intern's School"
                >
                  <Option value="fpt">FPT University</Option>
                  {/* Add more options */}
                </Select>
              </Col>
              <Col span={8}>
                <Input placeholder="Enter Intern's Email" />
              </Col>
              <Col span={8}>
                <Select
                  style={{ width: "100%" }}
                  placeholder="Enter Intern's Major"
                >
                  <Option value="it">Information Technology</Option>
                  {/* Add more options */}
                </Select>
              </Col>
              <Col span={8}>
                <Select
                  style={{ width: "100%" }}
                  placeholder="Enter Intern's Position"
                >
                  <Option value="backend">Back-End</Option>
                  {/* Add more options */}
                </Select>
              </Col>
              <Col span={8}>
                <Input placeholder="Enter Intern's Address" />
              </Col>
              <Col span={8}>
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="Enter Intern's Date Submitted Form"
                />
              </Col>
            </Row>
          </div>
          <div className="table-container" style={{ flex: 3, display: 'flex', flexDirection: 'column',  }}>
            <Col>
              <Button icon={<SearchOutlined />}>Clean Filters</Button>
            </Col>
            <Col style={{ marginTop: '10px' }}>
              <Button type="primary" icon={<SearchOutlined />}>
                Search
              </Button>
            </Col>
          </div>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={false} // Remove pagination from the table
        />
        
        <Row
          justify="space-between "
          align="middle"
          style={{ marginTop: "20px" }}
        >
          <Col>
            <Space align="center" className="pagination-container">
              <span>1 - 5 of 56</span>
              <Pagination 
                simple 
                defaultCurrent={1} 
                total={56} 
                pageSize={5}
                showSizeChanger={false}
              />
            </Space>
          </Col>
        </Row>

        <InternListView
          visible={isModalVisible}
          onClose={handleModalCancel}
          internData={selectedIntern}
        />
      </Content>
    </Layout>
  );
};

export default InternList;
