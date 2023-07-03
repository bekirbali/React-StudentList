import React from "react";
import styles from "../styles/cards.module.scss";

import { BsBookmark } from "react-icons/bs";

const Course = () => {
  return (
    <div className={styles.home}>
      <div className={`${styles.card} ${styles.course}`}>
        <div>
          <BsBookmark size={70} style={{ color: "#EE95C5", width: "56px" }} />
          <h2>Course</h2>
        </div>
        <div className={styles.number}>
          <h3>13</h3>
        </div>
      </div>
    </div>
  );
};

export default Course;
