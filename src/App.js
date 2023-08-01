import React, { Component } from 'react';
import { Header } from './Components/Header.js'
import Wheel from './wheel/wheel.js'
import ChoiceInput from './TextInput/TextInput.js';


export default class App extends Component {
    static displayName = 'SPIN THE WHEEL!!!';

    render() {
        return (
            <div>
                <Header></Header>
                <h1 id="tabelLabel" >SPIN THE WHEEL</h1>
                <p>This component SPINS THE WHEEL!!</p>
                <Wheel></Wheel>
                <ChoiceInput />
            </div>
        );
    }
}
