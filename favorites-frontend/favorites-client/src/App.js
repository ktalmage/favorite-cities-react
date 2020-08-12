import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { getStates } from './actions/states'
import { getCities } from './actions/cities'
import StateForm from './containers/StateForm'
import CityForm from './containers/CityForm'

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
      <div className="App">
        <h2>Favorite Cities</h2>
        {this.props.loading ? <h4>Loading...</h4> : 
          <select>{usstates}</select>}
          <CityForm/>
          <h2>Cities I've Visited</h2>
        
        </div>
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
