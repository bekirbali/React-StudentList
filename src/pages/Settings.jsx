import React from "react";
import styles from "../styles/cards.module.scss";
import { GiSettingsKnobs } from "react-icons/gi";

const Settings = () => {
  return (
    <div className={styles.home}>
      <div className={`${styles.card} ${styles.settings}`}>
        <div>
          <GiSettingsKnobs size={60} style={{ border: "1px solid white" }} />
          <h2>Settings</h2>
        </div>
        <div className={styles.number}>
          <h3>13</h3>
        </div>
      </div>
    </div>
  );
};

export default Settings;
