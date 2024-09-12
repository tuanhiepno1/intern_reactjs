import React, { useState } from 'react';
import { Layout, Row, Col, Card, Select, Typography ,Space } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../assets/styles/Dashboard.css';

const { Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('All Months');
  const [selectedYear, setSelectedYear] = useState('2023');

  const summaryData = [
    { title: 'Total students received CV', value: 200 },
    { title: 'Total students interviewed', value: 150 },
    { title: 'Total students passed', value: 100 },
    { title: 'Total students interning', value: 180 },
    { title: 'Total students interned', value: 110 },
  ];

  const monthlyData = {
    'All Months': [
      { month: 3, students: 80 },
      { month: 6, students: 110 },
      { month: 9, students: 100 },
    ],
    'January': [{ month: 1, students: 70 }],
    'February': [{ month: 2, students: 75 }],
    'March': [{ month: 3, students: 80 }],
    'April': [{ month: 4, students: 85 }],
    'May': [{ month: 5, students: 90 }],
    'June': [{ month: 6, students: 110 }],
    'July': [{ month: 7, students: 105 }],
    'August': [{ month: 8, students: 95 }],
    'September': [{ month: 9, students: 100 }],
    'October': [{ month: 10, students: 115 }],
    'November': [{ month: 11, students: 120 }],
    'December': [{ month: 12, students: 130 }],
  };

  const schoolData = [
    { month: 1, students: 40 },
    { month: 2, students: 55 },
    { month: 3, students: 50 },

  ];

  const handleMonthChange = (value) => {
    setSelectedMonth(value);
  };

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  return (
    <Layout className="dashboard-layout">
      <Content className="dashboard-content">
        <Row className='dashboard-summary' gutter={[16, 16]}>
          {summaryData.map((item, index) => (
            <Col span={4} key={index}>
              <Card className='dashboard-summary-card'>
                <div className="card-content">
                  <Title level={3}>{item.value}</Title>
                  <p>{item.title}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className='dashboard-summary-title-school-select' justify="end" style={{ marginTop: '24px', marginBottom: '24px' }}>
          <Col>
            <Space>
              <Select 
                defaultValue={selectedMonth} 
                style={{ width: 200 }} 
                onChange={handleMonthChange}
              >
                <Option value="All Months">All Months</Option>
                {Object.keys(monthlyData).filter(month => month !== 'All Months').map(month => (
                  <Option key={month} value={month}>{month}</Option>
                ))}
              </Select>
              <Select 
                defaultValue={selectedYear} 
                style={{ width: 120 }} 
                onChange={handleYearChange}
              >
                <Option value="2023">2023</Option>
                <Option value="2022">2022</Option>
                <Option value="2021">2021</Option>
              </Select>
            </Space>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col span={24}>  
            <BarChart width={600} height={300} data={monthlyData[selectedMonth]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="students" fill="#82ca9d" barSize={30} />
            </BarChart>
            <Title className='dashboard-summary-title' level={5}>Number of students interning in {selectedMonth}, {selectedYear}</Title>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col span={12} className='dashboard-summary-school'>    
            <BarChart  width={400} height={300} data={schoolData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="students" fill="#82ca9d" barSize={20} />
            </BarChart>
            <Title className='dashboard-summary-title-school' level={5}>FPT University</Title>
          </Col>
          <Col span={12} className='dashboard-summary-school'>
            <BarChart width={400} height={300} data={schoolData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="students" fill="#82ca9d" barSize={20} />
            </BarChart>
            <Title className='dashboard-summary-title-school' level={5}>FPT University</Title>
          </Col>
        </Row>
        <div className='dashboard-summary-title-school'>
          <Title level={5}>Number of students interning in year {selectedYear} by schools</Title>
        </div>
      </Content>
      
    </Layout>
  );
};

export default Dashboard;