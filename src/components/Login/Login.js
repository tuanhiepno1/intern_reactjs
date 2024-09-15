import React, { useState } from 'react';
import { Button, Input, Form, Checkbox, Dropdown, Menu, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('Admin');
    const [language, setLanguage] = useState('en');

    const handleRoleChange = (newRole) => {
        setRole(newRole);
    };

    const handleLanguageChange = ({ key }) => {
        setLanguage(key);
    };

    const languageMenu = (
        <Menu onClick={handleLanguageChange}>
            <Menu.Item key="en">
                <img src="/assets/login/flag-en.png" alt="English" style={{ marginRight: 8, width: 30, height: 20 }} />
                English
            </Menu.Item>
            <Menu.Item key="vi">
                <img src="/assets/login/flag-vi.png" alt="Tiếng Việt" style={{ marginRight: 8, width:30, height: 20 }} />
                Tiếng Việt
            </Menu.Item>
        </Menu>
    );

    const handleSignUp = () => {
        navigate('/signup');
    };

    const onFinish = async (values) => {
        try {
            const response = await axios.get('https://66c3f496b026f3cc6ced9351.mockapi.io/user');
            const users = response.data;
            const user = users.find(u => u.email === values.email && u.password === values.password);

            if (user && user.role === role) {
                message.success('Login successful!');
                navigate('/dashboard');
            } else if (user && user.role !== role) {
                message.error('Incorrect role selected. Please choose the correct role.');
            } else {
                message.error('Invalid email or password.');
            }
        } catch (error) {
            console.error('Login error:', error);
            message.error('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="login-page">
            <header className="login-header">
                <div className="logo">
                    <img src="/assets/login/AmazingTech.png" alt="Amazing Tech Logo" />
                </div>
                <div className="language-selector">
                    <Dropdown overlay={languageMenu} trigger={['click']}>
                        <Button>
                            <img 
                                src={`/assets/login/flag-${language}.png`} 
                                alt={language === 'en' ? 'English' : 'Tiếng Việt'} 
                                style={{ marginRight: 8, width: 30, height: 20 }}
                            />
                             <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
            </header>
            
            <div className="login-content">
                <div className="login-form-container">
                    <div className="role-selector">
                        {['Admin', 'Human Resources', 'Mentor', 'School', 'Intern'].map((roleName) => (
                            <Button
                                key={roleName}
                                className={`role-button ${role === roleName ? 'active' : ''}`}
                                onClick={() => handleRoleChange(roleName)}
                            >
                                {roleName}
                            </Button>
                        ))}
                    </div>
                    
                    <div className="login-form">
                        <h2>{role} Login</h2>
                        <p>Please fill your detail to access your account.</p>
                        <Form className="form-login" layout="vertical" onFinish={onFinish}>
                            <Form.Item 
                                label="Email" 
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input className="input-email" placeholder="youremail@example.com" />
                            </Form.Item>
                            <Form.Item 
                                label="Password" 
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password className="input-password" placeholder="Enter your password" />
                            </Form.Item>
                            <div className="form-options">
                                <Checkbox>Remember Me</Checkbox>
                                <Link to="/reset-password">Forgot Password?</Link>
                            </div>
                            <Button className="sign-in-button" type="primary" htmlType="submit" block>Sign in</Button>
                            <Button className="sign-up-button" block onClick={handleSignUp}>Sign up</Button>
                            <div className="or-divider">OR LOGIN WITH</div>
                            <Button className="google-login" block>
                                <img src="/assets/login/google.png" alt="Google" /> Google
                            </Button>
                        </Form>
                    </div>
                </div>
                
                <div className="login-banner">
                    <img src="/assets/login/image1.png" alt="Login Banner" />
                </div>
            </div>
        </div>
    );
};

export default Login;