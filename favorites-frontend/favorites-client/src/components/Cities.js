import React, { Component } from 'react'
import CityContainer from '../containers/CityContainer'
import CityFormat from './About'
import City from './City'
import { deleteCity } from '../actions/cities';


 class Cities extends Component {
    render() {
        
        return (
            <div>
                <h2>My Travel Descriptions</h2>
                    <CityFormat/>
                  
            </div>
        )
    }
}

export default Cities