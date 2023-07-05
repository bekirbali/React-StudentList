import React from "react";
import styles from "../styles/students.module.scss";
import { BsPencil } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const SearchResultsList = ({
  updateHandler,
  deleteHandler,
  selectChangeHandler,
  perPageFirst,
  perPageLast,
  allStudents,
  backwardHandler,
  forwardHandler,
  search,
}) => {
  const filteredStudents = allStudents.filter((student) =>
    student.firstName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className={styles.list}>
        {filteredStudents?.map((student) => {
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
      <div className={styles.row}>
        <p className={styles.perPage}>
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
    </>
  );
};

export default SearchResultsList;
