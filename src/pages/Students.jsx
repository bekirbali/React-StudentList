import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import styles from "../styles/students.module.scss";

import { BsPencil } from "react-icons/bs";

const Students = () => {
  const { students, getStudents } = useContext(StudentContext);

  const [skip, setSkip] = useState(0);

  useEffect(() => {
    getStudents(skip);
    console.log(students);
  }, [skip]);
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
              <p className={styles.icon}>{<BsPencil size={19} />} </p>
            </div>
          );
        })}
        <button onClick={() => setSkip(skip && skip - 6)}>backward</button>
        <button onClick={() => setSkip(skip === 96 ? skip + 4 : skip + 6)}>
          forward
        </button>
      </div>
    </div>
  );
};

export default Students;
