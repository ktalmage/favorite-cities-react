import React, { Component } from 'react';
import './App.css';
import {  Route } from 'react-router-dom'
import Home from './containers/Home'
import Navigation from './components/Navigation'
import City from './components/City'
import Cities from './components/Cities'
import 'bootstrap/dist/css/bootstrap.min.css';
import StateList from './components/StateList'
import StateContainer from './containers/StateContainer'

class App extends Component {
  
render(){
  
  return (
     
      
      <div className="App">
       
       <Navigation/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/cities' component={Cities}/>
          <Route exact path='/cities/:id' component={City}/>
          <Route exact path='/states' component={StateList}/>
          <Route exact path='/states/:stateID'  component={StateContainer}/>
        </div>
      
      );
    }
  }
  


export default App;
