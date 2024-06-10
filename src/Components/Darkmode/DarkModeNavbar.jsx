import React, { useState, useEffect } from 'react';
import './DarkModeNavbar.css'

function DarkModeNavbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark-mode">
      <header>
        <button onClick={toggleDarkMode}>
          {darkMode ? '' : ''}
        </button>
      </header>
      <main>
        {/* Your app content goes here */}
      </main>
    </div>
  );
}

export default DarkModeNavbar;
