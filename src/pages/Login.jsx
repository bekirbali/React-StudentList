import React from "react";
import styles from "../styles/login.module.scss";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <h1>manage courses</h1>
        <h2>sign in</h2>
        <p>Enter your credentials to access your account</p>
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
      </div>
    </div>
  );
};

export default Login;
