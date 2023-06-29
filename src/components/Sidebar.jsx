import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { BsBookmark, BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { RiFileChartLine } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";

import avatar from "../assets/avatar.jpg";

import styles from "../styles/sidebar.module.scss";

const Sidebar = () => {
  const navigate = useNavigate();

  const listItems = [
    { name: "Home", path: "", icon: <AiOutlineHome size={18} /> },
    { name: "Course", path: "asdf", icon: <BsBookmark size={18} /> },
    { name: "Students", path: "students", icon: <FaGraduationCap size={18} /> },
    { name: "Payment", path: "fda", icon: <BsCurrencyDollar size={18} /> },
    { name: "Report", path: "fasdf", icon: <RiFileChartLine size={18} /> },
    { name: "Settings", path: "asdf", icon: <GiSettingsKnobs size={18} /> },
  ];
  return (
    <nav className={styles.sidebar}>
      <div className={styles.profile}>
        <h1>manage courses</h1>
        <img src={avatar} alt="test" />
        <h2>John Doe</h2>
        <h4>Admin</h4>
      </div>
      <ul className={styles.menu}>
        {listItems.map((item) => {
          return (
            <li onClick={() => navigate(item.path)}>
              <span className={styles.icons}> {item.icon}</span> {item.name}
            </li>
          );
        })}

        <li>
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
