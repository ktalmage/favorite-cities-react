import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { getStates } from './actions/states'
import { getCities } from './actions/cities'
// import StateForm from './containers/StateForm'
import CityForm from './containers/CityForm'
import Home from './containers/Home'
import Navigation from './components/Navigation'

class App extends Component {
  componentDidMount(){
    this.props.getStates()
  }

  handleClick = (event) => {
    this.props.deleteState(event.target.id)
  }
  render(){
  
  const usstates =  this.props.usstates.map((usstate, i) => 
  <option key={i}>{usstate.attributes.name}</option>)
  
    return (
      
      <Router>
        <Navigation>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/categories' component={CityForm}/>
          <Route/>
       
        {this.props.loading ? <h4>Loading...</h4> : 
          <select>{usstates}</select>}
          <CityForm/>
          <h2>Cities I've Visited</h2>
        </Switch>
        </div>
        </Navigation>
      </Router>
      
      );
    }
  }
  

const mapStateToProps = state => {
  return{
    usstates: state.stateReducer.usstates,
    loading: state.stateReducer.loading
  }
}
export default connect(mapStateToProps, { getStates, getCities })(App);
