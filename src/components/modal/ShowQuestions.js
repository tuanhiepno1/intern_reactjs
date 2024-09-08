import React, { useState } from 'react';
import { Modal, Tabs, Input, Button, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../../assets/styles/ShowQuestions.css';

const { TabPane } = Tabs;

const ShowQuestions = ({ visible, onCancel, technology }) => {
  const [activeTab, setActiveTab] = useState('Intern');
  const [questions, setQuestions] = useState({
    Intern: ['Question 1', 'Question 2', 'Question 3'],
    Fresher: [],
    Junior: [],
    Middle: [],
    Senior: []
  });

  const handleAddQuestion = () => {
    setQuestions(prev => ({
      ...prev,
      [activeTab]: [...prev[activeTab], `Question ${prev[activeTab].length + 1}`]
    }));
  };

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      title={`Questions for ${technology}`}
      footer={null}
      width={800}
    >
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        {Object.keys(questions).map(level => (
          <TabPane tab={level} key={level}>
            <Row gutter={[16, 16]}>
              {questions[level].map((question, index) => (
                <Col span={24} key={index}>
                  <Input placeholder={question} />
                </Col>
              ))}
            </Row>
            <Button 
              icon={<PlusOutlined />} 
              onClick={handleAddQuestion}
              style={{ marginTop: '16px' }}
            >
              Add Question
            </Button>
          </TabPane>
        ))}
      </Tabs>
    </Modal>
  );
};

export default ShowQuestions;