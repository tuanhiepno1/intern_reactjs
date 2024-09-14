import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button, Select, message, Menu } from 'antd';
import './SignUp.css';
import image1 from '../../assets/image1.png';
import amazingTechLogo from '../../assets/AmazingTech.png';
import LanguageSelector from '../Login/LanguageSelector';

const { Option } = Select;

const SignUp = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('Admin');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '', // Thêm trường confirmPassword
        fullName: '',
        additionalInfo: {}
    });
    const [language, setLanguage] = useState('en');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRoleChange = (value) => {
        setRole(value);
    };

    const handleSubmit = async () => {
        // Kiểm tra confirm password
        if (formData.password !== formData.confirmPassword) {
            message.error('Passwords do not match');
            return;
        }

        let additionalInfo = {};
        if (role === 'Intern') {
            additionalInfo = {
                studentId: formData.studentId,
                schoolName: formData.school,
                major: formData.major || ""
            };
        } else if (role === 'School') {
            additionalInfo = {
                schoolName: formData.schoolName
            };
        } else if (role === 'Human Resources') {
            additionalInfo = {
                department: formData.department || "",
                yearsOfExperience: formData.yearsOfExperience || 0
            };
        } else if (role === 'Mentor') {
            additionalInfo = {
                expertise: formData.expertise || "",
                menteesCount: formData.menteesCount || 0
            };
        }

        const data = {
            email: formData.email,
            password: formData.password,
            role: role,
            fullName: formData.fullName,
            additionalInfo: additionalInfo
        };

        try {
            const response = await axios.post('https://66c3f496b026f3cc6ced9351.mockapi.io/user', data);
            message.success('Successful registration');
            navigate('/login');
        } catch (error) {
            message.error('Registration failed');
        }
    };

    return (
        <div className="sign-up-container">

            <div className="sign-up-logo">
                <img src={amazingTechLogo} alt="AmazingTech Logo" />
            </div>

            {/* Thanh navbar đặt trên form đăng ký */}
            <div className="sign-up-form">
                <Menu
                    mode="horizontal"
                    className="sign-up-navbar"
                    selectedKeys={[role]}
                    onClick={({ key }) => {
                        setRole(key);
                        window.scrollTo(0, 0);
                    }}
                    items={['Admin', 'Human Resources', 'Mentor', 'School', 'Intern'].map(roleName => ({
                        key: roleName,
                        label: roleName
                    }))}
                />
                <h2 className="sign-up-heading">Sign Up</h2>
                <p>Please fill in your details to create your account.</p>
                <Form onFinish={handleSubmit}>
                    {role !== 'Intern' && role !== 'School' && (
                        <>
                        <Form.Item
                            className="sign-up-form-group"
                            label="Full Name"
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                        >

                        </Form.Item>
                        <Input
                                className="sign-up-ant-input"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </>
                    )}
                    
                    {role === 'Intern' && (
                        <>
                            <Form.Item
                                label="Student's ID"
                                rules={[{ required: true, message: 'Please input your ID!' }]}
                            >

                            </Form.Item>
                            <Input
                                    className="sign-up-ant-id-student"
                                    placeholder="Enter your Student's ID"
                                    name="studentId"
                                    value={formData.studentId || ''}
                                    onChange={handleChange}
                                />
                            <Form.Item
                                label="School"
                                rules={[{ required: true, message: 'Please input your School!' }]}
                            >

                            </Form.Item>
                            <Input
                                    className="sign-up-ant-name-school"
                                    placeholder="Enter your school name"
                                    name="school"
                                    value={formData.school || ''}
                                    onChange={handleChange}
                                />
                        </>
                    )}

                    {role === 'School' && (
                        <>
                        <Form.Item
                            label="School Name"
                        >

                        </Form.Item>
                        <Input
                                className="sign-up-ant-school"
                                placeholder="Enter your school name"
                                name="schoolName"
                                value={formData.schoolName || ''}
                                onChange={handleChange}
                            />
                        </>
                    )}

                    <Form.Item
                        label="Email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >

                    </Form.Item>
                    <Input
                            className="sign-up-ant-email"
                            type="email"
                            placeholder="youremail@example.com"
                            name="email"
                            value={formData.email || ''}
                            onChange={handleChange}
                        />
                    <Form.Item
                        label="Password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >

                    </Form.Item>
                    <Input
                            className="sign-up-ant-password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    <Form.Item
                        label="Re-type Password"
                        rules={[{ required: true, message: 'Please re-type your password!' }]}
                    >
                    </Form.Item>
                    <Input
                            className="sign-up-ant-password"
                            type="password"
                            placeholder="Re-type Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    <Form.Item>
                        <Button className="sign-up-button" type="primary" htmlType="submit">Sign Up</Button>
                    </Form.Item>
                </Form>

                <p>Already have an account? <a href="#" onClick={() => navigate('/login')}>Sign in</a></p>
            </div>

            <div className="sign-up-image">
                <img src={image1} alt="Description of the image" />
            </div>
        </div>
    );
};

export default SignUp;
