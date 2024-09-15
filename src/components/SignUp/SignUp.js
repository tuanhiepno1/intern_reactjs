import React, { useState } from 'react';
import { Button, Input, Form, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
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

    const renderFormItems = () => {
        if (role === 'Intern') {
            return (
                <>
                    <Form.Item 
                        label="Full Name" 
                        name="fullName" 
                        rules={[{ required: true, message: 'Please input your full name!' }]}
                    >
                        <Input className="input-name" placeholder="Enter your full name" />
                    </Form.Item>
                    <Form.Item 
                        label="Student's ID" 
                        name="studentId" 
                        rules={[{ required: true, message: "Please input your student's ID!" }]}
                    >
                        <Input className="input-student-id" placeholder="Enter your student's ID" />
                    </Form.Item>
                    <Form.Item 
                        label="School" 
                        name="school" 
                        rules={[{ required: true, message: 'Please input your school!' }]}
                    >
                        <Input className="input-school" placeholder="Enter your school" />
                    </Form.Item>
                </>
            );
        } else {
            return (
                <Form.Item 
                    label={role === 'School' ? 'School Name' : 'Full Name'} 
                    name={role === 'School' ? 'schoolName' : 'fullName'} 
                    rules={[{ required: true, message: `Please input your ${role === 'School' ? 'school name' : 'full name'}!` }]}
                >
                    <Input 
                        className="input-name" 
                        placeholder={`Enter your ${role === 'School' ? 'school name' : 'full name'}`} 
                    />
                </Form.Item>
            );
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
                        <h2>Sign Up</h2>
                        <p>Please fill your details to create an account.</p>
                        <Form className="form-signup" layout="vertical">
                            {renderFormItems()}
                            <Form.Item 
                                label="Email" 
                                name="email" 
                                rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
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
                            <Form.Item 
                                label="Re-type Password" 
                                name="confirmPassword"
                                dependencies={['password']}
                                rules={[
                                    { required: true, message: 'Please confirm your password!' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password className="input-password" placeholder="Re-enter your password" />
                            </Form.Item>
                            <Button className="sign-up-button-signup" type="primary" htmlType="submit" block>Sign up</Button>
                            <div className="login-link">
                                Already have an account? <Link to="/login">Sign in</Link>
                            </div>
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

export default SignUp;