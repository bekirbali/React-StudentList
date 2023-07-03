import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import styles from "../styles/students.module.scss";

import { BsPencil } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Students = () => {
  const { students, allStudents, getStudents } = useContext(StudentContext);

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

  useEffect(() => {
    getStudents(skip, rows);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip, rows]);
  return (
    <div className={styles.students}>
      <h1>Students List</h1>
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
                {<FiTrash size={18} />}
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
            <AiOutlineArrowLeft onClick={backwardHandler} />
          </button>
          <button>
            <AiOutlineArrowRight onClick={forwardHandler} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Students;
