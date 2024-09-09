import React, { useState } from 'react';
import { Modal, Select, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Option } = Select;
const { TextArea } = Input;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 8px;
    overflow: hidden;
  }
  .ant-modal-header {
    background-color: #f0f0f0;
    border-bottom: none;
    padding: 16px 24px;
  }
  .ant-modal-body {
    padding: 24px;
  }
  .ant-modal-footer {
    border-top: none;
    padding: 0 24px 24px;
  }
`;

const EmailForm = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledSelect = styled(Select)`
  width: 50%;
`;

const StyledTextArea = styled(TextArea)`
  width: 50%;
`;

const SendButton = styled(Button)`
  background-color: #7e3af2;
  border-color: #7e3af2;
  &:hover, &:focus {
    background-color: #6929c4;
    border-color: #6929c4;
  }
`;

const SendEmailModal = ({ visible, onCancel, onSend }) => {
    const [emailType, setEmailType] = useState('');
    const [emailContent, setEmailContent] = useState('');

    const handleSend = () => {
        onSend({ type: emailType, content: emailContent });
        setEmailType('');
        setEmailContent('');
    };

    return (
        <StyledModal
            title="Send Email"
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={800}
        >
            <EmailForm>
                <StyledSelect
                    placeholder="Choose types of email"
                    onChange={setEmailType}
                    value={emailType}
                >
                    <Option value="email_interview">Email interview</Option>
                    <Option value="email_result">Email result</Option>
                    <Option value="internship_information">Internship information</Option>
                    <Option value="additional_profile">Additional Profile</Option>
                    <Option value="return_profile">Return Profile</Option>
                </StyledSelect>
                <StyledTextArea
                    placeholder="Enter your mail"
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    rows={4}
                />
            </EmailForm>
            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <SendButton type="primary" icon={<MailOutlined />} onClick={handleSend}>
                    Send Email
                </SendButton>
            </div>
        </StyledModal>
    );
};

export default SendEmailModal;