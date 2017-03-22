import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        App {this.props.count}
        <br/>
        {this.props.hello}
      </div>
    );
  }
}

function mapStateToProps(stateCounter){
  return {
    count: stateCounter,
    hello: 'world'
  }
}
export default connect(mapStateToProps)(App);
