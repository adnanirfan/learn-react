import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

function mapStateToProps(switchStatus) {
  console.log('>>>>>', switchStatus)
  return {
    counter: switchStatus,
    hello: 'World'
  }
}

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Counter: {this.props.counter.toString()}
          <br />

          <button onClick={() => store.dispatch({ type: 'SwitchFalse' })}>SwitchFalse</button>
          <button onClick={() => store.dispatch({ type: 'SwitchTrue' })}>SwitchTrue</button>
          <button onClick={() => this.props.dispatch({ type: 'Toggle' })}>Toggle</button>

        </p>
      </div>
    );
  }
}

// export default (App);
export default connect(mapStateToProps)(App);
