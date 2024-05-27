import React from "react";
import Graph from "../Component/Compo/Graph";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnalyticScreen from "../Component/Compo/AnalyticScreen";
import MyAssets from "../Component/Compo/MyAssest";
import MonitoringScreen from "../Component/Screen/MointeringScreen";
import TicketSummary from "../Component/Screen/TicketSummary";
import AddUsersScreen from "../Component/Screen/AddUsersScreen";
import DepartmentScreen from "../Component/Screen/DepartmentsScreen";
import CustomizationScreen from "../Component/Screen/CustomizationScreen";
import Notification from "../Component/Screen/Notification";
import UserScreen from "../Component/Screen/UserScreen";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Graph />} />
        <Route path="/analytics" element={<AnalyticScreen />} />
        <Route path="/myAssets" element={<MyAssets />} />
        <Route path="/monitoring" element={<MonitoringScreen />} />
        <Route path="/ticketSummary" element={<TicketSummary />} />

        <Route path="/" element={<AddUsersScreen />} />
        <Route path="/addUser" element={<UserScreen />} />

        <Route path="/department" element={<DepartmentScreen />} />
        <Route path="/report_manager" element={<CustomizationScreen />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </Router>
  );
}

export default Routing;
