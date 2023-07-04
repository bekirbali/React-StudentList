import "./App.scss";
import AuthContextProvider from "./context/AuthContext";
import StudentContextProvider from "./context/StudentContext";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <StudentContextProvider>
          <AppRouter />
          <ToastContainer />
        </StudentContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
