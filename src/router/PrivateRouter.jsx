import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const auth = localStorage.getItem("auth");

  return <>{auth ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRouter;
