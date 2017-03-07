import React, { Component } from 'react';
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      title: 'Welcome!'
    }
    setInterval(() => {
      this.setState({ count: ++this.state.count })
    }, 1000)
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  changeHandler(title) {
    this.setState({ title })
  }
  render() {

    return (
      <div className="App">
        <Header title={this.state.title} changeHandler={this.changeHandler.bind(this)} />
        <div className="App-intro">
          <h2>Counter: {this.state.count} </h2>
          <input value={this.state.title}
            onChange={this.onChangeTitle.bind(this)} type="text" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
