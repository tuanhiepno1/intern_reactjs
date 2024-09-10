import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Avatar,
  Typography,
  Button,
  Checkbox,
  Select,
  Space,
} from "antd";
import { UserOutlined, RightOutlined, LeftOutlined } from "@ant-design/icons";
import ViewDetailsOfPosition from "../components/modal/ViewDetailsofPosition";
import "../assets/styles/Management.css";

const { Text, Title } = Typography;
const { Option } = Select;
const positionData = [
  {
    title: "Back-End",
    people: 100,
    technology: ".NET, Java,...",
    rank: "Intern, Fresher, Junior, Middle, Senior",
    groupZalo: "Link",
    members: 5,
  },
  {
    title: "Front-End",
    people: 100,
    technology: "ReactJS,...",
    rank: "Intern, Fresher, Junior, Middle, Senior",
    groupZalo: "Link",
    members: 5,
  },
  {
    title: "Business Analyst",
    people: 100,
    technology: "Trello,...",
    rank: "Intern, Fresher, Junior, Middle, Senior",
    groupZalo: "Link",
    members: 5,
  },
  {
    title: "Marketing",
    people: 100,
    technology: "Excel, Word,...",
    rank: "Intern, Fresher, Junior, Middle, Senior",
    groupZalo: "Link",
    members: 5,
  },
  {
    title: "Designer",
    people: 100,
    technology: "ReactJS,...",
    rank: "Intern, Fresher, Junior, Middle, Senior",
    groupZalo: "Link",
    members: 5,
  },
  {
    title: "Sales Executive",
    people: 100,
    technology: "Trello,...",
    rank: "Intern, Fresher, Junior, Middle, Senior",
    groupZalo: "Link",
    members: 5,
  },
  {
    title: "DevOps Engineer",
    people: 50,
    technology: "Docker, Kubernetes, Jenkins,...",
    rank: "Junior, Middle, Senior",
    groupZalo: "Link",
    members: 3,
  },
  {
    title: "Data Scientist",
    people: 30,
    technology: "Python, R, TensorFlow,...",
    rank: "Junior, Middle, Senior",
    groupZalo: "Link",
    members: 4,
  },
  {
    title: "UI/UX Designer",
    people: 40,
    technology: "Figma, Adobe XD,...",
    rank: "Junior, Middle, Senior",
    groupZalo: "Link",
    members: 4,
  },
  {
    title: "Product Manager",
    people: 20,
    technology: "Jira, Confluence,...",
    rank: "Middle, Senior",
    groupZalo: "Link",
    members: 2,
  },
  {
    title: "QA Engineer",
    people: 60,
    technology: "Selenium, JUnit,...",
    rank: "Intern, Junior, Middle, Senior",
    groupZalo: "Link",
    members: 6,
  },
  {
    title: "Mobile Developer",
    people: 80,
    technology: "React Native, Flutter,...",
    rank: "Junior, Middle, Senior",
    groupZalo: "Link",
    members: 5,
  }
];

const Management = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewDetailsVisible, setViewDetailsVisible] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const itemsPerPage = 6;

  const totalItems = positionData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPositions = positionData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const showViewDetails = (position) => {
    setSelectedPosition(position);
    setViewDetailsVisible(true);
  };

  const handleViewDetailsCancel = () => {
    setViewDetailsVisible(false);
  };

  return (
    <div className="management-container">
      <Row gutter={[16, 16]} style={{ rowGap: "40px" }}>
        {paginatedPositions.map((position, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card className="position-card">
              <Row justify="space-between" align="middle">
                <Title level={4}>{position.title}</Title>
                <div>
                  <Text className="people-count">{position.people} people</Text>
                  <Checkbox className="position-checkbox" />
                </div>
              </Row>
              <div className="position-info">
                <Text>Technology: {position.technology}</Text>
                <Text>Rank: {position.rank}</Text>
                <Text>
                  Group Zalo: <a href={position.groupZalo}>Link</a>
                </Text>
              </div>
              <Row
                justify="space-between"
                align="middle"
                className="card-footer"
              >
                <Avatar.Group
                  maxCount={4}
                  maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
                >
                  {[...Array(position.members)].map((_, i) => (
                    <Avatar key={i} icon={<UserOutlined />} />
                  ))}
                </Avatar.Group>
                <Button type="text" icon={<RightOutlined />} onClick={() => showViewDetails(position.title)}>
                  View Details
                </Button>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="pagination-row" justify="space-between" align="middle">
        <Col>
          <Text>
            {(currentPage - 1) * itemsPerPage + 1} -{" "}
            {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
          </Text>
        </Col>
        <Col>
          <Space size="small">
            <Text>The page you're on</Text>
            <Select
              value={currentPage}
              onChange={handlePageChange}
              className="page-select"
            >
              {[...Array(totalPages)].map((_, i) => (
                <Option key={i + 1} value={i + 1}>
                  {i + 1}
                </Option>
              ))}
            </Select>
            <Button
              icon={<LeftOutlined />}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="pagination-button"
            />
            <Button
              icon={<RightOutlined />}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="pagination-button"
            />
          </Space>
        </Col>
      </Row>
      <ViewDetailsOfPosition
        visible={viewDetailsVisible}
        onCancel={handleViewDetailsCancel}
        position={selectedPosition}
      />
    </div>
  );
};

export default Management;
