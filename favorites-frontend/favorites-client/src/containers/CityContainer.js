import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStates } from '../actions/states'
import { getCities } from '../actions/cities'
import { addCity } from '../actions/cities'

class CityContainer extends Component {
     state = {
        city: {
            name: "",
            zipcode: "",
            title: "",
            description: ""
        },
        loading: false
     }

     handleChange = event => {
         const { name, value} = event.target
        this.setState({
            [name]: value
        })
     }

     handleSubmit = event => {
        event.preventDefault()
        const city = {name: this.state.name, 
        zipcode: this.state.zipcode, title: this.state.title,description: this.state.description}
        this.props.addCity(city)
        this.setState({
            name: "",
            zipcode: "",
            title: "",
            description: "",
            loading: false
        })
     }
     componentDidMount(){
        this.props.getCities()
        this.props.getStates()
      }

    render() {
        
        const usstates =  this.props.usstates.map((usstate, i) => 
        <option key={i}>{usstate.attributes.name}</option>)
        return (
           <div>
              <form onSubmit={this.handleSubmit}>
                  
                {this.props.loading ? <h4>Loading...</h4> : 
                <select>{usstates}</select>}<br></br>
                   <b>City Name:</b> <input type="text" value={this.state.name}></input>
                   <b>Zipcode:</b><input type="text" value={this.state.zipcode}></input>
                   <b>Title:</b><input type="text" value={this.state.title}></input>
                   <b>Description:</b><input type="textarea" value={this.state.title}></input>
                    
                    <input  type="submit"></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
      usstates: state.stateReducer.usstates,
      statesloading: state.stateReducer.loading,
      cities: state.cityReducer.cities,
      citiesloading: state.cityReducer.loading
      
    }
  }

export default connect(mapStateToProps, { getCities, getStates, addCity})(CityContainer)
