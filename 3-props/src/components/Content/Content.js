import React, { Component } from 'react';
import './Content.css'

class Content extends Component {
    render() {
        return (
            <div className="App-intro">
                <h2>Content</h2>
                <p>Count: {this.props.count}</p>
            </div>
        )
    }
}

export default Content;