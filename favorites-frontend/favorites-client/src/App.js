import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component() {
  render(){
    return (
      <div className="App">
        <h2>Favorite Cities</h2>
      </div>
      );
    }
  }
  


export default connect()(App);
