import axios from "axios";
import { createContext, useState } from "react";
import { toastErrorNotify } from "../utils/Toastify";

export const StudentContext = createContext();

const StudentContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [addUpdate, setAddUpdate] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getStudents = async (skip, rows) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/users?limit=${rows}&skip=${skip}`
      );
      setStudents(data.users);
      const allStudentsList = await axios.get(
        "https://dummyjson.com/users?limit=0"
      );
      setAllStudents(allStudentsList.data.users);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
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
    search,
    setSearch,
  };

  return (
    <StudentContext.Provider value={values}>{children}</StudentContext.Provider>
  );
};

export default StudentContextProvider;
