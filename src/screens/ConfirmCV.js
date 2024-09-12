import {
  DownOutlined,
  FilterOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
  EyeOutlined
} from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Row,
  Select,
  Typography,
  Input,
  Tag,
  Table,
  Modal,
  Spin
} from "antd";
import React, { useState, useEffect } from "react";
import "../assets/styles/FilterForm.css";

const { Option } = Select;
const { Text } = Typography;

const ConfirmCV = ({ cvData, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [modalComments, setModalComments] = useState([]);
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);

  useEffect(() => {
    console.log('cvData in ConfirmCV:', cvData); // Thêm log này
    if (cvData) {
      setFilteredData(cvData);
    }
  }, [cvData]);

  console.log('Current filteredData:', filteredData); // Thêm log này

  const onFinish = (values) => {
    // Implement filter logic here
    const filtered = cvData ? cvData.filter(intern => {
      // Add your filter conditions here
      return true; // Replace with actual conditions
    }) : [];
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const viewInternDetails = (intern) => {
    setSelectedIntern(intern);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSelectedIntern(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedIntern(null);
  };

  const showCommentsModal = (comments) => {
    setModalComments(comments);
    setIsCommentModalVisible(true);
  };

  const handleCommentModalCancel = () => {
    setIsCommentModalVisible(false);
  };

  const getStatusColor = (rank) => {
    const colors = {
      'Failed': 'pink',
      'Pending': 'orange',
    };
    return colors[rank] || 'green';
  };

  const getCfColor = (rank) => {
    const colors = {
      'Confirmed': 'green',
    };
    return colors[rank] || 'pink';
  };

  const columns = [
    {
      title: '',
      dataIndex: 'select',
      key: 'select',
      render: (_, record) => (
        <input type="checkbox" />
      ),
    },
    { title: 'Intern ID', dataIndex: 'internId', key: 'internId' },
    { title: 'Date Interview', dataIndex: 'dateInterview', key: 'dateInterview' },
    { title: 'Time Interview', dataIndex: 'timeInterview', key: 'timeInterview' },
    { title: 'Full Name', dataIndex: 'fullName', key: 'fullName' },
    { title: 'Date Of Birth', dataIndex: 'dateOfBirth', key: 'dateOfBirth' },
    { title: 'Phone Number', dataIndex: 'phoneNumber', key: 'phoneNumber' },
    { title: 'Position', dataIndex: 'position', key: 'position' },
    { title: 'School', dataIndex: 'school', key: 'school' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'CV', dataIndex: 'cv', key: 'cv', render: (text) => <a href={text} target="_blank" rel="noopener noreferrer">Link</a> },
    {
      title: 'Comments',
      dataIndex: 'comments',
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
            <span>
              {comments}
              <EyeOutlined style={{ marginLeft: '5px' }} />
            </span>
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
      title: 'Confirm Email', dataIndex: 'confirmEmail', key: 'cfemail',
      render: (rank) => (
        <Tag color={getCfColor(rank)}>
          {rank.toUpperCase()} <DownOutlined />
        </Tag>
      ),
    },
    { title: 'Interviewer', dataIndex: 'interviewer', key: 'mentor' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (rank) => (
        <Tag color={getStatusColor(rank)}>
          {rank.toUpperCase()} <DownOutlined />
        </Tag>
      ),
    },
    {
      title: 'Button',
      key: 'button',
      render: (_, record) => (
        <Button
          type=""
          color="blue"
          onClick={() => viewInternDetails(record)}
        >
          View
        </Button>
      ),
    },
  ];

  console.log('Columns:', columns); // Thêm log này

  const paginateData = () => {
    console.log('Paginating data:', filteredData); // Thêm log này
    if (!filteredData || filteredData.length === 0) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalItems = filteredData?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      style={{ backgroundColor: "#fff", borderRadius: "34px" }}
    >
      <div className="input-check">
        <div className="input-fields">
          <Row gutter={12}>
            <Col span={8}>
              <Form.Item name="internId">
                <Input placeholder="Enter intern's ID" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="fullName">
                <Input placeholder="Enter intern's Full name" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="dob">
                <DatePicker placeholder="Enter intern's D.O.B" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={8}>
              <Form.Item name="phoneNumber">
                <Input placeholder="Enter intern's Phone number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="address">
                <Input placeholder="Enter intern's Address" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="email">
                <Input placeholder="Enter intern's Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={8}>
              <Form.Item name="major">
                <Input placeholder="Enter intern's Major" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="position">
                <Select placeholder="Select intern's Position">

                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="school">
                <Select placeholder="Select intern's School">

                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={8}>
              <Form.Item name="title">
                <Input placeholder="Enter intern's Title" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="project">

              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="group">
                <Select placeholder="Select intern's Group">

                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Modal
            title="Comments"
            visible={isCommentModalVisible}
            onOk={handleCommentModalCancel}
            onCancel={handleCommentModalCancel}
          >
            {modalComments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </Modal>

          <Modal
            title="View details of Intern"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
            footer={null}
          >
            {selectedIntern ? (
              <div className="intern-details-container">
                <div className="form-group">
                  <label>Intern ID</label>
                  <input type="text" value={selectedIntern.internId} className="form-control" disabled />
                </div>
                <div className="form-group">
                  <label>Date Interview</label>
                  <input type="text" value={selectedIntern.dateInterview} className="form-control" disabled />
                </div>
                <div className="form-group">
                  <label>Time Interview</label>
                  <input type="text" value={selectedIntern.timeInterview} className="form-control" disabled />
                </div>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" value={selectedIntern.fullName} className="form-control" disabled />
                </div>
                <div className="form-group">
                  <label>Date Of Birth</label>
                  <input type="text" value={selectedIntern.dateOfBirth} className="form-control" disabled />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" value={selectedIntern.phoneNumber} className="form-control" disabled />
                </div>
                <div className="form-group">
                  <label>Position</label>
                  <input type="text" value={selectedIntern.position} className="form-control" disabled />
                </div>
                <div className="form-group">
                  <label>School</label>
                  <input type="text" value={selectedIntern.school} className="form-control" disabled />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" value={selectedIntern.address} className="form-control" disabled />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" value={selectedIntern.email} className="form-control" disabled />
                </div>
                <div className="form-group">
                  <label>Link CV</label>
                  <a href={selectedIntern.cv} target="_blank" rel="noopener noreferrer" className="form-control">Link</a>
                </div>
                <div className="form-group">
                  <label>Interviewer</label>
                  <input type="text" value={selectedIntern.mentor} className="form-control" disabled />
                </div>
                <div className="form-group">
                  <label>English Proficiency</label>
                  <input type="text" value="IELTS 7.0" className="form-control" disabled />
                </div>
              </div>
            ) : (<p>No details available</p>)}
          </Modal>
        </div>

        <div
          className="action-buttons"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
          }}
        >
          <Button
            icon={<FilterOutlined />}
            style={{ height: "50px", width: "150px", borderRadius: "15px" }}
          >
            Clean Filters
          </Button>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            htmlType="submit"
            style={{ height: "50px", width: "150px", borderRadius: "15px" }}
          >
            Search
          </Button>
        </div>
      </div>

      <Table columns={columns} dataSource={paginateData()} pagination={false} rowKey={(record) => record.internId || record.id} />

      <Row style={{ background: '#f5f5f5', padding: '10px 20px', borderRadius: '20px', width: '100%', marginTop: '40px', marginBottom: '50px', height: '70px' }} justify="space-between" align="middle">
        <Col>
          <Text>
            {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
          </Text>
        </Col>
        <Col>
          <Row align="middle">
            <Text style={{ marginRight: 8 }}>The page you're on</Text>
            <Select
              value={currentPage}
              style={{ width: 60, marginRight: 16 }}
              onChange={handlePageChange}
            >
              {[...Array(totalPages)].map((_, i) => (
                <Option key={i + 1} value={i + 1}>{i + 1}</Option>
              ))}
            </Select>
            <Button
              icon={<LeftOutlined />}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            />
            <Button
              icon={<RightOutlined />}
              style={{ marginLeft: 8 }}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default ConfirmCV;
