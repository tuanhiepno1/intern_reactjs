import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import CustomHeader from "../components/Header/Header";
import TechnologyHeader from "../components/Header/HeaderTechnology";

import FilterForm from "../screens/FilterForm";
import Management from "../screens/Management";
import TechnologyContent from "../screens/TechnologyManagement"
;
import "../assets/styles/Navigation.css";

import AddNewProjectForm from "../components/modal/AddNewProjectForm";

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
