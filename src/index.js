import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
import ErrorPage from "./Components/Errorpage/Errorpage.jsx";
import SpringdoContainer from "./Components/SpringDo/SpringdoContainer.jsx";
import LevelUp from "./Components/LevelUp/LevelUp.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<App />} />
  //     <Route path='./*' element={<ErrorPage />} />
  //     <Route path='./footer' element={<Footer/>}/>
  //   </Routes>
  // </BrowserRouter>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/springdo" element={<SpringdoContainer />} />
      <Route path="/levelup" element={<LevelUp />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
