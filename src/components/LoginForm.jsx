import React from "react";
import styles from "../styles/login.module.scss";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
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
