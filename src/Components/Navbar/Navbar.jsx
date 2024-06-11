import React from "react";
import { useState } from "react";
import DarkModeNavbar from "../Darkmode/DarkModeNavbar";
import "./navbar.css";
import spring from "../../assets/spring.png";
import initializr_card from "../../assets/initializr_card.jpg";
import NavbarItems from "./NavbarItems";
import Nav from "../../Components/Navbar/Nav.js";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="navbar">
      <img src={initializr_card} width="180rem" height="100rem" />
<Nav/>
      <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <header className="App-header">
          {isDarkMode ? (
            <FaSun
              onClick={handleToggle}
              size={28}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <FaMoon
              onClick={handleToggle}
              size={28}
              style={{ cursor: "pointer" }}
            />
          )}
        </header>
      </div>
    </div>
  );
};

export default Navbar;
