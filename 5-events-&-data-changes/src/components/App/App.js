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
    /*
     * setInterval for Counter
     */
    setInterval(() => {
      // this.setState({ count: ++this.state.count })
    }, 1000)
  }

  /*
   * onChange listner on Input
   */
  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  /*
   * changeHandler as a props
   */
  changeHandler(title) {
    this.setState({ title })
  }

  render() {

    return (
      <div className="App">
        <Header title={this.state.title} changeHandler={this.changeHandler.bind(this)} />
        
        <div className="App-intro">
          
          <h2>Counter: {this.state.count} </h2>
          
          <input value={this.state.title} type="text"
            onChange={this.onChangeTitle.bind(this)} />
        
        </div>

        <Footer />
      </div>
    );
  }
  

  _log(methodName, args) {
    console.log(methodName, args);
  }
  componentWillUpdate() { 
    this._log('componentWillUpdate 1', arguments);
  }
  componentDidUpdate() {
    this._log('componentDidUpdate 2', arguments);
  }
  componentWillMount() {
    this._log('componentWillMount 3', arguments);
  }
  componentDidMount() {
    this._log('componentDidMount 4', arguments);
  }
  componentWillUnmount() {
    this._log('componentWillUnmount 5', arguments);
  }
}

export default App;
