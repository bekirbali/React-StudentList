import React, { useContext } from "react";
import styles from "../styles/students.module.scss";
import { StudentContext } from "../context/StudentContext";
import { AiOutlineSearch } from "react-icons/ai";

const TopBar = ({ searchHandler }) => {
  const { setAddUpdate, search, setSearch } = useContext(StudentContext);

  return (
    <div className={styles.topBar}>
      <h1>Students List</h1>
      <div className={styles.rightSideElements}>
        <form onSubmit={searchHandler}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <span>
              <AiOutlineSearch size={18} />
            </span>
          </div>
        </form>
        <button onClick={() => setAddUpdate("add")}>Add New Student</button>
      </div>
    </div>
  );
};

export default TopBar;
