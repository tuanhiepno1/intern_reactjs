import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './Login.css';

import image1 from '../../assets/image1.png';
import amazingTechLogo from '../../assets/AmazingTech.png';
import googleLogo from '../../assets/google-logo.png';

const Login = () => {
    const [role, setRole] = useState('Admin');
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loginMessage, setLoginMessage] = useState('');
    const [rememberMe, setRememberMe] = useState(false); 
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('https://66c3f496b026f3cc6ced9351.mockapi.io/user');
            const users = response.data;

            const user = users.find(user => 
                user.email === formData.email && 
                user.password === formData.password &&
                user.role === role
            );

            if (user) {
                console.log('Đăng nhập thành công:', user);
                alert('Đăng nhập thành công');
            } else {
                console.error('Đăng nhập thất bại: Invalid credentials or role');
                alert('Đăng nhập thất bại: Invalid credentials or role');
            }
        } catch (error) {
            console.error('Đăng nhập thất bại:', error);
            alert('Đăng nhập thất bại');
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
                <div className="language-selector">
                    <select>
                        <option value="en">EN</option>
                        <option value="vi">VN</option>
                    </select>
                </div>

                <div className="login-logo">
                    <img src={amazingTechLogo} alt="AmazingTech Logo" />
                </div>

                <div className="login-form">
                    <div className="navbar">
                        {['Admin', 'Human Resources', 'Mentor', 'School', 'Intern'].map((roleName) => (
                            <button
                                key={roleName}
                                className={`nav-button ${role === roleName ? 'active' : ''}`}
                                onClick={() => handleRoleChange(roleName)}
                            >
                                {roleName}
                            </button>
                        ))}
                    </div>
                    <h2 className="login-heading">{loginMessage || 'Login Admin'}</h2>
                    <form onSubmit={handleSubmit}>
                        <p className="form-instruction">Please fill your detail to access your account.</p>
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
                        <div className="button-group">
                            <div className="options-container">
                                <label className="remember-me">
                                    <input 
                                        type="checkbox" 
                                        checked={rememberMe} 
                                        onChange={handleRememberMeChange}
                                    />
                                    Remember Me
                                </label>
                                <a href="#forgot-password" className="forgot-password-link" onClick={handleForgotPassword}>
                                    Forgot Password?
                                </a>
                            </div>
                            <button type="submit">Login</button>
                            <button type="button" className="signup-button" onClick={handleSignUp}>Sign up</button>
                        </div>
                    </form>

                    <p className="or-login-with">OR LOGIN WITH</p>

                    <button className="google-login" onClick={handleGoogleLogin}>
                        <img src={googleLogo} alt="Google Logo" />
                        Google
                    </button>
                </div>

                <div className="login-image">
                    <img src={image1} alt="Description of the image" />
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
