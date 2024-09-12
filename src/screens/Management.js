import { LeftOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Col,
  Row,
  Select,
  Space,
  Spin,
  Typography
} from "antd";
import React, { useEffect, useState } from "react";
import "../assets/styles/Management.css";
import ViewDetailsOfPosition from "../components/modal/ViewDetailsofPosition";
import { fetchPositionData } from '../services/ProjectApi_position';

const { Text, Title } = Typography;
const { Option } = Select;

const Management = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewDetailsVisible, setViewDetailsVisible] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [positionData, setPositionData] = useState([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 6;

  useEffect(() => {
    const loadPositions = async () => {
      try {
        setLoading(true);
        console.log('Starting to fetch position data');
        const data = await fetchPositionData();
        console.log('Received position data:', data);
        setPositionData(data);
      } catch (error) {
        console.error('Error loading positions:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPositions();
  }, []);


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

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <div className="management-container">
      <Row gutter={[16, 16]} style={{ rowGap: "40px" }}>
        {paginatedPositions.map((loading, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card className="position-card">
              <Row justify="space-between" align="middle">
                <Title level={4}>{loading.title}</Title>
                <div>
                  <Text className="people-count">{loading.people} people</Text>
                  <Checkbox className="position-checkbox" />
                </div>
              </Row>
              <div className="position-info">
                <Text>Technology: {loading.technology}</Text>
                <Text>Rank: {loading.rank}</Text>
                <Text>
                  Group Zalo: <a href={loading.groupZalo}>Link</a>
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
                  {[...Array(loading.members)].map((_, i) => (
                    <Avatar key={i} icon={<UserOutlined />} />
                  ))}
                </Avatar.Group>
                <Button type="text" icon={<RightOutlined />} onClick={() => showViewDetails(loading)}>
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
