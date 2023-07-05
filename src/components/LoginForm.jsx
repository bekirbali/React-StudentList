import React, { useContext, useState } from "react";
import styles from "../styles/login.module.scss";

import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify } from "../utils/Toastify";

const LoginForm = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toastErrorNotify("Please fill all the fields");
      return;
    }
    setAuth(true);
    navigate("/dashboard");
    localStorage.setItem("auth", auth);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.emails}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.passwords}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
