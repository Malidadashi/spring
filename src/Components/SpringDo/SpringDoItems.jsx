import React from "react";
import "../SpringDo/springdoitems.css";

const SpringDoItems = ({ title, image, description }) => {
  return (
    <div className="item">
      <h3>{title}</h3>
      <img src={image} alt="iconpicture" />
      <p>{description}</p>
    </div>
  );
};

export default SpringDoItems;
