import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

 class City extends Component {

    handleOnClick = (event) => {
       
       this.props.deleteCity(event.target.id)
      }

    render() {
        
        const { city } = this.props
        return (
            
            <div>
                <Card border="primary" style={{ width: 'auto' }} className="text-center">
                    <Card.Body>
                        <Card.Title><strong>State Name</strong></Card.Title>
                        <Card.Text><li>{city.attributes.state.name}</li><Card.Text/>
                        <Card.Title><strong>City Name</strong></Card.Title>
                        <Card.Text><li>{city.attributes.name}</li></Card.Text>
                        <Card.Title><strong>Zip Code</strong></Card.Title>
                        <Card.Text><li>{city.attributes.zipcode}</li></Card.Text>
                        <Card.Title><strong>Title</strong></Card.Title>
                        <Card.Text><li>{city.attributes.title}</li></Card.Text>
                        <Card.Title><strong>Description</strong></Card.Title>
                        <Card.Text><li>{city.attributes.description}</li></Card.Text>
                        <Button variant="primary" id={city.id} onClick={this.handleOnClick}>Delete</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>    
            </div>
           
        )
    }
}

export default City 