import React from "react";
import styles from "../styles/header.module.scss";

import { TbCircleCaretLeft } from "react-icons/tb";
import { AiOutlineBell } from "react-icons/ai";

const Header = () => {
  return (
    <div className={styles.header}>
      <TbCircleCaretLeft size={20} />
      <AiOutlineBell size={20} />
    </div>
  );
};

export default Header;
