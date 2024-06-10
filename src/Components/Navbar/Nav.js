// src/Navbar.js
import React, { useState } from 'react';
import './nav.css'


const Nav = () => {
  const [activeTitle, setActiveTitle] = useState(null);

  const titles = [
    { title: 'Why Spring', children: ['Overview', 'Microservices', 'Reactive', 'Event-Driven', 'Cloud', 'Web Applications', 'Serverless', 'Batch'] },
    { title: 'Learn', children: ['Overview', 'Quickstart', 'Guides', 'Blog'] },
    { title: 'Projects', children: ['Overview', 'Spring Boot', 'Spring Framework','Spring Cloud', 'Spring Cloud Data Flow', 'Spring Data','Spring Integration', 'Spring Batch', 'Spring Security','View All Projects'] },
    { title: 'Academy', children: ['Courses', 'Get Certified'] },
    { title: 'Solutions', children: ['Overview', 'Tanzu Spring', 'Spring Consulting','Spring Academy for Teams', 'Security Advisories'] },
    { title: 'Community', children: ['Overview', 'Events', 'Team'] },
  ];

  return (
    <nav className="nav">
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
                  {child}
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
