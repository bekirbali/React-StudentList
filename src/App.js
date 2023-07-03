import "./App.scss";
import AuthContextProvider from "./context/AuthContext";
import StudentContextProvider from "./context/StudentContext";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <StudentContextProvider>
          <AppRouter />
        </StudentContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
