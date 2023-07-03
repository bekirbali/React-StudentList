import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import styles from "../styles/students.module.scss";

import { BsPencil } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import AddUpdateStudent from "../components/AddUpdateStudent";

const Students = () => {
  const {
    students,
    setStudents,
    allStudents,
    getStudents,
    addUpdate,
    setAddUpdate,
  } = useContext(StudentContext);

  const [skip, setSkip] = useState(0);
  const [rows, setRows] = useState(6);
  const [perPageFirst, setPerPageFirst] = useState(1);
  const [perPageLast, setPerPageLast] = useState(6);

  const selectChangeHandler = (e) => {
    setRows(Number(e.target.value));
    setPerPageFirst(1);
    setPerPageLast(Number(e.target.value));
  };

  const forwardHandler = () => {
    setSkip(skip + 6);
    if (perPageLast >= allStudents.length) {
      setPerPageLast(allStudents.length);
      setPerPageFirst(allStudents.length - rows + 1);
      return;
    }
    setPerPageFirst(perPageFirst + rows);
    setPerPageLast(perPageLast + rows);
  };

  const backwardHandler = () => {
    if (skip) {
      setSkip(skip - 6);
      setPerPageFirst(perPageFirst - rows);
      setPerPageLast(perPageLast - rows);
      return;
    }
  };

  const deleteHandler = (id, name) => {
    console.log(`${name} deleted`);
  };

  useEffect(() => {
    getStudents(skip, rows);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip, rows]);
  return (
    <div className={styles.students}>
      <div className={styles.topBar}>
        <h1>Students List</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.search}>
            <input type="text" placeholder="Search..." />
            <span>
              <AiOutlineSearch size={18} />
            </span>
          </div>
          <button onClick={() => setAddUpdate("add")}>Add Student</button>
        </form>
      </div>{" "}
      <div className={styles.addUpdateModal}>
        {addUpdate && <AddUpdateStudent />}
      </div>
      <div className={styles.titles}>
        <div className={styles.titlesName}>
          <p>Name</p>
        </div>
        <p>Email</p>
        <p>Phone</p>
        <p>Domain</p>
        <p>Company</p>
        <div className={styles.titleIcon}></div>
      </div>
      <div className={styles.list}>
        {students?.map((student) => {
          return (
            <div key={student.id} className={styles.student}>
              <img src={student.image} alt="" />
              <div className={styles.name}>
                <p>{student?.firstName}</p>
              </div>
              <p>{student.email}</p>
              <p>{student.phone}</p>
              <p>{student.domain}</p>
              <p>{student.company.name}</p>
              <p className={styles.icon}>
                {<BsPencil size={19} />}
                {
                  <FiTrash
                    size={18}
                    onClick={() => deleteHandler(student.id, student.firstName)}
                  />
                }
              </p>
            </div>
          );
        })}
      </div>
      <div className={styles.row}>
        <p>
          Rows per page:{" "}
          <select onChange={(e) => selectChangeHandler(e)}>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
          </select>
        </p>
        <p>
          {perPageFirst} - {perPageLast} of {allStudents.length}
        </p>
        <div className={styles.buttons}>
          <button>
            <MdOutlineArrowBackIosNew onClick={backwardHandler} />
          </button>
          <button>
            <MdOutlineArrowForwardIos onClick={forwardHandler} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Students;
