import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';
import amazingTechLogo from '../../assets/AmazingTech.png';
import illustration from '../../assets/image1.png';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await axios.get('https://66c3f496b026f3cc6ced9351.mockapi.io/user');
            const users = response.data;

            const userExists = users.some(user => user.email === email);

            if (userExists) {
                // Lưu email vào localStorage
                localStorage.setItem('resetEmail', email);
                alert(`Sent a password reset request to ${email}`);
                navigate('/otp-verification'); // Điều hướng tới trang thay đổi mật khẩu
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
            <header className="reset-password-header">
                <img src={amazingTechLogo} alt="AmazingTech Logo" className="reset-password-logo" />
                <div className="language-selector">
                    <select>
                        <option value="en">EN</option>
                        <option value="vi">VN</option>
                    </select>
                </div>
            </header>
            <div className="reset-password-container">
                <div className="reset-password-form">
                    <h2>Reset Your Password</h2>
                    <p>Please provide the email address that you used when you signed up for your account.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group-RP">
                            <input
                                id="email"
                                type="email"
                                placeholder="youremail@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <p>We will send you an email that will allow you to reset your password.</p>
                        <button type="submit" className="reset-password-button">Reset password</button>
                    </form>
                </div>
                <div className="reset-password-illustration">
                    <img src={illustration} alt="Illustration" />
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
