import React, { useState } from "react";
import { Button, Input, Form, Dropdown, Menu, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./ResetPassword.css";

const ResetPassword = () => {
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();

  const handleLanguageChange = ({ key }) => {
    setLanguage(key);
  };

  const onFinish = async (values) => {
    try {
      const response = await axios.get('https://66c3f496b026f3cc6ced9351.mockapi.io/user');
      const users = response.data;
      const userExists = users.some(user => user.email === values.email);

      if (userExists) {
        navigate('/otp-verification', { state: { email: values.email } });
      } else {
        message.error('Email not found. Please check your email address.');
      }
    } catch (error) {
      console.error('Error checking email:', error);
      message.error('An error occurred. Please try again later.');
    }
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

      <div className="reset-password-container">
        <div className="reset-password-form">
          <h1 className="reset-password-title">Reset Your Password</h1>
          <p className="reset-password-instruction">
            Please provide the email address that you used when you signed up
            for your account.
          </p>
          <Form className="reset-password-form" name="reset_password" onFinish={onFinish} layout="vertical">
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input className="reset-password-input" placeholder="youremail@example.com" />
            </Form.Item>
            <p className="reset-password-note">
              We will send you an email that will allow you to reset your
              password.
            </p>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="reset-password-button"
              >
                Reset password
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="login-banner">
          <img src="/assets/login/image1.png" alt="Login Banner" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
