import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStates } from '../actions/states'
import { getCities } from '../actions/cities'
import { Link } from 'react-router-dom'


 class StateContainer extends Component {
     state = {
        usstate: {
            name: ""
        },
        loading: false
     }

     componentDidMount(){
        
        
        if (this.props.statesloading && this.props.citiesloading) {
            this.props.getStates()
            this.props.getCities()
           }
      }

    render() {
        
     const states = this.props.usstates.map((usstate,i) => <Link to={`/states/${usstate.id}`} key={i}><li>{usstate.attributes.name}</li></Link> )
   
        return (
            <div>
                {states} 
                
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        cities: state.cityReducer.cities,
        citiesloading: state.cityReducer.loading,
        usstates: state.stateReducer.usstates,
        statesloading: state.stateReducer.loading,
        
    }
}

export default connect(mapStateToProps, { getStates, getCities })(StateContainer)