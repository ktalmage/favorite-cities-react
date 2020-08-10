import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { getStates } from './actions/states'

class App extends Component {
  componentDidMount(){
    this.props.getStates()
  }
  render(){
  const usstates =  this.props.usstates.map((usstate, i) => <li key={i}>{usstate.name}</li>)
    return (
      <div className="App">
        <h2>Favorite Cities</h2>
        <ul>
          {this.props.loading ? <h4>Loading...</h4> : usstates}
        </ul>
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
export default connect(mapStateToProps, { getStates })(App);
