import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OTPVerification.css';
import amazingTechLogo from '../../assets/AmazingTech.png';
import image1 from '../../assets/image1.png';

const OTPVerification = () => {
    const [otp, setOtp] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [timer, setTimer] = useState(60);
    const navigate = useNavigate();

    useEffect(() => {
        if (timer === 0) return;

        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (otp === '1234') { // Giả sử OTP đúng là '1234', thay đổi nếu cần
            alert('OTP xác thực thành công!');
            navigate('/reset-password-page'); // Chuyển hướng đến ResetPasswordPage
        } else {
            setErrorMessage('Mã OTP không đúng.');
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.match(/^[0-9]$/)) {
            setOtp(prev => prev.substring(0, index) + value + prev.substring(index + 1));
        }
    };

    return (
        <div className="otp-verification-page">
            <header className="otp-verification-header">
                <img src={amazingTechLogo} alt="AmazingTech Logo" className="otp-verification-logo" />
                <div className="language-selector">
                    <select>
                        <option value="en">EN</option>
                        <option value="vi">VN</option>
                    </select>
                </div>
            </header>
            <div className="otp-verification-container">
                <div className="otp-verification-form">
                    <h2>OTP Verification</h2>
                    <p>Enter the 4 digit verification code received on your Email ID.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group-OTP">
                            {[...Array(4)].map((_, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={otp[index] || ''}
                                    onChange={(e) => handleChange(e, index)}
                                    required
                                />
                            ))}
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <div className="otp-footer">
                            <div className="timer-and-resend">
                                <p className="timer">Verification code expires in: {formatTime(timer)}</p>
                                <a href="#" className="resend-otp-link">Resend OTP</a>
                            </div>
                            <button type="submit" className="otp-verification-button">Verify OTP</button>
                        </div>
                    </form>
                </div>
                <div className="otp-verification-image">
                    <img src={image1} alt="Description of the image" />
                </div>
            </div>
        </div>
    );
};

export default OTPVerification;