import { FaGraduationCap } from "react-icons/fa";
import { BsBookmark, BsCurrencyDollar } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { RiFileChartLine } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";

export const homeListItems = [
  {
    name: "Students",
    count: "243",
    icon: (
      <FaGraduationCap size={38} style={{ color: "#74C1ED", width: "48px" }} />
    ),
    style: "student",
  },
  {
    name: "Course",
    count: "13",
    icon: <BsBookmark size={35} style={{ color: "#EE95C5", width: "28px" }} />,
    style: "course",
  },
  {
    name: "Payment",
    count: "556,000",
    symbol: "₺",
    icon: (
      <BsCurrencyDollar
        size={40}
        style={{
          border: "2px solid #F6C762",
          color: "#F6C762",
          width: "35px",
        }}
      />
    ),
    style: "payment",
  },
  {
    name: "Users",
    count: "3",
    icon: <FaRegUser size={34} style={{ color: "#fff" }} />,
    style: "users",
  },
];

export const sidebarListItems = [
  {
    name: "Home",
    path: "",
    icon: <AiOutlineHome size={20} />,
  },
  {
    name: "Course",
    path: "course",
    icon: <BsBookmark size={20} />,
  },
  {
    name: "Students",
    path: "students",
    icon: <FaGraduationCap size={20} />,
  },
  {
    name: "Payment",
    path: "payment",
    icon: <BsCurrencyDollar size={20} style={{ border: "1px solid black" }} />,
  },
  {
    name: "Report",
    path: "report",
    icon: <RiFileChartLine size={20} />,
  },
  {
    name: "Settings",
    path: "settings",
    icon: <GiSettingsKnobs size={20} style={{ border: "1px solid black" }} />,
  },
];
