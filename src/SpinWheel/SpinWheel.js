import React, { useState, useRef } from 'react';
import './SpinWheel.css'; // Create a CSS file for styling the wheel

const SpinWheel = ({ items }) => {
    const [spinning, setSpinning] = useState(false);
    const wheelRef = useRef();

    const spinWheel = () => {
        if (!spinning) {
            const degrees = 3600 + Math.floor(Math.random() * 360); // Number of degrees to spin (at least 10 full rotations)
            setSpinning(true);

            wheelRef.current.style.transition = 'transform 5s ease-out';
            wheelRef.current.style.transform = `rotate(${degrees}deg)`;

            setTimeout(() => {
                const resultIndex = Math.floor((360 - (degrees % 360)) / (360 / items.length));
                alert('You won: ' + items[resultIndex]); // You can show the result in a modal or any other way you prefer
                setSpinning(false);
            }, 5000); // Adjust the time to match the animation duration (5 seconds in this example)
        }
    };

    return (
        <div className="spin-wheel-container">
            <div ref={wheelRef} className={`spin-wheel ${spinning ? 'spinning' : ''}`}>
                {items.map((item, index) => (
                    <div key={index} className="wheel-item">
                        {item}
                    </div>
                ))}
            </div>
            <button onClick={spinWheel} disabled={spinning}>
                Spin the Wheel
            </button>
        </div>
    );
};

export default SpinWheel;
