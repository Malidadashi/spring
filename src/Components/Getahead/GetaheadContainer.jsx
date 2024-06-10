import React from "react";
import { GetaheadItems } from "./GetaheadItems";
import "./getaheadcontainer.css";

const Items = [
  {
    subject: "Get ahead",
    text: "VMware offers training and certification to turbo-charge your progress.",
    learnorview: "learn more",
  },
  {
    subject: "Get support",
    text: "Tanzu Spring offers support and binaries for OpenJDK™, Spring, and Apache Tomcat® in one simple subscription.",
    learnorview: "learn more",
  },
  {
    subject: "Upcoming events",
    text: "Check out all the upcoming events in the Spring community.",
    learnorview: "view all",
  },
];

const GetaheadContainer = () => {
  return (
    <div className="container">
      {Items.map((item, index) => (
        <GetaheadItems
          key={index}
          title={item.subject}
          description={item.text}
          more={item.learnorview}
        />
      ))}
    </div>
  );
};

export default GetaheadContainer;
