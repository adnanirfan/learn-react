import React, { Component } from 'react';
import Header from './../Header/Header'
import Content from './../Content/Content'
import Footer from './../Footer/Footer'
import './App.css';

class App extends Component {

  state = {
    name: 'Adnan Irfan',
    count: 0
  }

  render() {
    setTimeout(() => {
      this.setState({count: ++this.state.count})
    }, 1000)
    return (
      <div className="App">
        <Header developer={this.state.name} />
        <Content count={this.state.count} />
        <Footer />
      </div>
    );
  }
}

export default App;
