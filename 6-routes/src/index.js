import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory,
  hashHistory, IndexRoute, Link } from 'react-router';

import App from './components/App/App';
import Repos from './components/Repos/Repos';
import About from './components/About/About';
// import RouteComponent from './RouteComponent';
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
       make them children of `App` 
      <Route path="/repos" component={Repos} handler={check()}/>
      <Route path="/about" component={About} handler={check()} />
    </Route>
  </Router>
),
  document.getElementById('root')
);
