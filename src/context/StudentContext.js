import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();

const StudentContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [addUpdate, setAddUpdate] = useState("");
  const [loading, setLoading] = useState(false);

  const getStudents = async (skip, rows) => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/users?limit=${rows}&skip=${skip}`
      );
      setStudents(data.users);
      const allStudentsList = await axios.get(
        "https://dummyjson.com/users?limit=0"
      );
      setAllStudents(allStudentsList.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const addStudent = async (newStudent) => {
    try {
      const headers = { "Content-Type": "application/json" };
      await axios.post(`https://dummyjson.com/users/add`, newStudent, {
        headers,
      });
      console.log("added", newStudent.firstName);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStudent = async (id, update) => {
    try {
      const headers = { "Content-Type": "application/json" };
      await axios.put(`https://dummyjson.com/users/${id}`, update, {
        headers,
      });
      console.log("updated");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (id, name) => {
    try {
      await axios.delete(`https://dummyjson.com/users/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

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
    loading,
    setLoading,
  };

  return (
    <StudentContext.Provider value={values}>{children}</StudentContext.Provider>
  );
};

export default StudentContextProvider;
