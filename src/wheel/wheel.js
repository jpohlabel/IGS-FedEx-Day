import WheelComponent from './wheel-component.js'

const segments = [
    'lunch with scott',
    '$20,000 bonus',
    '10 weeks PTO',
    'promoted to CEO',
    'personal office',
    'YOU ARE FIRED'
]

const onFinished = (winner) => {
    console.log(winner)
}

export const Wheel = () => {
    return (
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
    )
}

export default Wheel
