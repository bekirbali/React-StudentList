import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "../styles/home.module.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li onClick={() => navigate("students")}>
            {/* <Link to="/students">Students</Link> */}
            students
          </li>
          {/* <li>
            <Link to="/students">Course</Link>
          </li> */}
          {/* <li><Link to=''>Payment</Link></li> */}
          {/* <li><Link to=''>Report</Link></li> */}
          {/* <li><Link to=''>Settings</Link></li> */}
        </ul>
      </nav>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
