import React, { Component } from 'react'


export default class City extends Component {
    citiesList = () => {
        
        return this.props.cities.map(city => <li key={city.id} name={city.name}></li>)
        
    }
    render() {
        return (
            <div>
                {this.citiesList()}
            </div>
        )
    }
}
