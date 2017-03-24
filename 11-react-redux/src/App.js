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

function mapDispatchToProps(dispatch) {

  return {
    switchTrue: () => dispatch({ type: 'SwitchTrue' }),
    switchFalse: () => dispatch({ type: 'SwitchFalse' }),
    toggle: function () {
      console.log('dispatching ...')
      dispatch({ type: 'Toggle' })
    }
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

          {this.props.counter && <button onClick={this.props.switchFalse}>SwitchFalse</button>}
          <br />
          {!this.props.counter && <button onClick={this.props.switchTrue}>SwitchTrue</button>}
          <br />
          <button onClick={this.props.toggle}>Toggle</button>

        </p>
      </div>
    );
  }
}

// export default (App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
