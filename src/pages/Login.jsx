import React from "react";
import styles from "../styles/login.module.scss";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <h1>manage courses</h1>
        <h2>sign in</h2>
        <p>Enter your credentials to access your account</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
