import React, { Component } from 'react';
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  render() {
    setTimeout(() => {
      this.setState({ count: ++this.state.count })
    }, 1000)

    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <h2>Counter: {this.state.count} </h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
