import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarScreen from "./Component/Sidebar/NavbarScreen";
import SidebarScreen from "./Component/Sidebar/SidebarScreen";
import Routing from "../src/Router/Routing";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <NavbarScreen />
        <div className="col-md-2 ">
          <SidebarScreen />
        </div>
        <div className="col-md-10">
          <Routing />
        </div>
      </div>
    </div>
  );
}

export default App;
