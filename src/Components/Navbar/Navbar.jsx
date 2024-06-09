import React from "react";
import DarkModeNavbar from "../Darkmode/DarkModeNavbar";
import "./navbar.css";
import spring from "../../assets/spring.png";
import initializr_card from "../../assets/initializr_card.jpg";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={initializr_card} width="180rem" height="100rem" />

      <NavbarItems />
      <DarkModeNavbar className="darkmode" />
    </div>
  );
};

export default Navbar;
