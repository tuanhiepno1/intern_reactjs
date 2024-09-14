import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Form, Select, Alert, Row, Col, Typography } from 'antd';
import './ResetPassword.css';
import amazingTechLogo from '../../assets/AmazingTech.png';
import illustration from '../../assets/image1.png';

const { Option } = Select;
const { Title, Paragraph, Text } = Typography;

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setErrorMessage('');

        try {
            const response = await axios.get('https://66c3f496b026f3cc6ced9351.mockapi.io/user');
            const users = response.data;

            const userExists = users.some(user => user.email === email);

            if (userExists) {
                localStorage.setItem('resetEmail', email);
                alert(`Sent a password reset request to ${email}`);
                navigate('/otp-verification');
            } else {
                setErrorMessage('Email does not exist!!');
            }
        } catch (error) {
            console.error('An error occurred when checking the email:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="reset-password-page">
            
            <Row justify="center" className="reset-password-header">
                <Col span={24} style={{ textAlign: 'center' }}>
                
                </Col>
                <img src={amazingTechLogo} alt="AmazingTech Logo" className="reset-password-logo" />
            </Row>
            <Row justify="center" className="reset-password-container">
            
                <Col xs={24} sm={20} md={12} lg={10}>
                    <div className="reset-password-form">
                        <Title level={2}>Reset Your Password</Title>
                        <Paragraph>Please provide the email address that you used when you signed up for your account.</Paragraph>
                        <Form onFinish={handleSubmit} layout="vertical">
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input
                                    placeholder="youremail@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                />
                            </Form.Item>
                            {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
                            <Text>We will send you an email that will allow you to reset your password.</Text>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block className="reset-password-button">
                                    Reset password
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
                <Col xs={24} sm={20} md={12} lg={10}>
                    <div className="reset-password-illustration">
                        <img src={illustration} alt="Illustration" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ResetPassword;
