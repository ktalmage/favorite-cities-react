import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  componentDidMount(){
    
  }
  render(){
    const states = this.props.states.map((usstate, i) => <li key={i}>{usstate.name}</li>)
    return (
      <div className="App">
        <h2>Favorite Cities</h2>
        <ul>
          {this.props.loading ? <h4>Loading...</h4> : states}
        </ul>
      </div>
      );
    }
  }
  

const mapStateToProps = state => {
  return{
    states: state.stateReducer.states,
    loading: state.stateReducer.loading
  }
}
export default connect(mapStateToProps)(App);
