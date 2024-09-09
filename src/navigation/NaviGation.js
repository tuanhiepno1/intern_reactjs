import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import CustomHeader from "../components/Header/Header";
import HeaderZalo from "../components/Header/HeaderZalo";
import TechnologyHeader from "../components/Header/HeaderTechnology";
import HeaderInternList from "../components/Header/HeaderInternList";

import FilterForm from "../screens/FilterForm";
import Management from "../screens/Management";
import TechnologyContent from "../screens/TechnologyManagement";
import GroupZaloManagement from "../screens/GroupZaloManagement";
import InternList from "../screens/InternList";
import GroupListManagement from "../features/ListManagement";

import "../assets/styles/NaviGation.css";

import AddNewProjectForm from "../components/modal/AddNewProjectForm";
import ViewZalo from "../components/modal/ViewZalo";
import ScheduleInterview from "../components/modal/ScheduleInterview";
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
              <HeaderInternList />  
              <GroupListManagement />
              </>
              }
            />
            <Route path="/projectmanagement" element={ 
              <> 
                <CustomHeader onAddNewProject={handleAddNewProject} />  
                <FilterForm />
                </>
              }
            /> 
            <Route path="/positionmanagement" element={ 
              <> 
                <CustomHeader  />  
                <Management />
                </>
              }
            /> 
            <Route path="/technology-management" element={ 
              <> 
                <TechnologyHeader  />  
                <TechnologyContent />
                </>
              }
            /> 
            <Route path="/group-zalo-management" element={ 
              <> 
                <HeaderZalo />  
               <GroupZaloManagement/>
               
                </>
              }
            /> 
            <Route path="/view-zalo/:groupId" element={
              <>
              <HeaderZalo />  
              <ViewZalo /></>
              }l
            />
            <Route path="/group-list" element={
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
