import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Components/Errorpage/Errorpage";
import Footer from "./Components/Footer/Footer.jsx";
import Regestration from "./Components/Regestration/Regestration.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import DarkModeNavbar from "./Components/Darkmode/DarkModeNavbar.jsx";
import SpringdoContainer from "./Components/SpringDo/SpringdoContainer.jsx";
import LevelUp from "./Components/LevelUp/LevelUp.jsx";

const App = () => {
  return (
    <>
      <Regestration />
      <Navbar />
      <LevelUp />
      <SpringdoContainer />
      <Footer />
    </>
  );
};

export default App;
