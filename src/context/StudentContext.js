import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toastErrorNotify } from "../utils/Toastify";

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
      toastErrorNotify(`Getting data failed, ${error}`);
    }
  };

  const addStudent = async (newStudent) => {
    try {
      const headers = { "Content-Type": "application/json" };
      await axios.post(`https://dummyjson.com/users/add`, newStudent, {
        headers,
      });
    } catch (error) {
      toastErrorNotify(`Adding user failed, ${error}`);
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
      toastErrorNotify(`Updating user failed, ${error}`);
    }
  };

  const deleteStudent = async (id, name) => {
    try {
      await axios.delete(`https://dummyjson.com/users/${id}`);
    } catch (error) {
      toastErrorNotify(`Deleting user failed, ${error}`);
    }
  };

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
