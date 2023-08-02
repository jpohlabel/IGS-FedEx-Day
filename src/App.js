import React, { Component } from 'react';
import { Header } from './Components/Header.js'
import Wheel from './wheel/wheel.js'
import ChoiceInput from './TextInput/TextInput.js';


export default class App extends Component {
    static displayName = 'IGS WHEEL OF ENERGY';
    render() {
        return (
            <div align='center'>
                <Header></Header>
                <Wheel></Wheel>
                <ChoiceInput />
            </div>
        );
    }
}
