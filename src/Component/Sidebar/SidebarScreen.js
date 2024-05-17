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
import { Link } from "@mui/material";
// import { Link } from "react-router-dom";

function SidebarScreen() {
  return (
    <div
      className="container-fluid p-0"
      style={{ position: "fixed", marginTop: "100px" }}
    >
      <div className="row m-0">
        <div className="col-12 p-0">
          <Sidebar className="sidebar-container">
            <Menu>
              <MenuItem className="sidebar-menu-item">
                <Link href="/">
                  <RxDashboard />
                  Dashboard
                </Link>
              </MenuItem>

              <MenuItem className="sidebar-menu-item">
                {" "}
                <Link href="/analytics">
                  <GoGraph />
                  Analytics{" "}
                </Link>
              </MenuItem>
              <MenuItem className="sidebar-menu-item">
                {" "}
                <Link href="/myAssets">
                  {" "}
                  <BsDatabaseFillAdd />
                  MyAssets
                </Link>
              </MenuItem>
              <MenuItem className="sidebar-menu-item">
                {" "}
                <Link href="/monitoring">
                  <MdOutlineSettingsInputAntenna />
                  Monitoring
                </Link>
              </MenuItem>

              <MenuItem className="sidebar-menu-item">
                {" "}
                <Link href="/ticketSummary">
                  <SiGoogledocs />
                  Tickets Summary
                </Link>
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

              <SubMenu title="User" icon={<FaRegUserCircle />}>
                User
                <MenuItem className="sidebar-menu-item">
                  {" "}
                  <Link href="/addUser">Add Users </Link>
                </MenuItem>
                <MenuItem className="sidebar-menu-item">
                  {" "}
                  <Link href="/department">Department </Link>
                </MenuItem>
              </SubMenu>

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
