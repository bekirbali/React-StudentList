import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Students from "../pages/Students";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<PrivateRouter />}>
        <Route index element={<Home />} />
        <Route path="students" element={<Students />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
