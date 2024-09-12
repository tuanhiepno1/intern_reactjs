import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CustomHeader from "../components/Header/Header";
import HeaderInternList from "../components/Header/HeaderInternList";
import TechnologyHeader from "../components/Header/HeaderTechnology";
import HeaderZalo from "../components/Header/HeaderZalo";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderCV from "../components/Header/HeaderCV";

import FilterForm from "../screens/FilterForm";
import GroupZaloManagement from "../screens/GroupZaloManagement";
import InternList from "../screens/ApproveCV";
import Management from "../screens/Management";
import TechnologyContent from "../screens/TechnologyManagement";
import ListFeature from "../features/ListManagement";
import ConfirmCV from "../screens/ConfirmCV_data";

import "../assets/styles/NaviGation.css";

import AddNewProjectForm from "../components/modal/AddNewProjectForm";
import ScheduleInterview from "../components/modal/ScheduleInterview";
import ViewZalo from "../components/modal/ViewZalo";
const Navigation = () => {
  const [visible, setVisible] = useState(false);
  const [isScheduleModalVisible, setIsScheduleModalVisible] = useState(false);
  const [selectedInternId, setSelectedInternId] = useState(null);

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


  return (
    <Router>
      <div className="layout-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="main-container">
          <Routes>
            <Route path="/group-list" element={
              <>
                <ListFeature />
              </>
            } />
            <Route path="/intern-list" element={
              <>
                <ListFeature />
              </>
            } />

            <Route path="/projectmanagement" element={
              <>
                <CustomHeader onAddNewProject={handleAddNewProject} />
                <FilterForm />
              </>
            }
            />
            <Route path="/positionmanagement" element={
              <>
                <CustomHeader />
                <Management />
              </>
            }
            />
            <Route path="/technology-management" element={
              <>
                <TechnologyHeader />
                <TechnologyContent />
              </>
            }
            />
            <Route path="/group-zalo-management" element={
              <>
                <HeaderZalo />
                <GroupZaloManagement />

              </>
            }
            />
            <Route path="/confirm-cv" element={
              <>
                <HeaderCV />
                <ConfirmCV />
              </>
            }
            />
            <Route path="/view-zalo/:groupId" element={
              <>
                <HeaderZalo />
                <ViewZalo /></>
            } l
            />
            <Route path="/approve-cv" element={
              <>
                <HeaderInternList onScheduleInterview={handleScheduleInterview} />
                <InternList onSelectIntern={setSelectedInternId} />
              </>
            }
            />
          </Routes>
        </div>
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
      </div>
    </Router>
  );
};

export default Navigation;
