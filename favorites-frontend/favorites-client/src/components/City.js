import React, { Component } from 'react'

 class City extends Component {

    handleOnClick = (event) => {
       this.props.deleteCity(event.target.id)
      }

    render() {
        
        const { city } = this.props
        return (
            <div>
                <ul>
                    <li>{city.attributes.name}
                    <button id={city.id} onClick={this.handleOnClick}>Delete</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default City 