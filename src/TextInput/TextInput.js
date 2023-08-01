// TextInput.js
import React, { useState } from 'react';
import './TextInput.css'; // Import the CSS file for styling

function ChoiceInput() {
    const [choices, setChoices] = useState(Array(10).fill(''));

    const handleChange = (event, index) => {
        const updatedChoices = [...choices];
        updatedChoices[index] = event.target.value;
        setChoices(updatedChoices);
    };

    return (
        <div className="choice-input-container">
            <h2>Enter Choices</h2>
            <div className="choices">
                {choices.map((choice, index) => (
                    <input
                        key={index}
                        type="text"
                        value={choice}
                        onChange={(event) => handleChange(event, index)}
                        placeholder={`Choice ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ChoiceInput;
