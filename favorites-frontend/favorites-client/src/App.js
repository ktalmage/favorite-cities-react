import React, { Component } from 'react';
// import { connect } from 'react-redux'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './containers/Home'
import Navigation from './components/Navigation'
import City from './components/City'
import Cities from './components/Cities'
import 'bootstrap/dist/css/bootstrap.min.css';
import StateList from './components/StateList'

class App extends Component {
  
render(){
  
  return (
      <Router>
        <Navigation/>
      <div className="App">
       <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/cities' component={Cities}/>
          <Route exact path='/cities/:id' component={City}/>
          <Route exact path='/states' component={StateList}/>
          <Route exact path='/states/:id'  component={StateList}/>
          <Route/>
       </Switch>
      </div>
      </Router>
      );
    }
  }
  


export default App;
