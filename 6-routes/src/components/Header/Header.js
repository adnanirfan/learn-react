import React, { Component } from 'react';
import logo from './../../logo.svg';
import { Link } from 'react-router';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="App-header">
                <h2>
                    React Router Demo
                    <br />
                    <Link to="/about"><button>About</button></Link>
                    <Link to="/repos"><button>Repos</button></Link>
                </h2>

            </div>
        )
    }
}

export default Header;