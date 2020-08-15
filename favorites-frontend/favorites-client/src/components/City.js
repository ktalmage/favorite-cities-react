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
                <li>{city.attributes.state.name}</li> 
                <li>{city.attributes.name}</li> 
                <li>{city.attributes.zipcode}</li>
                <li>{city.attributes.title}</li>
                <li>{city.attributes.description}</li>
                    <button id={city.id} onClick={this.handleOnClick}>Delete</button>
                    
                </div>
            </div>
        )
    }
}

export default City 