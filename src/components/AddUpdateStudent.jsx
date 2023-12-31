import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import styles from "../styles/addUpdateStudent.module.scss";

import { ImCancelCircle } from "react-icons/im";

import { toastSuccessNotify } from "../utils/Toastify";

const AddUpdateStudent = ({
  id,
  firstName,
  email,
  domain,
  phone,
  company,
  image,
  studentInfo,
  setEmail,
  setDomain,
  setFirstName,
  setPhone,
  setCompany,
  setImage,
  setStudentInfo,
}) => {
  const { addUpdate, setAddUpdate, addStudent, updateStudent } =
    useContext(StudentContext);

  const addHandler = (e) => {
    e.preventDefault();
    setAddUpdate("");
    addStudent(studentInfo);
    setEmail("");
    setDomain("");
    setFirstName("");
    setPhone("");
    setCompany("");
    setImage("");
    toastSuccessNotify(`${firstName} added successfully`);
  };

  const closeModal = () => {
    setAddUpdate("");
    setEmail("");
    setDomain("");
    setFirstName("");
    setPhone("");
    setCompany("");
    setImage("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    setAddUpdate("");
    updateStudent(id, studentInfo);
    setEmail("");
    setDomain("");
    setFirstName("");
    setPhone("");
    setCompany("");
    setImage("");
    toastSuccessNotify(`${firstName} updated successfully`);
  };

  const closeModalHandler = () => {
    setAddUpdate("");
    setEmail("");
    setDomain("");
    setFirstName("");
    setPhone("");
    setCompany("");
    setImage("");
  };

  return (
    <div className={styles.addUpdateModal}>
      <div className={styles.modal}>
        <div className={styles.outside} onClick={closeModalHandler}></div>
        {addUpdate === "add" ? (
          <>
            <form onSubmit={addHandler}>
              <ImCancelCircle
                size={20}
                className={styles.cancel}
                onClick={closeModal}
              />
              <h1>Add new students </h1>
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
                type="text"
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
          </>
        ) : (
          <>
            <form onSubmit={updateHandler}>
              <ImCancelCircle
                size={20}
                className={styles.cancel}
                onClick={closeModal}
              />
              <h1>Update {firstName}</h1>
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
                type="text"
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
              <button type="submit">Update "{firstName}"</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AddUpdateStudent;
