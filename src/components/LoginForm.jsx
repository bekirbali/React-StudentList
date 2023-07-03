import React, { useContext, useEffect } from "react";
import styles from "../styles/login.module.scss";

import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuth(true);
    console.log(auth);
    navigate("/dashboard");
    localStorage.setItem("auth", auth);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.emails}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter your email" />
      </div>
      <div className={styles.passwords}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <button className={styles.sign} type="submit">
        sign in
      </button>
      <p>
        Forgot your password?{" "}
        <button className={styles.reset}>reset password</button>
      </p>
    </form>
  );
};

export default LoginForm;
