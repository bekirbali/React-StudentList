import axios from "axios";
import { createContext, useState } from "react";

export const StudentContext = createContext();

const StudentContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const getStudents = async (skip, rows) => {
    const { data } = await axios.get(
      `https://dummyjson.com/users?limit=${rows}&skip=${skip}`
    );
    setStudents(data.users);
    console.log(data.users);
  };

  const newStudent = {
    name: "",
    email: "",
    phone: "",
    website: "",
    company: "",
  };

  const addStudent = () => {
    setStudents((todo) => [newStudent, ...todo]);
  };

  const updateStudent = () => {};

  const deleteStudent = () => {};

  const values = {
    addStudent,
    updateStudent,
    deleteStudent,
    students,
    getStudents,
  };
  return (
    <StudentContext.Provider value={values}>{children}</StudentContext.Provider>
  );
};

export default StudentContextProvider;
