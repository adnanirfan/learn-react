import React, { Component } from 'react';
import Header from './../Header/Header'
import Content from './../Content/Content'
import Footer from './../Footer/Footer'
import './App.css';

class App extends Component {

  state = {
    name: 'Adnan Irfan',
    framework: [
      'AngularJS',
      'Angular 2'
    ],
    library: [
      'jQuery',
      'ReactJS'
    ],
    count: 0
  }

  render() {
    setTimeout(() => {
      this.setState({count: ++this.state.count})
    }, 1000)
    return (
      <div className="App">
        <Header developer={this.state.name} />
        <Content framework={this.state.framework}
          count={this.state.count}
          library={this.state.library} />
        <Footer />
      </div>
    );
  }
}

export default App;
