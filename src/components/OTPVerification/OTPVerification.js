import React, { useState, useRef, useEffect } from "react";
import { Button, Input, Form, Dropdown, Menu, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import "./OTPVerification.css";

const OTPVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [language, setLanguage] = useState("en");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleResendOTP = () => {
    // Logic to resend OTP
    setTimer(60);
    setCanResend(false);
    message.success("OTP resent successfully!");
  };

  const onFinish = () => {
    const enteredOTP = otp.join("");
    if (enteredOTP === "1234") {
      message.success("OTP verified successfully!");
      navigate("/reset-password-page", { state: { email } });
    } else {
      message.error("Invalid OTP. Please try again.");
    }
  };

  const handleLanguageChange = ({ key }) => {
    setLanguage(key);
  };

  const languageMenu = (
    <Menu onClick={handleLanguageChange}>
      <Menu.Item key="en">
        <img
          src="/assets/login/flag-en.png"
          alt="English"
          style={{ marginRight: 8, width: 30, height: 20 }}
        />
        English
      </Menu.Item>
      <Menu.Item key="vi">
        <img
          src="/assets/login/flag-vi.png"
          alt="Tiếng Việt"
          style={{ marginRight: 8, width: 30, height: 20 }}
        />
        Tiếng Việt
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="login-page">
      <header className="login-header">
        <div className="logo">
          <img src="/assets/login/AmazingTech.png" alt="Amazing Tech Logo" />
        </div>
        <div className="language-selector">
          <Dropdown overlay={languageMenu} trigger={["click"]}>
            <Button>
              <img
                src={`/assets/login/flag-${language}.png`}
                alt={language === "en" ? "English" : "Tiếng Việt"}
                style={{ marginRight: 8, width: 30, height: 20 }}
              />
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </header>

      <div className="login-content">
        <div className="otp-verification-container">
          <div className="otp-verification-form">
            <h1 className="otp-verification-title">OTP Verification</h1>
            <p className="otp-verification-instruction">
              Enter the 4 digit verification code received on your Email ID: {email}
            </p>
            <Form
              className="otp-verification-form-content"
              onFinish={onFinish}
              layout="vertical"
            >
              <div className="otp-input-container">
                <div className="otp-input-container-content">
                  <label>Verification code :</label>
                  <span className="otp-timer">{`${Math.floor(timer / 60)}:${
                    timer % 60 < 10 ? "0" : ""
                  }${timer % 60}`}</span>
                </div>
                <Button
                  type="link"
                  className="resend-otp-button"
                  onClick={handleResendOTP}
                  disabled={!canResend}
                >
                  Resend OTP
                </Button>
              </div>
              <div className="otp-inputs">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    ref={inputRefs[index]}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    maxLength={1}
                    className="otp-input"
                  />
                ))}
              </div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="verify-button"
                >
                  Verify
                </Button>
              </Form.Item>
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

export default OTPVerification;
