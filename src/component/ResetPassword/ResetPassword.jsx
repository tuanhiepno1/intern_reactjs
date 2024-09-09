// src/components/ResetPassword/ResetPassword.jsx
import React, { useState } from 'react';
import axios from 'axios'; // Thêm axios để gọi API
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ResetPassword.css';
import amazingTechLogo from '../../assets/AmazingTech.png'; // Đảm bảo đường dẫn đúng
import illustration from '../../assets/image1.png'; // Hình minh họa cần thêm vào thư mục assets

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State để quản lý thông báo lỗi
    const navigate = useNavigate(); // Khởi tạo navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Xóa lỗi trước khi kiểm tra lại

        try {
            const response = await axios.get('https://66c3f496b026f3cc6ced9351.mockapi.io/user');
            const users = response.data;

            // Kiểm tra xem email có tồn tại không
            const userExists = users.some(user => user.email === email);

            if (userExists) {
                alert(`Đã gửi yêu cầu đặt lại mật khẩu tới ${email}`);
                // Điều hướng đến trang OTPVerification
                navigate('/otp-verification');
            } else {
                setErrorMessage('Email không tồn tại trong hệ thống.'); // Thông báo nếu email không tồn tại
            }
        } catch (error) {
            console.error('Có lỗi xảy ra khi kiểm tra email:', error);
            setErrorMessage('Có lỗi xảy ra. Vui lòng thử lại sau.');
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
                        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Hiển thị lỗi nếu có */}
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
