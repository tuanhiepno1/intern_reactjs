import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './component/SignUp/SignUp';
import Login from './component/Login/Login';
import Home from './component/Home';

const App = () => {
  // Quản lý trạng thái đăng nhập
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hàm để xử lý đăng nhập
  const handleLogin = () => {
    // Giả sử đăng nhập thành công, đặt isAuthenticated là true
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Routes>
        {/* Điều hướng đến trang đăng nhập nếu chưa đăng nhập */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Điều hướng về trang Home nếu đã đăng nhập, ngược lại về trang đăng nhập */}
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
