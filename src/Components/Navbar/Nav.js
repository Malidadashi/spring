// src/Navbar.js
import React, { Children, useState } from 'react';
import './nav.css'
import { Link } from "react-router-dom"


const Nav = () => {
  const [activeTitle, setActiveTitle] = useState(null);

  const titles = [
    {

      title: 'Why Spring',
      link: './Why Spring'
      , children: [{
        name: 'Overview',
        link: "/Overview"
      }, {
        name: 'Microservices',
        link: '/Microservices'
      },
      {
        name: "Reactive",
        link: "/Reactive"
      },
      {
        name: "Event-Driven",
        link: "/Event-Driven"
      },
      {
        name: "Cloud",
        link: "/Cloud"
      },
      {
        name: "Web Applications",
        link: "/Web Applications"
      },
      {
        name: "Serverless",
        link: "/Serverless"
      },
      {
        name: "Batch",
        link: "/Batch"
      }
      ],
      title: 'Learn',
      link: './learn'
      , children: [{
        name: 'Overview',
        link: "/Overview"
      },
      {
        name: 'Quickstart',
        link: '/Quickstart'
      },
      {
        name: 'Guides',
        link: '/Guides'
      },
      {
        name: 'Blog',
        link: '/Blog'
      },
      ],

      title: 'Projects',
      link: './Projects',
      children: [{
        name: 'Spring Boot',
        link: "/Spring Boot"
      },
      {
        name: 'View All Projects',
        link: "/View All Projects"
      },
      {
        name: 'Spring Boot',
        link: "/Spring Boot"
      },
      {
        name: 'Spring Framework',
        link: "/Spring Framework"
      },
      {
        name: 'Spring Cloud',
        link: "/Spring Cloud"
      },
      {
        name: 'Spring Cloud Data Flow',
        link: "/Spring Cloud Data Flow"
      },
      {
        name: 'Spring Security',
        link: "/Spring Security"
      }]
      // title: '',
      // link: './'
      // , children: [{
      //   name: 'Spring Boot',
      //   link: "/Spring Boot"
      // }]



    }]


  //  'Microservices', 'Reactive', 'Event-Driven', 'Cloud', 'Web Applications', 'Serverless', 'Batch']
  // { title: 'Learn', children: ['Overview', 'Quickstart', 'Guides', 'Blog'] },
  // { title: 'Projects', children: ['Overview', 'Spring Boot', 'Spring Framework', 'Spring Cloud', 'Spring Cloud Data Flow', 'Spring Data', 'Spring Integration', 'Spring Batch', 'Spring Security', 'View All Projects'] },
  // { title: 'Academy', children: ['Courses', 'Get Certified'] },
  // { title: 'Solutions', children: ['Overview', 'Tanzu Spring', 'Spring Consulting', 'Spring Academy for Teams', 'Security Advisories'] },
  // { title: 'Community', children: ['Overview', 'Events', 'Team'] },


  return (
    <nav className="navbar">
      {titles.map((item, index) => (
        <div
          key={index}
          className="navbar-item"
          onMouseEnter={() => setActiveTitle(index)}
          onMouseLeave={() => setActiveTitle(null)}
        >
          {item.title}
          {activeTitle === index && (
            <div className="navbar-dropdown">
              {item.children.map((child, childIndex) => (
                <div key={childIndex} className="navbar-dropdown-item">
                  <a href={child.link} >{child.name}</a>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Nav;
