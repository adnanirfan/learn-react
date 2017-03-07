import React, { Component } from 'react';
import logo from './../../logo.svg';
import './Header.css';

class Header extends Component {

    changeHandler(e) {
        this.props.changeHandler(e.target.value);
    }

    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{this.props.title}</h2>
                <hr />
                <input value={this.props.title} onChange={this.changeHandler.bind(this)}/>
            </div>
        )
    }
}

export default Header;