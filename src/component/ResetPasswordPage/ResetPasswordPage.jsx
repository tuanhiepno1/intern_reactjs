import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ResetPasswordPage.css';
import amazingTechLogo from '../../assets/AmazingTech.png';
import illustration from '../../assets/image1.png';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
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

                alert('Password changed successfully!');
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
            <header className="reset-password-header">
                <img src={amazingTechLogo} alt="AmazingTech Logo" className="reset-password-page-logo" />
                <div className="language-selector">
                    <select>
                        <option value="en">EN</option>
                        <option value="vi">VN</option>
                    </select>
                </div>
            </header>
            <div className="reset-password-container">
                <div className="reset-password-form">
                    <h2>Change Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group-RP">
                            <label htmlFor="new-password">New Password *</label>
                            <input
                                id="new-password"
                                type="password"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group-RP">
                            <label htmlFor="confirm-password">Confirm New Password *</label>
                            <input
                                id="confirm-password"
                                type="password"
                                placeholder="Re-enter your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button type="submit" className="reset-password-button">Change Password</button>
                    </form>
                </div>
                <div className="reset-password-illustration">
                    <img src={illustration} alt="Illustration" />
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
