import {
  EyeOutlined,
  MessageOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Input,
  Layout,
  Pagination,
  Row,
  Select,
  Space,
  Table,
  Modal,
} from "antd";
import React, { useState, useEffect } from "react";
import { fetchCVData } from '../services/ProjectApi_cv';
import "../assets/styles/InternList.css";
import InternListView from '../components/modal/InternListView';

const { Content } = Layout;
const { Option } = Select;

const ApproveCV = ({ onSelectIntern }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [modalComments, setModalComments] = useState([]);
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);
  const [currentComments, setCurrentComments] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCVData();
  }, []);

  const loadCVData = async () => {
    try {
      setLoading(true);
      const cvData = await fetchCVData();
      setData(cvData);
    } catch (error) {
      console.error('Error loading CV data:', error);
    } finally {
      setLoading(false);
    }
  };

  const showModal = (record) => {
    setSelectedIntern(record);
    setIsModalVisible(true);
  };

  const showCommentsModal = (comments) => {
    setCurrentComments(comments);
    setIsCommentModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleCommentModalCancel = () => {
    setIsCommentModalVisible(false);
  };

  const handleStatusChange = (value, record) => {
    console.log(`Status changed to ${value} for intern ${record.internId}`);
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
      title: 'Comments',
      dataIndex: 'commentsCV',
      key: 'comments',
      render: (comments) => {
        if (Array.isArray(comments) && comments.length > 0) {
          return (
            <Button onClick={() => showCommentsModal(comments)}>
              {`${comments.length} comment${comments.length > 1 ? 's' : ''}`}
              <EyeOutlined style={{ marginLeft: '5px' }} />
            </Button>
          );
        } else if (typeof comments === 'string') {
          return (
            <Button onClick={() => showCommentsModal([comments])}>
              View Comment
              <EyeOutlined style={{ marginLeft: '5px' }} />
            </Button>
          );
        } else {
          return (
            <span>
              No comments
              <EyeOutlined style={{ marginLeft: '5px' }} />
            </span>
          );
        }
      }
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => {
        const statusColors = {
          Passed: "green",
          Failed: "red",
          Pending: "orange"
        };
        return (
          <Select
            defaultValue={text}
            style={{ width: 100 }}
            onChange={(value) => handleStatusChange(value, record)}
          >
            {Object.entries(statusColors).map(([status, color]) => (
              <Option key={status} value={status}>
                <span style={{ color }}>{status}</span>
              </Option>
            ))}
          </Select>
        );
      },
    },
    {
      title: "Button",
      key: "button",
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
          <div className="table-container" style={{ flex: 3, display: 'flex', flexDirection: 'column', }}>
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
          pagination={false}
          loading={loading}
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

        <Modal
          title="Comments"
          visible={isCommentModalVisible}
          onCancel={handleCommentModalCancel}
          footer={null}
        >
          <ul>
            {currentComments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </Modal>
      </Content>
    </Layout>
  );
};

export default ApproveCV;
