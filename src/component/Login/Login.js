import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Button, Input, Form, Checkbox, message } from 'antd';
import 'antd/dist/antd.css';
import './Login.css';
import image1 from '../../assets/image1.png';
import amazingTechLogo from '../../assets/AmazingTech.png';
import googleLogo from '../../assets/google-logo.png';
import LanguageSelector from './LanguageSelector';

const Login = () => {
    const [role, setRole] = useState('Admin');
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loginMessage, setLoginMessage] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [language, setLanguage] = useState('en'); 
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = async (values) => {
        try {
            const response = await axios.get('https://66c3f496b026f3cc6ced9351.mockapi.io/user');
            const users = response.data;

            const user = users.find(user => 
                user.email === values.email && 
                user.password === values.password &&
                user.role === role
            );

            if (user) {
                console.log('Login Successfully:', user);
                message.success('Login Successfully');
            } else {
                console.error('Login failure: Invalid credentials or role');
                message.error('Login failure: Invalid credentials or role');
            }
        } catch (error) {
            console.error('Login failure:', error);
            message.error('Login failure');
        }
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    const handleForgotPassword = () => {
        navigate('/reset-password');
    };

    const handleRoleChange = (roleName) => {
        setRole(roleName);
        setLoginMessage(`Login ${roleName}`);
    };

    const handleGoogleLogin = () => {
        window.open('https://accounts.google.com/o/oauth2/auth', '_blank');
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <div className="login-container">
                <LanguageSelector language={language} setLanguage={setLanguage} />
                <div className="login-logo">
                    <img src={amazingTechLogo} alt="AmazingTech Logo" />
                </div>

                <div className="login-form">
                    <div className="login-navbar">
                        {['Admin', 'Human Resources', 'Mentor', 'School', 'Intern'].map((roleName) => (
                            <Button
                                key={roleName}
                                className={`login-nav-button ${role === roleName ? 'active' : ''}`}
                                onClick={() => handleRoleChange(roleName)}
                            >
                                {roleName}
                            </Button>
                        ))}
                    </div>

                    <h2 className="login-heading">{loginMessage || 'Login Admin'}</h2>
                    <Form onFinish={handleSubmit} layout="vertical">
                        <p className="login-form-instruction">Please fill your detail to access your account.</p>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input className="login-ant-input"
                                type="email"
                                placeholder="youremail@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <div className="login-button-group">
                            <div className="login-options-container">
                                <Checkbox checked={rememberMe} onChange={handleRememberMeChange}>
                                    Remember Me
                                </Checkbox>
                                <a href="#forgot-password" className="login-forgot-password-link" onClick={handleForgotPassword}>
                                    Forgot Password?
                                </a>
                            </div>
                            <Button className="login-button" type="primary" htmlType="submit">Login</Button>
                            <Button
                                className="login-signup-button"
                                type="primary" // Thay đổi kiểu của nút
                                shape="default"  // Thay đổi hình dáng của nút
                                size="middle"   // Thay đổi kích thước của nút
                                onClick={handleSignUp}
                                >
                                Sign up
                                </Button>
                        </div>
                    </Form>

                    <p className="login.or-login-with">OR LOGIN WITH</p>

                    <Button className="google-login" onClick={handleGoogleLogin}>
                        <img src={googleLogo} alt="Google Logo" />
                        Google
                    </Button>
                </div>

                <div className="login-image">
                    <img src={image1} alt="Description of the image" />
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
