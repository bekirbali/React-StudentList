import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BsBookmark, BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { RiFileChartLine } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";

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

  const listItems = [
    { name: "Home", path: "", icon: <AiOutlineHome size={20} /> },
    { name: "Course", path: "", icon: <BsBookmark size={20} /> },
    { name: "Students", path: "students", icon: <FaGraduationCap size={20} /> },
    {
      name: "Payment",
      path: "",
      icon: (
        <BsCurrencyDollar size={20} style={{ border: "1px solid black" }} />
      ),
    },
    { name: "Report", path: "", icon: <RiFileChartLine size={20} /> },
    {
      name: "Settings",
      path: "",
      icon: <GiSettingsKnobs size={20} style={{ border: "1px solid black" }} />,
    },
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
