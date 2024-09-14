import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Form, Select, Alert, Row, Col, Typography } from 'antd';
import './OTPVerification.css';
import amazingTechLogo from '../../assets/AmazingTech.png';
import image1 from '../../assets/image1.png';

const { Option } = Select;
const { Title, Text } = Typography;

const OTPVerification = () => {
    const [otp, setOtp] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [timer, setTimer] = useState(60);
    const navigate = useNavigate();

    useEffect(() => {
        if (timer === 0) return;

        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const handleSubmit = () => {
        setErrorMessage('');

        if (otp === '1234') { // Giả sử OTP đúng là '1234', thay đổi nếu cần
            alert('OTP successfully verified!');
            navigate('/reset-password-page'); // Chuyển hướng đến ResetPasswordPage
        } else {
            setErrorMessage('The OTP code is incorrect!!');
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.match(/^[0-9]$/)) {
            setOtp(prev => prev.substring(0, index) + value + prev.substring(index + 1));
        }
    };

    return (
        <div className="otp-verification-page">
            <Row justify="center" className="otp-verification-header">
                <Col span={24} style={{ textAlign: 'center' }}>
                    <img src={amazingTechLogo} alt="AmazingTech Logo" className="otp-verification-logo" />
                </Col>
            </Row>
            <Row justify="center" className="otp-verification-container">
                <Col xs={24} sm={20} md={12} lg={10}>
                    <div className="otp-verification-form">
                        <Title level={2}>OTP Verification</Title>
                        <Text>Enter the 4 digit verification code received on your Email ID.</Text>
                        <Form onFinish={handleSubmit} layout="vertical" className="form-otp-verification">
                            <Form.Item>
                                <Row gutter={10} justify="center">
                                    {[...Array(4)].map((_, index) => (
                                        <Col key={index}>
                                            <Input
                                                maxLength="1"
                                                value={otp[index] || ''}
                                                onChange={(e) => handleChange(e, index)}
                                                style={{ width: '50px', textAlign: 'center' }}
                                                required
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Form.Item>
                            {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
                            <Form.Item>
                                <div className="otp-footer">
                                    <Text className="timer">Verification code expires in: {formatTime(timer)}</Text>
                                    <Button type="link" className="resend-otp-link">Resend OTP</Button>
                                </div>
                                <Button
                                    type="primary" htmlType="submit" block className="otp-verification-button">
                                    Verify OTP
                                    
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
                <Col xs={24} sm={20} md={12} lg={10}>
                    <div className="otp-verification-image">
                        <img src={image1} alt="Description of the image" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default OTPVerification;
