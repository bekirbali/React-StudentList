import React from "react";
import styles from "../styles/home.module.scss";

import { FaGraduationCap } from "react-icons/fa";
import { BsBookmark, BsCurrencyDollar } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={`${styles.student} ${styles.card}`}>
        <div>
          <FaGraduationCap size={32} style={{ color: "#74C1ED" }} />
          <h2>Students</h2>
        </div>
        <div className={styles.number}>
          <h3>243</h3>
        </div>
      </div>
      <div className={`${styles.course} ${styles.card}`}>
        <div>
          <BsBookmark size={32} style={{ color: "#EE95C5" }} />
          <h2>Courses</h2>
        </div>
        <div className={styles.number}>
          <h3>13</h3>
        </div>
      </div>
      <div className={`${styles.payment} ${styles.card}`}>
        <div>
          <BsCurrencyDollar
            size={32}
            style={{ border: "2px solid #F6C762", color: "#F6C762" }}
          />
          <h2>Payments</h2>
        </div>
        <div className={styles.number}>
          <h3>
            556,000<span>₺</span>
          </h3>
        </div>
      </div>
      <div className={`${styles.users} ${styles.card}`}>
        <div>
          <FaRegUser size={32} style={{ color: "#fff" }} />
          <h2>Users</h2>
        </div>
        <div className={styles.number}>
          <h3>3</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
