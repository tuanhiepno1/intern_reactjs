import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import './ResetPasswordPage.css';
import amazingTechLogo from '../../assets/AmazingTech.png';
import illustration from '../../assets/image1.png';

const { Option } = Select;

const ResetPasswordPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Lấy email từ localStorage
        const savedEmail = localStorage.getItem('resetEmail');
        if (savedEmail) {
            setEmail(savedEmail);
        } else {
            setErrorMessage('No email found for resetting password.');
        }
    }, []);

    const handleSubmit = async () => {
        setErrorMessage('');

        if (newPassword !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        try {
            // Tìm người dùng dựa trên email đã lưu
            const response = await axios.get('https://66c3f496b026f3cc6ced9351.mockapi.io/user');
            const users = response.data;
            const user = users.find(u => u.email === email);

            if (user) {
                // Gửi yêu cầu PUT để cập nhật mật khẩu
                await axios.put(`https://66c3f496b026f3cc6ced9351.mockapi.io/user/${user.id}`, {
                    ...user,
                    password: newPassword
                });

                message.success('Password changed successfully!');
                navigate('/login'); // Điều hướng về trang đăng nhập sau khi thành công
            } else {
                setErrorMessage('User not found!');
            }
        } catch (error) {
            console.error('Error resetting password:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="reset-password-page">
            <header className="reset-password-header-page">
                <img src={amazingTechLogo} alt="AmazingTech Logo" className="reset-password-page-logo" />
                
            </header>
            <div className="reset-password-container">
                <div className="reset-password-form">
                    <h2>Change Password</h2>
                    <Form onFinish={handleSubmit}>
                        <Form.Item className="reset-password-new-password"
                            label="New Password *"
                            rules={[{ required: true, message: 'Please input your new password!' }]}
                        >
                        </Form.Item>
                        <Input.Password 
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        <Form.Item className="reset-password-confirm-new-password"
                            label="Confirm New Password *"
                            rules={[{ required: true, message: 'Please confirm your password!' }]}
                        >
                        </Form.Item>
                        <Input.Password 
                                placeholder="Re-enter your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <Button type="primary" htmlType="submit" className="reset-password-button">
                            Change Password
                        </Button>
                    </Form>
                </div>
                <div className="reset-password-illustration">
                    <img src={illustration} alt="Illustration" />
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
