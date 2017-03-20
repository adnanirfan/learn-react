import React, { Component } from 'react';
import logo from './../../logo.svg';
import './Header.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionList from 'material-ui/svg-icons/editor/format-list-bulleted';


class Header extends Component {

    render() {
        return (
            <AppBar
                title="Todo App"
                iconClassNameRight=""
            />
        )
    }
}

export default Header;