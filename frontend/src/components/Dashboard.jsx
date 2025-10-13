import React from "react";
import SidePanel from "../components/SidePanel";
import DashboardFrame from "../components/DashboardFrame";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <SidePanel />
      <DashboardFrame />
    </div>
  );
};

export default Dashboard;
