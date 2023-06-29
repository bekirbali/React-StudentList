import React, { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRouter = () => {
  const [user, setUser] = useState(true);

  return <div>{user ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default PrivateRouter;
