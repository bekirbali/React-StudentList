import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/home.module.scss";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li onClick={() => navigate("home")}>
          <button> home</button>
        </li>
        <li onClick={() => navigate("students")}>
          <button> students</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
