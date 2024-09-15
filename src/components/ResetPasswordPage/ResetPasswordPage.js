import React, { useState } from "react";
import { Button, Input, Form, Dropdown, Menu, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import "./ResetPasswordPage.css";

const ResetPasswordPage = () => {
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    if (values.newPassword === values.confirmPassword) {
      // Xử lý logic thay đổi mật khẩu ở đây
      // Trong trường hợp thực tế, bạn sẽ gọi API để cập nhật mật khẩu

      message.success("Password changed successfully!");
      navigate("/login"); // Chuyển hướng về trang đăng nhập
    } else {
      message.error("The two passwords do not match!");
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

      <div className="reset-password-container">
        <div className="reset-password-form">
          <h1 className="reset-password-title">Change Password</h1>
          <p>Changing password for email: {email}</p>

          <Form className="reset-password-form" name="change_password" onFinish={onFinish} layout="vertical">
            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your new password!",
                },
              ]}
            >
              <Input.Password className="reset-password-input" placeholder="Enter new password" />
            </Form.Item>
            <Form.Item
              label="Confirm New Password"
              name="confirmPassword"
              dependencies={['newPassword']}
              rules={[
                {
                  required: true,
                  message: "Please confirm your new password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password className="reset-password-input" placeholder="Confirm new password" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="reset-password-button"
              >
                Change Password
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

export default ResetPasswordPage;
