import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import axios from 'axios';
import './SignUp.css';  
import image1 from '../../assets/image1.png';
import amazingTechLogo from '../../assets/AmazingTech.png';

const SignUp = () => {  
    const navigate = useNavigate();  // Khởi tạo useNavigate

    const [role, setRole] = useState('Admin');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
        additionalInfo: {}
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            console.log('Đăng ký thành công:', response.data);
            alert('Đăng ký thành công');
        } catch (error) {
            console.error('Đăng ký thất bại:', error);
            alert('Đăng ký thất bại');
        }
    };

    return (
        <div className="sign-up-container">
            <div className="language-selector">
                <select>
                    <option value="en">EN</option>
                    <option value="vi">VN</option>
                </select>
            </div>

            <div className="sign-up-logo">
                <img src={amazingTechLogo} alt="AmazingTech Logo" />
            </div>

            <div className="sign-up-form">
            
                <div className="navbar">
                    {['Admin', 'Human Resources', 'Mentor', 'School', 'Intern'].map((roleName) => (
                        <button
                            key={roleName}
                            className={`nav-button ${role === roleName ? 'active' : ''}`}
                            onClick={() => setRole(roleName)}
                        >
                            {roleName}
                        </button>
                    ))}
                </div>
                <h2 class="login-heading">Sign Up</h2>

                <p>Please fill in your details to create your account.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    
                        <label htmlFor="full-name">Full Name</label>
                        <input 
                            id="full-name" 
                            type="text" 
                            placeholder="Enter your full name" 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    {role === 'Intern' && (
                        <>
                            <div className="form-group">
                                <label htmlFor="student-id">Student's ID</label>
                                <input 
                                    id="student-id" 
                                    type="text" 
                                    placeholder="Enter your Student's ID" 
                                    name="studentId"
                                    value={formData.studentId || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="school">School</label>
                                <input 
                                    id="school" 
                                    type="text" 
                                    placeholder="Enter your school name" 
                                    name="school"
                                    value={formData.school || ''}
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    )}
                    {role === 'School' && (
                        <div className="form-group">
                            <label htmlFor="school-name">School Name</label>
                            <input 
                                id="school-name" 
                                type="text" 
                                placeholder="Enter your school name" 
                                name="schoolName"
                                value={formData.schoolName || ''}
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="youremail@example.com" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password" 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <a href="#" onClick={() => navigate('/login')}>Sign in</a></p>  {/* Thêm sự kiện click để chuyển hướng */}
            </div>

            <div className="sign-up-image">
                <img src={image1} alt="Description of the image" />
            </div>
        </div>
    );
};

export default SignUp;
