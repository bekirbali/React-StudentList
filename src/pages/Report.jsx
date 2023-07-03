import React from "react";
import styles from "../styles/cards.module.scss";
import { RiFileChartLine } from "react-icons/ri";

const Report = () => {
  return (
    <div className={styles.home}>
      <div className={`${styles.card} ${styles.report}`}>
        <div>
          <RiFileChartLine size={60} />
          <h2>Report</h2>
        </div>
        <div className={styles.number}>
          <h3>26</h3>
        </div>
      </div>
    </div>
  );
};

export default Report;
