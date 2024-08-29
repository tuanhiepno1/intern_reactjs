import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import CustomHeader from "../components/Header/Header";
import FilterForm from "../screens/FilterForm";
import "../assets/styles/NaviGation.css";

import AddNewProjectForm from "../components/modal/AddNewProjectForm";

const NaviGation = () => {
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
            <Route path="/hi" element={ 
              <> 
                <CustomHeader onAddNewProject={handleAddNewProject} />  
                <FilterForm />
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

export default NaviGation;
