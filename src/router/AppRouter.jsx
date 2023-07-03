import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Students from "../pages/Students";
import Dashboard from "../pages/Dashboard";
import Course from "../pages/Course";
import Payment from "../pages/Payment";
import Report from "../pages/Report";
import Settings from "../pages/Settings";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<PrivateRouter />}>
        <Route path="" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="students" element={<Students />} />
          <Route path="payment" element={<Payment />} />
          <Route path="report" element={<Report />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
