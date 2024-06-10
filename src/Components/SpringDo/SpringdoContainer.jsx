import React from "react";
import SpringDoItems from "./SpringDoItems";
import batch from "../../assets/batch.svg";

const items = [
  {
    title: "Box 1",
    Image: "../../assets/batch.svg",
    description: "This is box 1",
  },
  { title: "Box 2", Image: { batch }, description: "This is box 2" },
  { title: "Box 3", Image: "", description: "This is box 3" },
  { title: "Box 4", Image: "", description: "This is box 4" },
  { title: "Box 5", Image: "", description: "This is box 5" },
  { title: "Box 6", Image: "", description: "This is box 6" },
  { title: "Box 7", Image: "", description: "This is box 7" },
];
const SpringdoContainer = () => {
  return (
    <div className="container">
      {items.map((item, index) => (
        <SpringDoItems
          key={index}
          title={item.title}
          image={item.Image}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default SpringdoContainer;
