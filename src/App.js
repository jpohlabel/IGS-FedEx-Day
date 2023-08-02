/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Header } from './Components/Header.js'
import Wheel from './wheel/wheel.js'

export default class App extends Component {
    static displayName = 'IGS WHEEL OF ENERGY';
    render() {
        return (
            <div align='center'>
                <Header></Header>
                <h1 id="tabelLabel" >IGS WHEEL OF ENERGY</h1>
                <p>SPIN!! THAT!! WHEEL!!!!!</p>
                <Wheel></Wheel>
            </div>
        );
    }
}
