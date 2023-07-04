import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import styles from "../styles/addUpdateStudent.module.scss";

const AddUpdateStudent = ({
  firstName,
  setFirstName,
  email,
  setEmail,
  domain,
  setDomain,
  phone,
  setPhone,
  company,
  setCompany,
  image,
  setImage,
}) => {
  const { addUpdate, setAddUpdate, addStudent, updateStudent } =
    useContext(StudentContext);

  const addHandler = (e) => {
    e.preventDefault();
    setAddUpdate("");
    // addStudent(newStudent);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    setAddUpdate("");
    // updateStudent(studentInfo);
  };

  return (
    <div className={styles.addUpdateModal}>
      <div className={styles.modal}>
        <div className={styles.outside} onClick={() => setAddUpdate("")}></div>
        {addUpdate === "add" ? (
          <form onSubmit={addHandler}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              name="phone"
              placeholder="Enter your phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              name="domain"
              placeholder="Enter your domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
            <input
              type="text"
              name="company"
              placeholder="Enter your company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <button type="submit">Add Student</button>
          </form>
        ) : (
          <form onSubmit={updateHandler}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              name="phone"
              placeholder="Enter your phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              name="domain"
              placeholder="Enter your domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
            <input
              type="text"
              name="company"
              placeholder="Enter your company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <button type="submit">Update Student</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddUpdateStudent;
