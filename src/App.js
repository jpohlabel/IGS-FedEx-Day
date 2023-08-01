import React, { Component } from 'react';
import Wheel from './wheel/wheel.js'

export default class App extends Component {
    static displayName = 'SPIN THE WHEEL!!!';

    render() {
        return (
            <div>
                <h1 id="tabelLabel" >SPIN THE WHEEL</h1>
                <p>This component SPINS THE WHEEL!!</p>
                <Wheel></Wheel>
            </div>
        );
    }
}
