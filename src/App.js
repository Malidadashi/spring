
import React, { useState } from 'react';
// import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Components/Errorpage/Errorpage";
import Footer from "./Components/Footer/Footer.jsx";
import Regestration from "./Components/Regestration/Regestration.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import DarkModeNavbar from "./Components/Darkmode/DarkModeNavbar.jsx";
import SpringdoContainer from "./Components/SpringDo/SpringdoContainer.jsx";
import LevelUp from "./Components/LevelUp/LevelUp.jsx";
import Survey from "./Components/Survey/Survey.jsx";
import Quickstart from "./Components/Quickstart/Quickstart.jsx";
import GetaheadContainer from "./Components/Getahead/GetaheadContainer.jsx";
import Overview from "./Components/Overview/Overview.jsx";
import ProductList from "./Components/FakeAPI/ProductList.js";
import CategoryList from "./Components/CategoryList.js";
import FoodList from "./Components/FoodList.js";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      <header className="container-header">
        <h1>Coffee Products</h1>
      </header>
      <ProductList />
      <CategoryList onCategoryClick={handleCategoryClick} />
      {selectedCategory && <FoodList categoryId={selectedCategory} />}

    </>
    // <>

    //   {/* <Regestration />
    //   <Navbar />
    //   <Quickstart />
    //   <GetaheadContainer/>
    //   <Survey />
    //   <Overview/>
    //   <LevelUp />
    //   <SpringdoContainer />
    //   <Footer /> */}
  );
};

export default App;
