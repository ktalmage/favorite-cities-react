import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { getStates } from './actions/states'
import { getCities } from './actions/cities'
import StateForm from './containers/StateForm'
import CityForm from './containers/CityForm'
import Home from './containers/Home'
import Navigation from './components/Navigation'

class App extends Component {
  

  handleClick = (event) => {
    this.props.deleteState(event.target.id)
  }
  render(){
  
  
  
    return (
      <Router>
        <Navigation/>
      <div className="App">
      
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/containers' component={CityForm}/>
          <Route/>
       </Switch>
        
        </div>
      </Router>
      
      );
    }
  }
  


export default connect(null, { getStates, getCities })(App);
