import React from "react";
import styles from "../styles/students.module.scss";
import { BsPencil } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";

const StudentsList = ({ students, updateHandler, deleteHandler }) => {
  return (
    <>
      <div className={styles.list}>
        {students?.map((student) => {
          const { id, firstName, email, phone, domain, company } = student;
          return (
            <div key={student.id} className={styles.student}>
              <img src={student.image} alt="" />
              <div className={styles.name}>
                <p>{firstName}</p>
              </div>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{domain}</p>
              <p>{company.name}</p>
              <p className={styles.icon}>
                {<BsPencil size={19} onClick={() => updateHandler(student)} />}
                {
                  <FiTrash
                    size={18}
                    onClick={() => deleteHandler(id, firstName)}
                  />
                }
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StudentsList;
