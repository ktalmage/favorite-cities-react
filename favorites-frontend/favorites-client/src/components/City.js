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
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title><strong>State Name</strong></Card.Title>
                        <Card.Text><li>{city.attributes.state.name}</li><Card.Text/>
                            <strong>City Name</strong><li>{city.attributes.name}</li> 
                            <strong>Zip Code</strong><li>{city.attributes.zipcode}</li>
                            <strong>Title</strong><li>{city.attributes.title}</li>
                            <strong>Description</strong><li>{city.attributes.description}</li>
                        <Button variant="primary" id={city.id} onClick={this.handleOnClick}>Delete</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>    
                
            </div>
           
        )
    }
}

export default City 