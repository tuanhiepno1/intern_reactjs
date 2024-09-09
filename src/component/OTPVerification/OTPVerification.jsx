// src/component/OTPVerification/OTPVerification.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OTPVerification.css';
import amazingTechLogo from '../../assets/AmazingTech.png';
import illustration from '../../assets/image1.png';

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

        if (otp === '123456') {
            alert('OTP xác thực thành công!');
            // navigate('/next-page');
        } else {
            setErrorMessage('Mã OTP không đúng.');
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
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
                            <input
                                id="otp1"
                                type="text"
                                maxLength="1"
                                placeholder=""
                                value={otp[0] || ''}
                                onChange={(e) => setOtp(e.target.value.padEnd(4, ''))}
                                required
                            />
                            <input
                                id="otp2"
                                type="text"
                                maxLength="1"
                                placeholder=""
                                value={otp[1] || ''}
                                onChange={(e) => setOtp(otp.slice(0, 1) + e.target.value.padEnd(3, ''))}
                                required
                            />
                            <input
                                id="otp3"
                                type="text"
                                maxLength="1"
                                placeholder=""
                                value={otp[2] || ''}
                                onChange={(e) => setOtp(otp.slice(0, 2) + e.target.value.padEnd(2, ''))}
                                required
                            />
                            <input
                                id="otp4"
                                type="text"
                                maxLength="1"
                                placeholder=""
                                value={otp[3] || ''}
                                onChange={(e) => setOtp(otp.slice(0, 3) + e.target.value)}
                                required
                            />
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
                <div className="otp-verification-illustration">
                    <img src={illustration} alt="Illustration" />
                </div>
            </div>
        </div>
    );
};

export default OTPVerification;
