import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

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
                    <Button variant="primary" id={city.id} onClick={this.handleOnClick}>Delete</Button>
                    
                </div>
            </div>
        )
    }
}

export default City 