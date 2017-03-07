import React, { Component } from 'react';
import logo from './../../logo.svg';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="App-header">
                
                <img src={logo} className="App-logo" alt="logo" />

                <h2> Name : {this.props.developer}</h2>

            </div>
        )
    }
}

export default Header;