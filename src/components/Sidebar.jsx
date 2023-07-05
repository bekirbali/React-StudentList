import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { sidebarListItems } from "../utils/Array";
import { FiLogOut } from "react-icons/fi";

import avatar from "../assets/avatar.png";

import styles from "../styles/sidebar.module.scss";

const Sidebar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("auth");
    localStorage.removeItem("active");
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
            <NavLink
              className={styles.navLink}
              key={item.name}
              to={item.path}
              end
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive && "#feaf00",
                };
              }}
            >
              <li>
                {item.icon} <span className={styles.names}>{item.name}</span>
              </li>
            </NavLink>
          );
        })}

        <li className={styles.logout} onClick={logoutHandler}>
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
