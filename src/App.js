// src/App.js
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './component/SignUp/SignUp';
import Login from './component/Login/Login';
import Home from './component/Home';
import ResetPassword from './component/ResetPassword/ResetPassword';
import OTPVerification from './component/OTPVerification/OTPVerification'; // Import đúng
import ResetPasswordPage from './component/ResetPasswordPage/ResetPasswordPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/reset-password-page" element={<ResetPasswordPage />} />
        
        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
