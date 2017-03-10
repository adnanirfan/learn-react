import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

import './App.css';

class App extends Component {

  navigate() {
    console.log(this.props)
  }

  render() {

    return (
      <div>
        <Header />
        <div>
          
          <div>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
