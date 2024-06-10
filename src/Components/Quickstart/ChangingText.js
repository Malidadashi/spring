import React, { useState, useEffect } from 'react';

const ChangingText = () => {
    const texts = ["Modern","Productive","Simple","reactive"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [texts.length]);

    return (
        <div>
            <p>Spring make java <br/>{texts[currentTextIndex]}</p>
        </div>
    );
};

export default ChangingText;
