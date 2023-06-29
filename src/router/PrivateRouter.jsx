import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const { auth } = useContext(AuthContext);
  // const [user, setUser] = useState(true);

  return <div>{auth ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default PrivateRouter;
