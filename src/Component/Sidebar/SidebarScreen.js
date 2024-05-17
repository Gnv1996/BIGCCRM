import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { RxDashboard } from "react-icons/rx";
import { GoGraph } from "react-icons/go";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { SiGoogledocs } from "react-icons/si";
import { TbReport } from "react-icons/tb";
import { MdLocalLibrary } from "react-icons/md";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import { GrSettingsOption } from "react-icons/gr";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SidebarScreen.css";

function SidebarScreen() {
  return (
    <div className="container-fluid p-0" style={{ position: "fixed", marginTop:100 }}>
      <div className="row m-0">
        <div className="col-12 p-0">
          <Sidebar className="sidebar-container">
            <Menu>
              <MenuItem className="sidebar-menu-item">
                <RxDashboard /> Dashboard{" "}
              </MenuItem>
              <MenuItem className="sidebar-menu-item">
                {" "}
                <GoGraph />
                Analytics{" "}
              </MenuItem>
              <MenuItem className="sidebar-menu-item">
                {" "}
                <BsDatabaseFillAdd />
                MyAssets
              </MenuItem>
              <MenuItem className="sidebar-menu-item">
                {" "}
                <MdOutlineSettingsInputAntenna />
                Monitoring
              </MenuItem>
              <MenuItem className="sidebar-menu-item">
                {" "}
                <SiGoogledocs />
                Tickets Summary
              </MenuItem>
              <MenuItem className="sidebar-menu-item">
                {" "}
                <TbReport />
                Reports
              </MenuItem>
              <MenuItem className="sidebar-menu-item">
                {" "}
                <MdLocalLibrary />
                Library
              </MenuItem>
              <MenuItem className="sidebar-menu-item">
                {" "}
                <GrSettingsOption />
                Customization
              </MenuItem>
              <MenuItem className="sidebar-menu-item">
                {" "}
                <FaRegUserCircle />
                Users
              </MenuItem>

              <MenuItem className="sidebar-menu-item">
                {" "}
                <FaPowerOff />
                Sign Out
              </MenuItem>
            </Menu>
          </Sidebar>
        </div>
      </div>
    </div>
  );
}

export default SidebarScreen;
