import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';

import './App.css';

class App extends Component {

  constructor() {
    super();
  }


  render() {

    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>

        {/* add this */}
        {this.props.children}

      </div>
    );
  }
}

export default App;
