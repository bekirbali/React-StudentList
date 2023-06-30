import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { sidebarListItems } from "../utils/arrays";
import { FiLogOut } from "react-icons/fi";

import avatar from "../assets/avatar.jpg";

import styles from "../styles/sidebar.module.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");

  const clickHandler = (item) => {
    navigate(item.path);
    setActive(item.name);
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.profile}>
        <h1>manage courses</h1>
        <img src={avatar} alt="test" />
        <h2>John Doe</h2>
        <h4>Admin</h4>
      </div>
      <ul className={styles.menu}>
        {sidebarListItems.map((item) => {
          return (
            <li
              key={item.name}
              onClick={() => clickHandler(item)}
              className={active === `${item.name}` ? styles.active : ""}
            >
              {item.icon} <span className={styles.names}>{item.name}</span>
            </li>
          );
        })}

        <li className={styles.logout} onClick={() => navigate("/")}>
          Logout{" "}
          <span>
            <FiLogOut size={18} />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
