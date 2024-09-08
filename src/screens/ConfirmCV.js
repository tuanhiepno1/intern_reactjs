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
  Modal
} from "antd";
import React, { useState } from "react";
import "../assets/styles/FilterForm.css";


const { Option } = Select;
const { Text } = Typography;

const ConfirmCV = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalComments, setModalComments] = useState([]);
  const [selectedIntern, setSelectedIntern] = useState(null);


  const showCommentsModal = (comments) => {
    setModalComments(comments);
    setIsModalVisible(true);
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

{ title: 'Confirm Email', dataIndex: 'cfemail', key: 'cfemail',
  render: (rank) => (
    <Tag color={getCfColor(rank)}>
      {rank.toUpperCase()} <DownOutlined />
    </Tag>
  ),
 },
 { title: 'Interviewer', dataIndex: 'mentor', key: 'mentor' },
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

  const internData = [
    {
      key: '1',
      internId: '#12345328',
      dateInterview: '2 Jan 2023',
      timeInterview: '10:15:00 AM',
      fullName: 'Esther Eden',
      dateOfBirth: '16/07/2001',
      phoneNumber: '0376782528',
      position: 'Back-End',
      school: 'FPT University',
      address: 'District 9',
      email: 'abc@gmail.com',
      cfemail:'Confirmed',
      cv: 'https://example.com/cv',
      comments: ['Good performance', 'Shows initiative'],
      role: 'Leader',
      project: 'Intern System',
      groupZalo: 'FE Intern System',
      mentor: 'Esther Eden',
      status: 'Passed',
      internshipContract: 'Signed',
      rank: 'Fresher'
  },
  {
      key: '2',
      internId: '#12345329',
      dateInterview: '3 Jan 2023',
      timeInterview: '11:00:00 AM',
      fullName: 'John Doe',
      dateOfBirth: '20/08/2000',
      phoneNumber: '0376782529',
      position: 'Front-End',
      school: 'RMIT University',
      address: 'District 7',
      email: 'def@gmail.com',
      cfemail:'Not confirmed',
      cv: 'https://example.com/cv2',
      comments: ['Needs improvement', 'Willing to learn'],
      role: 'Member',
      project: 'E-commerce Platform',
      groupZalo: 'BE Intern System',
      mentor: 'Jane Smith',
      status: 'Failed',
      internshipContract: 'Not signed',
      rank: 'Junior',
  },
  {
      key: '3',
      internId: '#12345330',
      dateInterview: '4 Jan 2023',
      timeInterview: '09:30:00 AM',
      fullName: 'Alice Johnson',
      dateOfBirth: '05/03/2002',
      phoneNumber: '0376782530',
      position: 'Full-Stack',
      school: 'Ho Chi Minh City University of Technology',
      address: 'District 5',
      email: 'ghi@gmail.com',
      cfemail:'Not confirmed',
      cv: 'https://example.com/cv3',
      comments: ['Excellent work', 'Quick learner', 'Team player'],
      role: 'Member',
      project: 'Mobile App Development',
      groupZalo: 'Mobile Intern System',
      mentor: 'Bob Williams',
      status: 'Pending',
      internshipContract: 'Signed',
      rank: 'Junior',
  },
  {
      key: '4',
      internId: '#12345331',
      dateInterview: '5 Jan 2023',
      timeInterview: '14:00:00 PM',
      fullName: 'Emma Wilson',
      dateOfBirth: '12/11/2001',
      phoneNumber: '0376782531',
      position: 'UI/UX Designer',
      school: 'Vietnam National University',
      address: 'District 1',
      email: 'jkl@gmail.com',
      cfemail:'Confirmed',
      cv: 'https://example.com/cv4',
      comments: ['Great potential', 'Creative thinker'],
      role: 'Member',
      project: 'Website Redesign',
      groupZalo: 'Design Intern System',
      mentor: 'Charlie Brown',
      status: 'Failed',
      internshipContract: 'Signed',
      rank: 'Junior',
  },
  {
      key: '5',
      internId: '#12345332',
      dateInterview: '6 Jan 2023',
      timeInterview: '10:45:00 AM',
      fullName: 'Michael Chen',
      dateOfBirth: '28/09/2000',
      phoneNumber: '0376782532',
      position: 'Data Analyst',
      school: 'Ho Chi Minh City University of Science',
      address: 'District 3',
      email: 'mno@gmail.com',
      cfemail:'Confirmed',
      cv: 'https://example.com/cv5',
      comments: ['Average performance', 'Needs guidance'],
      role: 'Member',
      project: 'Data Visualization',
      groupZalo: 'Data Intern System',
      mentor: 'Diana Lee',
      status: 'Passed',
      internshipContract: 'Not signed',
      rank: 'Junior',
  },
  {
      key: '6',
      internId: '#12345333',
      dateInterview: '7 Jan 2023',
      timeInterview: '13:30:00 PM',
      fullName: 'Sophie Taylor',
      dateOfBirth: '19/04/2002',
      phoneNumber: '0376782533',
      position: 'Mobile Developer',
      school: 'International University',
      address: 'District 2',
      email: 'pqr@gmail.com',
      cfemail:'Not confirmed',
      cv: 'https://example.com/cv6',
      comments: ['Shows initiative', 'Good problem-solver', 'Enthusiastic'],
      role: 'Leader',
      project: 'IoT Mobile App',
      groupZalo: 'Mobile Intern System',
      mentor: 'Frank White',
      status: 'Pending',
      internshipContract: 'Signed',
      rank: 'Junior',
  },
  {
      key: '7',
      internId: '#12345334',
      dateInterview: '8 Jan 2023',
      timeInterview: '11:15:00 AM',
      fullName: 'Daniel Kim',
      dateOfBirth: '30/06/2001',
      phoneNumber: '0376782534',
      position: 'DevOps Engineer',
      school: 'Ho Chi Minh City University of Technology',
      address: 'District 4',
      email: 'stu@gmail.com',
      cfemail:'Not confirmed',
      cv: 'https://example.com/cv7',
      comments: ['Quick learner', 'Adaptable'],
      role: 'Member',
      project: 'CI/CD Pipeline',
      groupZalo: 'DevOps Intern System',
      mentor: 'Grace Park',
      status: 'Failed',
      internshipContract: 'Signed',
      rank: 'Junior',
  },
  {
      key: '8',
      internId: '#12345335',
      dateInterview: '9 Jan 2023',
      timeInterview: '15:00:00 PM',
      fullName: 'Olivia Garcia',
      dateOfBirth: '22/02/2000',
      phoneNumber: '0376782535',
      position: 'QA Tester',
      school: 'RMIT University',
      address: 'District 7',
      email: 'vwx@gmail.com',
      cfemail:'Confirmed',
      cv: 'https://example.com/cv8',
      comments: ['Attention to detail', 'Thorough'],
      role: 'Member',
      project: 'Automated Testing',
      groupZalo: 'QA Intern System',
      mentor: 'Henry Davis',
      status: 'Passed',
      internshipContract: 'Not signed',
      rank: 'Junior',
  },
  {
      key: '9',
      internId: '#12345336',
      dateInterview: '10 Jan 2023',
      timeInterview: '09:45:00 AM',
      fullName: 'Liam Nguyen',
      dateOfBirth: '14/10/2002',
      phoneNumber: '0376782536',
      position: 'Machine Learning Engineer',
      school: 'Vietnam National University',
      address: 'District 10',
      email: 'yza@gmail.com',
      cfemail:'Not confirmed',
      cv: 'https://example.com/cv9',
      comments: ['Innovative thinker', 'Strong analytical skills', 'Fast learner'],
      role: 'Leader',
      project: 'AI Chatbot',
      groupZalo: 'AI Intern System',
      mentor: 'Isabella Tran',
      status: 'Passed',
      internshipContract: 'Signed',
      rank: 'Junior',
  },
  {
      key: '10',
      internId: '#12345337',
      dateInterview: '11 Jan 2023',
      timeInterview: '14:30:00 PM',
      fullName: 'Ava Pham',
      dateOfBirth: '08/12/2001',
      phoneNumber: '0376782537',
      position: 'Blockchain Developer',
      school: 'FPT University',
      address: 'District 6',
      email: 'bcd@gmail.com',
      cfemail:'Not confirmed',
      cv: 'https://example.com/cv10',
      comments: ['Strong problem-solver', 'Innovative'],
      role: 'Member',
      project: 'Decentralized App',
      groupZalo: 'Blockchain Intern System',
      mentor: 'Jack Robinson',
      status: 'Failed',
      internshipContract: 'Signed',
      rank: 'Junior',
  },
  {
      key: '11',
      internId: '#12345338',
      dateInterview: '12 Jan 2023',
      timeInterview: '10:00:00 AM',
      fullName: 'Noah Le',
      dateOfBirth: '25/05/2000',
      phoneNumber: '0376782538',
      position: 'Cloud Engineer',
      school: 'Ho Chi Minh City University of Science',
      address: 'District 8',
      email: 'efg@gmail.com',
      cfemail:'Confirmed',
      cv: 'https://example.com/cv11',
      comments: ['Adaptable team player', 'Good communication skills'],
      role: 'Member',
      project: 'Cloud Migration',
      groupZalo: 'Cloud Intern System',
      mentor: 'Sophia Hoang',
      status: 'Passed',
      internshipContract: 'Not signed',
      rank: 'Junior',
  },
  {
      key: '12',
      internId: '#12345339',
      dateInterview: '13 Jan 2023',
      timeInterview: '13:00:00 PM',
      fullName: 'Mia Tran',
      dateOfBirth: '03/09/2002',
      phoneNumber: '0376782539',
      position: 'Cybersecurity Analyst',
      school: 'International University',
      address: 'District 11',
      email: 'hij@gmail.com',
      cfemail:'Not confirmed',
      cv: 'https://example.com/cv12',
      comments: ['Proactive learner', 'Detail-oriented', 'Strong work ethic'],
      role: 'Leader',
      project: 'Security Audit',
      groupZalo: 'Security Intern System',
      mentor: 'William Vo',
      status: 'Passed',
      internshipContract: 'Signed',
      rank: 'Junior',
  }
    
  ];

  const totalItems = internData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return internData.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


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
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
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
      ):(<p>No details available</p>)}
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

      <Table columns={columns} dataSource={paginateData()} pagination={false} />

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
