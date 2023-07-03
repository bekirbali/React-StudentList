import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import styles from "../styles/addUpdateStudent.module.scss";

const AddUpdateStudent = () => {
  const { addUpdate, setAddUpdate, addStudent } = useContext(StudentContext);

  const newStudent = {
    firstName: "",
    email: "",
    phone: "",
    domain: "",
    company: "",
    image: "",
  };

  const [students, setStudents] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setAddUpdate("");
    // addStudent(newStudent);
    setStudents((student) => [...student, newStudent]);
  };

  useEffect(() => {
    const data = localStorage.getItem("students");
    const parsedData = JSON.parse(data);
    setStudents(parsedData);
  }, []);

  return (
    <div className={styles.addUpdateModal}>
      <div className={styles.modal}>
        <div className={styles.outside} onClick={() => setAddUpdate("")}></div>
        <form onSubmit={submitHandler}>
          <input type="text" name="name" placeholder="Enter your name" />
          <input type="text" name="image" placeholder="Image URL" />
          <input type="email" name="email" placeholder="Enter your email" />
          <input type="number" name="phone" placeholder="Enter your phone" />
          <input type="text" name="domain" placeholder="Enter your domain" />
          <input
            type="text"
            name="company"
            placeholder="Enter your company name"
          />
          <button type="submit">
            {addUpdate === "add" ? "Add Student" : "Update Student"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUpdateStudent;
