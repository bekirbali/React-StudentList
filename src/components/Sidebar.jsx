import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { sidebarListItems } from "../utils/arrays";
import { FiLogOut } from "react-icons/fi";

import avatar from "../assets/avatar.jpg";

import styles from "../styles/sidebar.module.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");

  const clickHandler = ({ path, name }) => {
    // navigate(path);
    // setActive(name);
    localStorage.setItem("active", name);
  };

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("auth");
    localStorage.removeItem("active");
  };

  // useEffect(() => {
  //   setActive(localStorage.getItem("active" || active));
  // }, []);

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
              onClick={() => clickHandler(item)}
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
