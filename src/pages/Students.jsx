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
import { toastSuccessNotify } from "../utils/Toastify";

import loadingGif from "../assets/loading.gif";
import TopBar from "../components/TopBar";
import StudentsList from "../components/StudentsList";

const Students = () => {
  const {
    students,
    allStudents,
    getStudents,
    addUpdate,
    setAddUpdate,
    deleteStudent,
    loading,
    search,
    setSearch,
  } = useContext(StudentContext);

  const [skip, setSkip] = useState(0);
  const [rows, setRows] = useState(6);
  const [perPageFirst, setPerPageFirst] = useState(1);
  const [perPageLast, setPerPageLast] = useState(6);

  const [firstName, setFirstName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState("");
  const [company, setCompany] = useState("");
  const [id, setId] = useState("");

  const [studentInfo, setStudentInfo] = useState({
    firstName: firstName,
    email: email,
    phone: phone,
    domain: domain,
    company: { name: company },
    image: image,
  });

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

  const updateHandler = (student) => {
    const { id, firstName, email, phone, domain, company, image } = student;
    setFirstName(firstName);
    setEmail(email);
    setPhone(phone);
    setDomain(domain);
    setCompany(company.name);
    setAddUpdate("update");
    setImage(image);
    setId(id);
  };

  const deleteHandler = (id, name) => {
    deleteStudent(id);
    toastSuccessNotify(`${name} deleted`);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setSkip(0);
    setPerPageFirst(1);
    setPerPageLast(rows);
  };

  useEffect(() => {
    getStudents(skip, rows);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip, rows]);
  return (
    <div className={styles.students}>
      <TopBar searchHandler={searchHandler} />
      <div className={styles.addUpdateModal}>
        {addUpdate && (
          <AddUpdateStudent
            firstName={firstName}
            setFirstName={setFirstName}
            email={email}
            setEmail={setEmail}
            domain={domain}
            setDomain={setDomain}
            phone={phone}
            setPhone={setPhone}
            company={company}
            setCompany={setCompany}
            image={image}
            setImage={setImage}
            studentInfo={studentInfo}
            setStudentInfo={setStudentInfo}
            id={id}
          />
        )}
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
      {loading && (
        <div className={styles.loading}>
          <img
            src={loadingGif}
            alt="https://dribbble.com/shots/4275501-Loading-Screen-Animation-Hourglass"
          />
        </div>
      )}
      {!loading && (
        <>
          <StudentsList
            students={students}
            updateHandler={updateHandler}
            deleteHandler={deleteHandler}
            selectChangeHandler={selectChangeHandler}
            perPageFirst={perPageFirst}
            perPageLast={perPageLast}
            allStudents={allStudents}
            backwardHandler={backwardHandler}
            forwardHandler={forwardHandler}
          />
        </>
      )}
    </div>
  );
};

export default Students;
