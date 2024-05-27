import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { RxDashboard } from "react-icons/rx";
import { GoGraph } from "react-icons/go";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { SiGoogledocs } from "react-icons/si";
import { TbReport } from "react-icons/tb";
import { MdLocalLibrary, MdOutlineSettingsInputAntenna } from "react-icons/md";
import { FaRegUserCircle, FaPowerOff } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SidebarScreen.css";
import { Link } from "@mui/material"; // Correct Link import

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
                <Link
                  href="/"
                  className="sidebar-link"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <RxDashboard size={20} /> Dashboard
                </Link>
              </MenuItem>

              <MenuItem className="sidebar-menu-item">
                <Link
                  href="/analytics"
                  className="sidebar-link"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <GoGraph size={20} /> Analytics
                </Link>
              </MenuItem>

              <MenuItem className="sidebar-menu-item">
                <Link
                  href="/myAssets"
                  className="sidebar-link"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <BsDatabaseFillAdd size={20} /> MyAssets
                </Link>
              </MenuItem>

              <MenuItem className="sidebar-menu-item">
                <Link
                  href="/monitoring"
                  className="sidebar-link"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <MdOutlineSettingsInputAntenna size={20} /> Monitoring
                </Link>
              </MenuItem>

              <MenuItem className="sidebar-menu-item">
                <Link
                  href="/ticketSummary"
                  className="sidebar-link"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <SiGoogledocs size={20} /> Tickets Summary
                </Link>
              </MenuItem>

              <MenuItem className="sidebar-menu-item">
                <TbReport size={20} /> Reports
              </MenuItem>

              <SubMenu
                icon={<MdLocalLibrary size={20} />}
                label="Library"
                className="sidebar-menu-items"
              >
                <MenuItem className="submenu-item">Contact List</MenuItem>
                <MenuItem className="submenu-item">Escalation Matrix</MenuItem>
                <MenuItem className="submenu-item">Knowledgebase</MenuItem>
              </SubMenu>

              <SubMenu
                icon={<GrSettingsOption size={20} />}
                label="Customization"
                className="sidebar-menu-items"
              >
                <MenuItem className="submenu-item">
                  <Link
                    href="/report_manager"
                    className="sidebar-link"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Report Manager
                  </Link>
                </MenuItem>
                <MenuItem className="submenu-item">
                  <Link
                    href="/notification"
                    className="sidebar-link"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Notification
                  </Link>
                </MenuItem>
              </SubMenu>

              <SubMenu
                icon={<FaRegUserCircle size={20} />}
                label="Users"
                className="sidebar-menu-items"
              >
                <MenuItem className="submenu-item">
                  <Link
                    href="/addUser"
                    className="sidebar-link"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Add Users
                  </Link>
                </MenuItem>
                <MenuItem className="submenu-item">
                  <Link
                    href="/department"
                    className="sidebar-link"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Departments
                  </Link>
                </MenuItem>
                <MenuItem className="submenu-item">
                  <Link
                    href="/"
                    className="sidebar-link"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Problem Code
                  </Link>
                </MenuItem>
                <MenuItem className="submenu-item">
                  <Link
                    href="/"
                    className="sidebar-link"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Service RFO
                  </Link>
                </MenuItem>
              </SubMenu>

              <MenuItem className="sidebar-menu-item">
                <FaPowerOff size={20} /> Sign Out
              </MenuItem>
            </Menu>
          </Sidebar>
        </div>
      </div>
    </div>
  );
}

export default SidebarScreen;
