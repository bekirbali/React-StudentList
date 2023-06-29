import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Sidebar";

import styles from "../styles/dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
