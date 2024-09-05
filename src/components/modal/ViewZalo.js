import React from 'react';
import { Layout, Input, Button, Avatar, Typography, Space, Tooltip } from 'antd';
import { SendOutlined, PictureOutlined, PaperClipOutlined, SmileOutlined, ClockCircleOutlined, ExclamationCircleOutlined, EllipsisOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/ViewZalo.css';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const Message = ({ sender, content, isRight, reactions }) => (
  <div className={`message ${isRight ? 'message-right' : ''}`}>
    {!isRight && <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
    <div className="message-content" style={{ alignItems: isRight ? 'flex-end' : 'flex-start' }}>
      {!isRight && <Text strong>{sender}</Text>}
      {content.map((text, index) => (
        <div key={index} className="message-bubble">{text}</div>
      ))}
      {reactions && (
        <Space className="reactions">
          {reactions.map((reaction, index) => (
            <Button key={index} size="small" shape="round">{reaction}</Button>
          ))}
        </Space>
      )}
    </div>
  </div>
);

const ViewZalo = () => {
  const navigate = useNavigate();

  return (
    <Layout className="chat-container" style={{ borderRadius: '34px' }}>
      <Header className="chat-header" style={{ borderTopLeftRadius: '34px', borderTopRightRadius: '34px' }}>
        <div></div>
        <div className="chat-header-left"> 
          <div className="chat-header-info">
            <Text strong>Designer_FU_SP24</Text>
            <Text type="secondary">50 Members</Text>
          </div>
        </div>
        <div className="chat-header-right">
          <Tooltip title="View in Zalo">
            <Button type="link" icon={<SearchOutlined />} onClick={() => navigate('/group-zalo-management')}>View in Zalo</Button>
          </Tooltip>
        </div>
      </Header>
      <Content className="chat-messages">
        <Message 
          
          content={["Are You OK Now?", "Have You Finished This Term Yet?"]}
          avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          isLeft
        />
        <Message 
          sender="You"
          content={["Hello Everyone", "I've Finished The Project, But The Difficulty Is..."]}
          avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          isRight
        />
        <Message 
          
          content={["Have You Finished This Term Yet?"]}
          reactions={['❤️', '👍', '😍', '😮']}
          avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          isLeft
        />
      </Content>
      <Footer className="chat-input" style={{ borderBottomLeftRadius: '34px', borderBottomRightRadius: '34px' }}>
        <Input 
          placeholder="Chat to Designer_FU_SP24..." 
          prefix={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="small" />}
          suffix={
            <Space>
              <PictureOutlined />
              <PaperClipOutlined />
              <SmileOutlined />
              <ClockCircleOutlined />
              <ExclamationCircleOutlined />
              <EllipsisOutlined />
            </Space>
          }
        />
        <Button type="primary" shape="circle" icon={<SendOutlined />} />
      </Footer>
    </Layout>
  );
};

export default ViewZalo;
