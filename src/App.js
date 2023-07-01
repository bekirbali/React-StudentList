import "./App.scss";
import AuthContextProvider from "./context/AuthContext";
import StudentContextProvider from "./context/StudentContext";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <StudentContextProvider>
          <AppRouter />
        </StudentContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
