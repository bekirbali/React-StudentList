import React from "react";
import styles from "../styles/students.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const TopBar = ({ searchHandler, search, setSearch, setAddUpdate }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <div className={styles.topBar}>
      <h1>Students List</h1>
      <div className={styles.rightSideElements}>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => searchHandler(e)}
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
