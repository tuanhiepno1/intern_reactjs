import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CustomHeader from "../components/Header/Header";
import TechnologyHeader from "../components/Header/HeaderTechnology";
import Sidebar from "../components/Sidebar/Sidebar";

import "../assets/styles/Navigation.css";
import FilterForm from "../screens/FilterForm";
import Management from "../screens/Management";
import TechnologyContent from "../screens/TechnologyManagement";

import AddNewProjectForm from "../components/modal/AddNewProjectForm";
import GroupListFeature from "../features/GroupListManagement";

import ConfirmCV from "../screens/ConfirmCV";
import HeaderCV from "../components/Header/HeaderCV";

const Navigation = () => {
  const [visible, setVisible] = useState(false);

  const handleAddNewProject = () => {
    setVisible(true);
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
                <GroupListFeature />
              </>
            } />
            <Route path="/confirm-cv" element={
              <>
                <HeaderCV />
                <ConfirmCV />
              </>
            } />
            < Route path="/projectmanagement" element={
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
          </Routes>
        </div>
        <AddNewProjectForm
          visible={visible}
          onCreate={handleCreate}
          onCancel={() => setVisible(false)}
        />
      </div>
    </Router>
  );
};

export default Navigation;
