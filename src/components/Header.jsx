import React, { useState } from "react";
import styles from "../styles/header.module.scss";

import { TbCircleCaretLeft } from "react-icons/tb";
import { BsBell, BsBellSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [bell, setBell] = useState(true);
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <TbCircleCaretLeft
        size={20}
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
      />
      {bell ? (
        <BsBell
          size={20}
          style={{ cursor: "pointer" }}
          onClick={() => setBell(!bell)}
        />
      ) : (
        <BsBellSlash
          size={20}
          style={{ cursor: "pointer" }}
          onClick={() => setBell(!bell)}
        />
      )}
    </div>
  );
};

export default Header;
