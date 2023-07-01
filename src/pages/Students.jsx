import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import styles from "../styles/students.module.scss";

import { BsPencil } from "react-icons/bs";

const Students = () => {
  const { students, getStudents } = useContext(StudentContext);

  const [skip, setSkip] = useState(0);
  const [rows, setRows] = useState(6);

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
                {<FiTrash />}{" "}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <p>
          Rows per page:{" "}
          <select onChange={(e) => setRows(e.target.value)}>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
          </select>
        </p>
      </div>
      <button onClick={() => setSkip(skip && skip - 6)}>backward</button>
      <button onClick={() => setSkip(skip + 6)}>forward</button>
    </div>
  );
};

export default Students;
