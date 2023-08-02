// Confetti.js
import React, { useState } from 'react';
import Confetti from 'react-confetti';

export default function MyConfetti() {
    const [isVisible, setIsVisible] = useState(false);

    const handleFire = () => {
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 5000);
    };



    return (
        <>
            <button onClick={handleFire}>Fire</button>
            {isVisible && <Confetti />}
        </>
    );
}
