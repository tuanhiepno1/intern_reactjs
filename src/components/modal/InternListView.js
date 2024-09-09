import React, { useState } from 'react';
import { Modal, Tabs, Row, Col, Input, Typography, Select, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import '../../assets/styles/InternListView.css';

const { TabPane } = Tabs;
const { Text, Link } = Typography;
const { Option } = Select;

const InternListView = ({ visible, onClose, internData }) => {
  const [rank, setRank] = useState('Intern');
  const [comment, setComment] = useState('');
  const [finalResult, setFinalResult] = useState('Passed');

  const handleSaveComments = () => {
    // Implement save comments logic here
    console.log('Saving comments:', { rank, comment, finalResult });
  };

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      closeIcon={<CloseOutlined />}
      className="intern-list-view-modal"
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="View details of Intern" key="1">
          {internData ? (
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Text strong>Intern ID</Text>
                <Input value={internData.internId} readOnly />
              </Col>
              <Col span={8}>
                <Text strong>Full Name</Text>
                <Input value={internData.fullName} readOnly />
              </Col>
              <Col span={8}>
                <Text strong>Date Of Birth</Text>
                <Input value={internData.dateOfBirth} readOnly />
              </Col>
              <Col span={8}>
                <Text strong>Phone Number</Text>
                <Input value={internData.phoneNumber} readOnly />
              </Col>
              <Col span={8}>
                <Text strong>Position</Text>
                <Input value={internData.position} readOnly />
              </Col>
              <Col span={8}>
                <Text strong>School</Text>
                <Input value={internData.school} readOnly />
              </Col>
              <Col span={8}>
                <Text strong>Address</Text>
                <Input value={internData.address} readOnly />
              </Col>
              <Col span={8}>
                <Text strong>Email</Text>
                <Input value={internData.email} readOnly />
              </Col>
              <Col span={8}>
                <Text strong>Link CV</Text>
                <Input 
                  value="Link" 
                  readOnly 
                  addonAfter={<Link href={internData.cv} target="_blank">Open</Link>}
                />
              </Col>
              <Col span={8}>
                <Text strong>Rank</Text>
                <Input value={internData.rank || 'N/A'} readOnly />
              </Col>
            </Row>
          ) : (
            <div>No intern data available</div>
          )}
        </TabPane>
        <TabPane tab="Comments of CV" key="2">
          {internData && (
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Text strong>Major</Text>
                <Input value={internData.major || 'Software engineer'} readOnly />
              </Col>
              <Col span={8}>
                <Text strong>Programming language</Text>
                <Input value={internData.programmingLanguage || 'ReactJS'} readOnly />
              </Col>
              <Col span={8}>
                <Text strong>Project on GitHub</Text>
                <Input value={internData.githubProject || 'Cannot open link GitHub'} readOnly />
              </Col>
              <Col span={8}>
                <Text strong>Position</Text>
                <Input value={internData.position || 'Back-End'} readOnly />
              </Col>
              <Col span={8}>
                <Text strong>Rank</Text>
                <Select
                  style={{ width: '100%' }}
                  value={rank}
                  onChange={(value) => setRank(value)}
                >
                  <Option value="Intern">Intern</Option>
                  <Option value="Junior">Junior</Option>
                  <Option value="Senior">Senior</Option>
                </Select>
              </Col>
              <Col span={8}>
                <Text strong>Add Comment</Text>
                <Input.TextArea
                  placeholder="Click to add more comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                />
              </Col>
              <Col span={24} style={{ textAlign: 'right' }}>
                <Button type="primary" onClick={handleSaveComments}>
                  Save Comments
                </Button>
              </Col>
            </Row>
          )}
        </TabPane>
        <TabPane tab="Result of Interview" key="3">
          <div className="interview-result-content">
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Text strong>Programming language</Text>
                <Input value={internData?.programmingLanguage || ''} readOnly />
              </Col>
              <Col span={8}>
                <Text strong>Major</Text>
                <Input value={internData?.major || ''} readOnly />
              </Col>
              <Col span={8}>
                <Text strong>Which year you are in?</Text>
                <Select style={{ width: '100%' }} defaultValue="Sophomore">
                  <Option value="Freshman">Freshman</Option>
                  <Option value="Sophomore">Sophomore</Option>
                  <Option value="Junior">Junior</Option>
                  <Option value="Senior">Senior</Option>
                </Select>
              </Col>
              <Col span={8}>
                <Text strong>Why choose this major?</Text>
                <Input.TextArea rows={2} />
              </Col>
              <Col span={8}>
                <Text strong>Why choose to intern at Amazing Tech?</Text>
                <Input.TextArea rows={2} />
              </Col>
              <Col span={8}>
                <Text strong>How do you know about Amazing Tech?</Text>
                <Input.TextArea rows={2} />
              </Col>
              <Col span={8}>
                <Text strong>Do you know the office address?</Text>
                <Select style={{ width: '100%' }} defaultValue="Yes">
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
              </Col>
              <Col span={8}>
                <Text strong>Do you know about UNPAID internships?</Text>
                <Select style={{ width: '100%' }} defaultValue="Yes">
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
              </Col>
              <Col span={8}>
                <Text strong>What are your desires when interning at Amazing Tech?</Text>
                <Input.TextArea rows={2} />
              </Col>
              <Col span={8}>
                <Text strong>Work online or offline?</Text>
                <Select style={{ width: '100%' }} defaultValue="Online">
                  <Option value="Online">Online</Option>
                  <Option value="Offline">Offline</Option>
                </Select>
              </Col>
              <Col span={8}>
                <Text strong>Are you busy with anything else?</Text>
                <Input.TextArea rows={2} />
              </Col>
              <Col span={8}>
                <Text strong>Communication skill</Text>
                <Input.TextArea rows={2} />
              </Col>
            </Row>
            <Text strong style={{ display: 'block', marginTop: '20px', color: '#d46b08' }}>Question of Technology</Text>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Text strong>Question 1</Text>
                <Input.TextArea rows={2} placeholder="Enter intern's answer" />
              </Col>
              <Col span={8}>
                <Text strong>Question 2</Text>
                <Input.TextArea rows={2} placeholder="Enter intern's answer" />
              </Col>
              <Col span={8}>
                <Text strong>Question 3</Text>
                <Input.TextArea rows={2} placeholder="Enter intern's answer" />
              </Col>
            </Row>
            <Text strong style={{ display: 'block', marginTop: '20px', color: '#d46b08' }}>Assign Project</Text>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Text strong>Project's Name</Text>
                <Input placeholder="Enter project's name" />
              </Col>
              <Col span={8}>
                <Text strong>Position</Text>
                <Select style={{ width: '100%' }} defaultValue="">
                  <Option value="">Select position</Option>
                  {/* Add more options as needed */}
                </Select>
              </Col>
              <Col span={8}>
                <Text strong>Group Zalo</Text>
                <Select style={{ width: '100%' }} defaultValue="">
                  <Option value="">Select group</Option>
                  {/* Add more options as needed */}
                </Select>
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
              <Col span={24}>
                <Text strong style={{ marginRight: '10px' }}>Final result:</Text>
                <Select
                  value={finalResult}
                  onChange={setFinalResult}
                  style={{ width: '120px' }}
                >
                  <Option value="Passed">Passed</Option>
                  <Option value="Failed">Failed</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </TabPane>
      </Tabs>
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <Button type="primary" onClick={handleSaveComments}>
          Save Comments
        </Button>
      </div>
    </Modal>
  );
};

export default InternListView;
