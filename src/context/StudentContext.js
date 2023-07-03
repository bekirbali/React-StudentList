import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();

const StudentContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [addUpdate, setAddUpdate] = useState("");
  const [loading, setLoading] = useState(false);

  const getStudents = async (skip, rows) => {
    const { data } = await axios.get(
      `https://dummyjson.com/users?limit=${rows}&skip=${skip}`
    );
    // setStudents(data.users);
    const allStudentsList = await axios.get(
      "https://dummyjson.com/users?limit=0"
    );
    setAllStudents(allStudentsList.data.users);
    setStudents(allStudents.slice(skip, skip + rows));
  };

  const addStudent = (newStudent) => {
    setAllStudents((todo) => [newStudent, ...todo]);
  };

  const updateStudent = () => {};

  const deleteStudent = () => {};

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(allStudents));
  }, [allStudents]);

  const values = {
    addStudent,
    updateStudent,
    deleteStudent,
    students,
    getStudents,
    allStudents,
    addUpdate,
    setAddUpdate,
    setStudents,
  };

  return (
    <StudentContext.Provider value={values}>{children}</StudentContext.Provider>
  );
};

export default StudentContextProvider;
