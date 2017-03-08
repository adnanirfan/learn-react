import React, { Component } from 'react';
import logo from './../../logo.svg';
import './Header.css';

class Header extends Component {

    /*
     * onChange listner on Input
     */
    changeHandler(e) {
        this.props.changeHandler(e.target.value);
    }

    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <br />
                <input value={this.props.title} onChange={this.changeHandler.bind(this)}/>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default Header;