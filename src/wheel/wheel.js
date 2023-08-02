import WheelComponent from './wheel-component.js'
import React, { useState } from 'react';
import Confetti from 'react-confetti';

const segments = [
    'lunch with scott',
    '$20,000 bonus',
    '10 weeks PTO',
    'promoted to CEO',
    'personal office',
    'YOU ARE FIRED',
    '30% raise',
    '1 hr meditation',
]

export const Wheel = () => {
    const [confettiVisible, setConfettiVisible] = useState(false);
    var winSound = new Audio('/win.mp3')

    const onFinished = (winner) => {
        console.log(winner);
        winSound.play();
        setConfettiVisible(true);
        setTimeout(() => {
            setConfettiVisible(false);
        }, 5000);
    }

    return <>
        <WheelComponent
            segments={segments}
            onFinished={(winner) => onFinished(winner)}
            primaryColor='black'
            contrastColor='white'
            isOnlyOnce={false}
            size={450}
            upDuration={100}
            downDuration={200}
            fontFamily='Arial'
        />
        {confettiVisible && <Confetti />}
    </>
}

export default Wheel
