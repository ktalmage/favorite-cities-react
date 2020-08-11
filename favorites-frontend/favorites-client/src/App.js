import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { getStates, deleteState } from './actions/states'
import StateForm from './containers/StateForm'

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
  // <button id={usstate.id} onClick={this.handleClick}></button>
    return (
      <div className="App">
        <h2>Create State</h2>
          <StateForm/>
        <h2>Favorite Cities</h2>
        {this.props.loading ? <h4>Loading...</h4> : 
          <select>{usstates}</select>}
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
export default connect(mapStateToProps, { getStates, deleteState })(App);
