import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import styles from "../styles/students.module.scss";

import { BsPencil } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Students = () => {
  const { students, getStudents } = useContext(StudentContext);

  const [skip, setSkip] = useState(0);
  const [rows, setRows] = useState(6);
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    getStudents(skip, rows);
    console.log(students);
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
          <select onChange={(e) => setRows(e.target.value)}>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
          </select>
        </p>

        <div className={styles.buttons}>
          <AiOutlineArrowLeft onClick={() => setSkip(skip && skip - 6)} />
          <AiOutlineArrowRight onClick={() => setSkip(skip + 6)} />
        </div>
      </div>
    </div>
  );
};

export default Students;
