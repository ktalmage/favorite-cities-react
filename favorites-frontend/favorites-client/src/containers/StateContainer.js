import React from 'react'
import City from '../components/City'
import { connect } from 'react-redux'
import {deleteCity} from '../actions/cities'



 const State = ({  cities, name, deleteCity}) => {
    
    const cityList = cities.map((city, i) => {
        
        return <City key={i} city={city} deleteCity={deleteCity}/>})
      
    return (
        <div>
            <h1>{ name }</h1>
                {cityList}
        </div>
    )
    
}

const mapStateToProps = (state, props) => {
   
    const id = props.match.params.stateID
    
    const usstate = state.stateReducer.usstates[id - 1]
    let name
    if (usstate === undefined) {
        name = undefined
    }
    else {
        name = usstate.attributes.name
    }
   
    return {
        
        name: name,
        cities: state.cityReducer.cities.filter((c) => {
            // eslint-disable-next-line 
            return c.attributes.state.id == id
        })

    }
    
}


export default connect(mapStateToProps, {deleteCity} )(State)






