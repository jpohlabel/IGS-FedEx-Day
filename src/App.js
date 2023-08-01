import React, { Component } from 'react';
import SpinWheel from './SpinWheel/SpinWheel.js'

export default class App extends Component {
    static displayName = 'SPIN THE WHEEL!!!';

    render() {
        return (
            <div>
                <h1 id="tabelLabel" >SPIN THE WHEEL</h1>
                <p>This component SPINS THE WHEEL!!</p>
                <SpinWheel items={['a', 'b', 'c']} />
            </div>
        );
    }
}
