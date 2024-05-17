import React from "react";
import NavbarScreen from '../src/Component/Sidebar/NavbarScreen'
import SidebarScreen from '../src/Component/Sidebar/SidebarScreen'
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardScreen from "../src/Component/Screen/DashboardScreen"

function App() {
  return (
    <div className="container-fluid bg-light ">
      <div className="row">
      
        <NavbarScreen/>
   
      

      <div className="col-md-2">
      <SidebarScreen/>
      </div>

      <div className="col-md-10">
        <DashboardScreen/>

      </div>

      </div>
      
     
   
    </div>
  );
}

export default App;
