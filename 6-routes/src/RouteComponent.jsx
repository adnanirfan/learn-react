import React, { Component } from 'react';

import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';

import App from './components/App/App';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


class RouteComponent extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <div style={{
                    padding: '10px',
                    width: '40%',
                    background: '#f0f0f0'
                }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><Link to="/">App</Link></li>
                        <li><Link to="/Header">Header</Link></li>
                        <li><Link to="/Footer">Footer</Link></li>
                    </ul>
                    <h1>YEAH!!</h1>
                    <Route path="/">
                        <IndexRoute component={App} />
                        <Route path="/Header" component={Header} />
                        <Route path="/Footer" component={Footer} />

                    </Route>
                </div>
            </Router>
        )
    }
}

export default RouteComponent;