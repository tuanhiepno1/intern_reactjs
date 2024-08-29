import React from 'react';
import { Modal, Table, Tag } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '../../assets/styles/ViewDetailsofPosition.css';

const ViewDetailsOfPosition = ({ visible, onCancel, position }) => {
  const columns = [
    { title: 'Intern ID', dataIndex: 'internId', key: 'internId' },
    { title: 'Full Name', dataIndex: 'fullName', key: 'fullName' },
    { title: 'Phone Number', dataIndex: 'phoneNumber', key: 'phoneNumber' },
    { title: 'School', dataIndex: 'school', key: 'school' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { 
      title: 'CV', 
      dataIndex: 'cv', 
      key: 'cv',
      render: (text) => <a href={text}>Link</a>,
    },
    { title: 'Technology', dataIndex: 'technology', key: 'technology' },
    { 
      title: 'Rank', 
      dataIndex: 'rank', 
      key: 'rank',
      render: (rank) => (
        <Tag color={getRankColor(rank)}>
          {rank.toUpperCase()} <DownOutlined />
        </Tag>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      internId: '#12345128',
      fullName: 'Esther Eden',
      phoneNumber: '0376782528',
      school: 'FPT University',
      email: 'esther.eden@gmail.com',
      cv: '#',
      technology: '.NET',
      rank: 'Intern',
    },
    {
      key: '2',
      internId: '#12345129',
      fullName: 'John Smith',
      phoneNumber: '0987654321',
      school: 'RMIT University',
      email: 'john.smith@gmail.com',
      cv: '#',
      technology: 'Java',
      rank: 'Fresher',
    },
    {
      key: '3',
      internId: '#12345130',
      fullName: 'Emma Watson',
      phoneNumber: '0123456789',
      school: 'Ho Chi Minh City University of Technology',
      email: 'emma.watson@gmail.com',
      cv: '#',
      technology: 'Python',
      rank: 'Junior',
    },
    {
      key: '4',
      internId: '#12345131',
      fullName: 'Michael Brown',
      phoneNumber: '0369852147',
      school: 'Hanoi University of Science and Technology',
      email: 'michael.brown@gmail.com',
      cv: '#',
      technology: 'C++',
      rank: 'Middle',
    },
    {
      key: '5',
      internId: '#12345132',
      fullName: 'Sophia Lee',
      phoneNumber: '0258741369',
      school: 'Vietnam National University',
      email: 'sophia.lee@gmail.com',
      cv: '#',
      technology: 'JavaScript',
      rank: 'Senior',
    },
    {
      key: '6',
      internId: '#12345133',
      fullName: 'David Chen',
      phoneNumber: '0147852369',
      school: 'Da Nang University of Technology',
      email: 'david.chen@gmail.com',
      cv: '#',
      technology: 'Ruby',
      rank: 'Intern',
    },
    {
      key: '7',
      internId: '#12345134',
      fullName: 'Olivia Taylor',
      phoneNumber: '0963852741',
      school: 'Can Tho University',
      email: 'olivia.taylor@gmail.com',
      cv: '#',
      technology: 'PHP',
      rank: 'Fresher',
    },
    {
      key: '8',
      internId: '#12345135',
      fullName: 'William Nguyen',
      phoneNumber: '0741852963',
      school: 'Ho Chi Minh City University of Science',
      email: 'william.nguyen@gmail.com',
      cv: '#',
      technology: 'Go',
      rank: 'Junior',
    }
  ];

  return (
    <Modal
      title={`View Details of Position ${position}`}
      visible={visible}
      onCancel={onCancel}
      width={1000}
      footer={null}
    >
      <Table columns={columns} dataSource={data} pagination={false} />
    </Modal>
  );
};

const getRankColor = (rank) => {
  const colors = {
    'Intern': 'purple',
    'Fresher': 'cyan',
    'Junior': 'gold',
    'Middle': 'volcano',
    'Senior': 'green'
  };
  return colors[rank] || 'blue';
};

export default ViewDetailsOfPosition;