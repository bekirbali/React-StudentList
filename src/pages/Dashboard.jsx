import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import styles from "../styles/dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
