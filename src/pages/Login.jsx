import React from "react";
import styles from "../styles/login.module.scss";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <h1>manage courses</h1>
        <h2>sign in</h2>
        <p>Enter your credentials to access your account</p>
        <form className={styles.form}>
          <div className="emails">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
