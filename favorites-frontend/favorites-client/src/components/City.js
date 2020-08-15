import React, { Component } from 'react'


 class City extends Component {

    handleOnClick = (event) => {
       
       this.props.deleteCity(event.target.id)
      }

    render() {
        
        const { city } = this.props
        return (
            <div>
                <div className="card" >
                <strong>State Name</strong><li>{city.attributes.state.name}</li> 
                <strong>City Name</strong><li>{city.attributes.name}</li> 
                <strong>Zip Code</strong><li>{city.attributes.zipcode}</li>
                <strong>Title</strong><li>{city.attributes.title}</li>
                <strong>Description</strong><li>{city.attributes.description}</li>
                    <button id={city.id} onClick={this.handleOnClick}>Delete</button>
                    
                </div>
            </div>
        )
    }
}

export default City 