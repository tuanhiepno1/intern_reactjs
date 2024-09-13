import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom"; // Thêm Navigate

import CustomHeader from "../components/Header/Header";
import HeaderInternList from "../components/Header/HeaderInternList";
import TechnologyHeader from "../components/Header/HeaderTechnology";
import HeaderZalo from "../components/Header/HeaderZalo";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderCV from "../components/Header/HeaderCV";
import HeaderDashboard from "../components/Header/HeaderDashboard";

import FilterForm from "../screens/FilterForm";
import GroupZaloManagement from "../screens/GroupZaloManagement";
import InternList from "../screens/ApproveCV";
import Management from "../screens/Management";
import TechnologyContent from "../screens/TechnologyManagement";
import ListFeature from "../features/ListManagement";
import ConfirmCV from "../screens/ConfirmCV_data";
import Dashboard from "../screens/Dashboard";

//login
import SignUp from '../components/SignUp/SignUp';
import Login from '../components/Login/Login';
import Home from '../components/Home';
import ResetPassword from '../components/ResetPassword/ResetPassword';
import OTPVerification from '../components/OTPVerification/OTPVerification'; // Import đúng
import ResetPasswordPage from '../components/ResetPasswordPage/ResetPasswordPage';

import "../assets/styles/NaviGation.css";

import AddNewProjectForm from "../components/modal/AddNewProjectForm";
import ScheduleInterview from "../components/modal/ScheduleInterview";
import ViewZalo from "../components/modal/ViewZalo";

const Navigation = () => {
  const [visible, setVisible] = useState(false);
  const [isScheduleModalVisible, setIsScheduleModalVisible] = useState(false);
  const [selectedInternId, setSelectedInternId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAddNewProject = () => {
    setVisible(true);
  };

  const handleScheduleInterview = (internId) => {
    setSelectedInternId(internId);
    setIsScheduleModalVisible(true);
  };

  const handleCreate = (values) => {
    console.log("Received values: ", values);
    setVisible(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/reset-password-page" element={<ResetPasswordPage />} />
        
        {/* Main Application Routes */}
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="*" element={
          <div className="layout-container">
            <div className="sidebar-container">
              <Sidebar />
            </div>
            <div className="main-container">
              <Routes>
                <Route path="/group-list" element={<ListFeature />} />
                <Route path="/intern-list" element={<ListFeature />} />
                <Route path="/projectmanagement" element={
                  <>
                    <CustomHeader onAddNewProject={handleAddNewProject} />
                    <FilterForm />
                  </>
                } />
                <Route path="/positionmanagement" element={
                  <>
                    <CustomHeader />
                    <Management />
                  </>
                } />
                <Route path="/technology-management" element={
                  <>
                    <TechnologyHeader />
                    <TechnologyContent />
                  </>
                } />
                <Route path="/group-zalo-management" element={
                  <>
                    <HeaderZalo />
                    <GroupZaloManagement />
                  </>
                } />
                <Route path="/confirm-cv" element={
                  <>
                    <HeaderCV />
                    <ConfirmCV />
                  </>
                } />
                <Route path="/view-zalo/:groupId" element={
                  <>
                    <HeaderZalo />
                    <ViewZalo />
                  </>
                } />
                <Route path="/approve-cv" element={
                  <>
                    <HeaderInternList onScheduleInterview={handleScheduleInterview} />
                    <InternList onSelectIntern={setSelectedInternId} />
                  </>
                } />
                <Route path="/dashboard" element={
                  <>
                    <HeaderDashboard />  
                    <Dashboard />
                  </>
                } />
              </Routes>
            </div>
          </div>
        } />
      </Routes>
      <AddNewProjectForm
        visible={visible}
        onCreate={handleCreate}
        onCancel={() => setVisible(false)}
      />
      <ScheduleInterview
        visible={isScheduleModalVisible}
        onClose={() => setIsScheduleModalVisible(false)}
        internId={selectedInternId}
      />
    </Router>
  );
};

export default Navigation;
