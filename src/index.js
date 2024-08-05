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
import Overview from "./Components/Overview/Overview.jsx";
import AuthProvider from "./Components/AuthProvider.js";

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
      <Route path="/" element={<AuthProvider />} />

      <Route path="/*" element={<ErrorPage />} />
      <Route path="/springdo" element={<SpringdoContainer />} />
      <Route path="/levelup" element={<LevelUp />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/Why Spring" element={<Overview />} />

      <Route path="/overview" element={<Overview />} />
      <Route path="/microservices" element={<Overview />} />
      <Route path="/Reactive" element={<Overview />} />
      <Route path="/Event-Driven" element={<Overview />} />
      <Route path="/Cloud" element={<Overview />} />
      <Route path="/Web Applications" element={<Overview />} />
      <Route path="/Serverless" element={<Overview />} />
      <Route path="/Batch" element={<Overview />} />
      <Route path="/Learn" element={<Overview />} />
      <Route path="/Overview" element={<Overview />} />
      <Route path="/Quickstart" element={<Overview />} />
      <Route path="/Guides" element={<Overview />} />
      <Route path="/Blog" element={<Overview />} />
      <Route path="/Projects" element={<Overview />} />
      <Route path="/Spring Boot" element={<Overview />} />
      <Route path="/View All Projects" element={<Overview />} />
      <Route path="/Spring Boot" element={<Overview />} />
      <Route path="/Spring Framework" element={<Overview />} />
      <Route path="/Spring Cloud" element={<Overview />} />
      <Route path="/Spring Cloud Data Flow" element={<Overview />} />
      <Route path="/Spring Security" element={<Overview />} />
      {/* <route path="/" element={<Overview />} />
      <route path="/" element={<Overview />} />
      <route path="/" element={<Overview />} />
      <route path="/" element={<Overview />} /> */}
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
