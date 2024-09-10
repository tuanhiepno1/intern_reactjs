import React, { useState } from 'react';
import { Row, Col, Card, Button, Space, Select, Typography } from 'antd';
import { ExportOutlined, EditOutlined, DeleteOutlined, PlusOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import ShowQuestions from '../components/modal/ShowQuestions';
import '../assets/styles/TechnologyContent.css';

const { Text } = Typography;
const { Option } = Select;

const TechnologyContent = () => {
  const technologies = [
    { name: '.NET', image: '../assets/images/net.png' },
    { name: 'Java', image: '../assets/images/java.png' },
    { name: 'C++', image: '../assets/images/c++.png' },
    // Thêm các công nghệ khác nếu cần
  ];

  const itemsPerPage = 6;
  const totalItems = technologies.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTechnology, setSelectedTechnology] = useState('');

  const showModal = (techName) => {
    setSelectedTechnology(techName);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="technology-content">
      <div className="action-buttons">
        <Button type="primary" icon={<ExportOutlined />} className="export-btn">
          Export Excel
        </Button>
        <Button icon={<EditOutlined />} className="edit-btn">
          Edit
        </Button>
        <Button icon={<DeleteOutlined />} className="delete-btn">
          Delete
        </Button>
        <Button type="primary" icon={<PlusOutlined />} className="add-btn">
          Add New Technology
        </Button>
      </div>
      <Row className='technology-content-row' >
        {technologies.map((tech, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={8}>
            <Card
              cover={<img alt={tech.name} src={tech.image} />}
              className="technology-card"
            >
              <Button 
                type="text" 
                className="show-questions-btn"
                onClick={() => showModal(tech.name)}
              >
                Show Questions
              </Button>
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
      <ShowQuestions
        visible={isModalVisible}
        onCancel={handleModalCancel}
        technology={selectedTechnology}
      />
    </div>
  );
};

export default TechnologyContent;