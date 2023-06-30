import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Sidebar";

import styles from "../styles/dashboard.module.scss";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Navbar />
      <div className={styles.right}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
