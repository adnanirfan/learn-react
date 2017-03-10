import React, { Component } from 'react';

import { Router, Route, browserHistory, IndexRoute} from 'react-router';

// import App from './components/App/App';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import App from './components/App/App';
import Repos from './components/Repos/Repos';
import Repo from './components/Repo/Repo';
import About from './components/About/About';


class RouteComponent extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={About} />
                    <Route path="/repos" component={Repos} >
                        <Route path="/repo/:repo" component={Repo} />
                    </Route>
                    <Route path="/about" component={About} />
                </Route>
            </Router>
        )
    }
}

export default RouteComponent;