import React, { useState } from 'react';
import './DarkModeNavbar.css';

function DarkModeNavbar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    };

    return (
        <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <label className="switch">
                <input type="checkbox" onChange={toggleDarkMode} />
                <span className="slider round"></span>
            </label>
        </nav>
    );
}

export default DarkModeNavbar;
