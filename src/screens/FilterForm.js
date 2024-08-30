import {
  DownOutlined,
  FilterOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
  UserOutlined
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Dropdown,
  Form,
  Menu,
  Row,
  Select,
  Typography,
} from "antd";
import React, { useState } from "react";
import "../assets/styles/FilterForm.css";


const { Option } = Select;
const { Text, Title } = Typography;

const FilterForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const projectData = [
    {
      name: "Intern System",
      status: "In process",
      position: "Back-End, Front-End, BA, Design",
      technology: ".NET, ReactJS, Trello,...",
      leaders: [
        { name: "Leader 1", avatar: "https://linktoavatar.com/avatar1.png" },
        { name: "Sub Leader", avatar: "https://linktoavatar.com/avatar2.png" },
      ],
      mentor: { name: "Mentor 1", avatar: "https://linktoavatar.com/mentor.png" },
      zaloLink: "#",
      startDate: "05 Jan 2023",
      releaseDate: "05 Apr 2023",
      team: [
        { name: "Member 1", avatar: "https://linktoavatar.com/member1.png" },
        { name: "Member 2", avatar: "https://linktoavatar.com/member2.png" },
      ],
      extraMembers: 2,
      issues: 14,
    },
    {
      name: "HRM System",
      status: "In process",
      position: "Back-End, Front-End, BA, Design",
      technology: ".NET, ReactJS, Trello,...",
      leaders: [
        { name: "Leader 1", avatar: "https://linktoavatar.com/avatar1.png" },
        { name: "Sub Leader", avatar: "https://linktoavatar.com/avatar2.png" },
      ],
      mentor: { name: "Mentor 1", avatar: "https://linktoavatar.com/mentor.png" },
      zaloLink: "#",
      startDate: "05 Jan 2023",
      releaseDate: "05 Apr 2023",
      team: [
        { name: "Member 1", avatar: "https://linktoavatar.com/member1.png" },
        { name: "Member 2", avatar: "https://linktoavatar.com/member2.png" },
      ],
      extraMembers: 2,
      issues: 14,
    },
    // Thêm 4 đối tượng dự án khác tương tự
    {
      name: "Project 3",
      status: "In process",
      position: "Back-End, Front-End, BA, Design",
      technology: ".NET, ReactJS, Trello,...",
      leaders: [
        { name: "Leader 1", avatar: "https://linktoavatar.com/avatar1.png" },
        { name: "Sub Leader", avatar: "https://linktoavatar.com/avatar2.png" },
      ],
      mentor: { name: "Mentor 1", avatar: "https://linktoavatar.com/mentor.png" },
      zaloLink: "#",
      startDate: "05 Jan 2023",
      releaseDate: "05 Apr 2023",
      team: [
        { name: "Member 1", avatar: "https://linktoavatar.com/member1.png" },
        { name: "Member 2", avatar: "https://linktoavatar.com/member2.png" },
      ],
      extraMembers: 2,
      issues: 14,
    },
    {
      name: "Project 4",
      status: "In process",
      position: "Back-End, Front-End, BA, Design",
      technology: ".NET, ReactJS, Trello,...",
      leaders: [
        { name: "Leader 1", avatar: "https://linktoavatar.com/avatar1.png" },
        { name: "Sub Leader", avatar: "https://linktoavatar.com/avatar2.png" },
      ],
      mentor: { name: "Mentor 1", avatar: "https://linktoavatar.com/mentor.png" },
      zaloLink: "#",
      startDate: "05 Jan 2023",
      releaseDate: "05 Apr 2023",
      team: [
        { name: "Member 1", avatar: "https://linktoavatar.com/member1.png" },
        { name: "Member 2", avatar: "https://linktoavatar.com/member2.png" },
      ],
      extraMembers: 2,
      issues: 14,
    },
    {
      name: "Project 5",
      status: "In process",
      position: "Back-End, Front-End, BA, Design",
      technology: ".NET, ReactJS, Trello,...",
      leaders: [
        { name: "Leader 1", avatar: "https://linktoavatar.com/avatar1.png" },
        { name: "Sub Leader", avatar: "https://linktoavatar.com/avatar2.png" },
      ],
      mentor: { name: "Mentor 1", avatar: "https://linktoavatar.com/mentor.png" },
      zaloLink: "#",
      startDate: "05 Jan 2023",
      releaseDate: "05 Apr 2023",
      team: [
        { name: "Member 1", avatar: "https://linktoavatar.com/member1.png" },
        { name: "Member 2", avatar: "https://linktoavatar.com/member2.png" },
      ],
      extraMembers: 2,
      issues: 14,
    },
    {
      name: "Project 6",
      status: "In process",
      position: "Back-End, Front-End, BA, Design",
      technology: ".NET, ReactJS, Trello,...",
      leaders: [
        { name: "Leader 1", avatar: "https://linktoavatar.com/avatar1.png" },
        { name: "Sub Leader", avatar: "https://linktoavatar.com/avatar2.png" },
      ],
      mentor: { name: "Mentor 1", avatar: "https://linktoavatar.com/mentor.png" },
      zaloLink: "#",
      startDate: "05 Jan 2023",
      releaseDate: "05 Apr 2023",
      team: [
        { name: "Member 1", avatar: "https://linktoavatar.com/member1.png" },
        { name: "Member 2", avatar: "https://linktoavatar.com/member2.png" },
      ],
      extraMembers: 2,
      issues: 14,
    },
    {
      name: "Project 7",
      status: "Completed",
      position: "Full-Stack, DevOps",
      technology: "Node.js, React, Docker",
      leaders: [
        { name: "Leader 7", avatar: "https://linktoavatar.com/avatar7.png" },
      ],
      mentor: { name: "Mentor 7", avatar: "https://linktoavatar.com/mentor7.png" },
      zaloLink: "#",
      startDate: "01 Feb 2023",
      releaseDate: "01 May 2023",
      team: [
        { name: "Member 7", avatar: "https://linktoavatar.com/member7.png" },
      ],
      extraMembers: 1,
      issues: 5,
    },
    // Add more projects as needed...
  ];

  const totalItems = projectData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProjects = projectData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const menu = (
    <Menu>
      <Menu.Item key="1">Not Started</Menu.Item>
      <Menu.Item key="2">In Process</Menu.Item>
      <Menu.Item key="3">Completed</Menu.Item>
    </Menu>
  );

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
              <Form.Item name="projectName">
                <Select placeholder="Select a project">
                  <Option value="project1">Project 1</Option>
                  <Option value="project2">Project 2</Option>
                  <Option value="project3">Project 3</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="position">
                <Select placeholder="Select a position">
                  <Option value="back-end">Back-End</Option>
                  <Option value="front-end">Front-End</Option>
                  <Option value="design">Design</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="technology">
                <Select placeholder="Technology">
                  <Option value="leader1">Leader 1</Option>
                  <Option value="leader2">Leader 2</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={8}>
              <Form.Item name="leader">
                <Select placeholder="Select a leader">
                  <Option value="leader1">Leader 1</Option>
                  <Option value="leader2">Leader 2</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="subLeader">
                <Select placeholder="Select a sub leader">
                  <Option value="subLeader1">Sub Leader 1</Option>
                  <Option value="subLeader2">Sub Leader 2</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="mentor">
                <Select placeholder="Mentor">
                  <Option value="leader1">Leader 1</Option>
                  <Option value="leader2">Leader 2</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={8}>
              <Form.Item name="releaseDate">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
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

      {/* Thẻ hiển thị thông tin dự án */}

      <Row className="action-project" gutter={[16, 16]}>
        {paginatedProjects.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card style={{ borderRadius: '8px', height: '100%' }}>
              <Row justify="space-between" align="middle">
                <Col>
                  <Title level={4}>{project.name}</Title>
                </Col>
                <Col style={{ textAlign: 'right', display: 'flex', alignItems: 'center' }}>
                  <Dropdown overlay={menu}>
                    <Badge
                      color="yellow"
                      text={
                        <span>
                          {project.status} <DownOutlined />
                        </span>
                      }
                    />
                  </Dropdown>
                  <Checkbox style={{ marginLeft: '10px' }} />
                </Col>
              </Row>
              <Row style={{ marginBottom: '8px' }}>
                <Text strong>Position: </Text>
                <Text>{project.position}</Text>
              </Row>
              <Row style={{ marginBottom: '8px' }}>
                <Text strong>Technology: </Text>
                <Text>{project.technology}</Text>
              </Row>
              <Row style={{ marginBottom: '8px' }}>
                <Text strong>Leader - Sub Leader: </Text>
                <Avatar.Group className="avatar-project-management">
                  {project.leaders.map((leader, index) => (
                    <Avatar key={index} src={leader.avatar} icon={<UserOutlined />} />
                  ))}
                </Avatar.Group>
              </Row>
              <Row style={{ marginBottom: '8px', alignItems: 'center' }}>
                <Text strong>Mentor: </Text>
                <Avatar src={project.mentor.avatar} icon={<UserOutlined />} />
              </Row>
              <Row style={{ marginBottom: '8px' }}>
                <Text strong>Group Zalo: </Text>
                <a href={project.zaloLink}>Link</a>
              </Row>
              <Row className="start-date-project" justify="space-between" style={{ marginTop: '12px' }}>
                <Text style={{ color: 'green' }}>Start Date: {project.startDate}</Text>
                <Text style={{ color: 'red' }}>Release Date: {project.releaseDate}</Text>
              </Row>
              <Row justify="space-between" style={{ marginTop: '12px' }}>
                <Avatar.Group>
                  {project.team.map((member, index) => (
                    <Avatar key={index} src={member.avatar} icon={<UserOutlined />} />
                  ))}
                  {project.extraMembers && (
                    <Avatar style={{ backgroundColor: '#f56a00' }}>
                      +{project.extraMembers}
                    </Avatar>
                  )}
                </Avatar.Group>
                <Text>{project.issues} issues</Text>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
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

export default FilterForm;
