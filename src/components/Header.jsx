import React from "react";
import styles from "../styles/header.module.scss";

import { TbCircleCaretLeft } from "react-icons/tb";
import { AiOutlineBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <TbCircleCaretLeft
        size={20}
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
      />
      <AiOutlineBell size={20} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default Header;
