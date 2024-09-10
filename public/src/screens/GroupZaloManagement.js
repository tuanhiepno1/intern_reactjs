import React, { useState } from 'react';
import { Select, Avatar } from 'antd';
import { MoreOutlined, DownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/GroupZaloManagement.css';

const { Option } = Select;

const GroupItem = ({ id, title, subtitle, members, onClick }) => {
  const visibleAvatars = members.slice(0, 4);
  const extraAvatars = members.length - 4;

  return (
    <div className="group-item" onClick={() => onClick(id)}>
      <div className="group-content">
        <div className="avatar-group">
          <div className="avatar-row">
            {visibleAvatars.slice(0, 2).map((member, index) => (
              <Avatar key={index} src={member.avatar} />
            ))}
          </div>
          <div className="avatar-row">
            {visibleAvatars.slice(2, 4).map((member, index) => (
              <Avatar key={index} src={member.avatar} />
            ))}
            {extraAvatars > 0 && (
              <Avatar style={{ backgroundColor: '#f56a00' }}>
                +{extraAvatars}
              </Avatar>
            )}
          </div>
        </div>
        <div className="group-info">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <MoreOutlined className="more-icon" />
    </div>
  );
};

const GroupZaloManagement = () => {
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const groups = [
    {
      id: '1',
      title: 'Designer_FU_SP24',
      subtitle: 'Click to view',
      members: [
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
      ]
    },
    { id: '2', title: 'Back_End_FU_SP24', subtitle: 'Click to view', members: [
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
    ] },
    { id: '3', title: 'Front_End_FU_SP24', subtitle: 'Click to view', members: [
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
    ] },
    { id: '4', title: 'Marketing_FU_SP24', subtitle: 'Click to view', members: [
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
        { avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
    ] },
  ];

  const handleGroupClick = (groupId) => {
    navigate(`/view-zalo/${groupId}`);
  };

  return (
    <div className="container">
      <div className="header-container-select">
      <Select
        placeholder="Select Filter"
        onChange={(value) => setFilter(value)}
        value={filter}
        className="filter-select"
        suffixIcon={<DownOutlined />}
      >
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
      </div>
      <div className="groups-container">
        {groups.map((item) => (
          <GroupItem 
            key={item.id} 
            id={item.id}
            title={item.title} 
            subtitle={item.subtitle} 
            members={item.members} 
            onClick={handleGroupClick}
          />
        ))}
      </div>
      <div className="scroll-down">
        <DownOutlined />
      </div>
    </div>
  );
};

export default GroupZaloManagement;