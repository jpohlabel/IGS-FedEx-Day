/* eslint-disable no-undef */
import React, { Component, useState } from 'react';
import { Header } from './Components/Header.js'
import Wheel from './wheel/wheel.js'
import ChoiceInput from './TextInput/TextInput.js';
import Confetti from './Confetti/Confetti.js';

/*
function PopConfetti() {
    showConfetti = useState(false);
    setShowConfetti = useState(false);

    handleStartConfetti = () => {
        setShowConfetti(true);

        // Optionally, you can set a timer to stop the confetti after a certain duration
        setTimeout(() => {
            setShowConfetti(false);
        }, 5000); // Stop the confetti after 5 seconds (adjust as needed)
    };
}
*/

export default class App extends Component {
    static displayName = 'IGS WHEEL OF ENERGY';
    render() {
        return (
            <div align='center'>
                <Header></Header>
                <h1 id="tabelLabel" >IGS WHEEL OF ENERGY</h1>
                <p>SPIN!! THAT!! WHEEL!!!!!</p>
                <Confetti />
                <Wheel></Wheel>
                <ChoiceInput />
            </div>
        );
    }
}
