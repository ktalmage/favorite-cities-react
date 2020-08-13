import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStates } from '../actions/states'
import { addCity } from '../actions/cities'
import { getCities } from '../actions/cities'
import City from '../components/City'



class CityContainer extends Component {
     state = {
        city: {
            name: "",
            zipcode: "",
            title: "",
            description: "",
            state_id: ""
        },
        loading: false
     }

     handleChange = (event) => {
       let name = event.target.name
       let value = event.target.value
      
      this.setState({
          [name]: value
        })
        
     }

     handleSubmit = event => {
   
        event.preventDefault()
        
        const city = {
          name: this.state.city.name,
          zipcode: this.state.city.zipcode, 
          title: this.state.city.title,
          description: this.state.city.description,
          state_id: this.state.city.state_id
        }
        
        this.props.addCity(city)
        
        this.setState({
            name: "",
            zipcode: "",
            title: "",
            description: "",
            state_id: "",
            loading: false
        })
     }
     componentDidMount(){
        
        this.props.getStates()
        this.props.getCities()
      }

    render() {
      
        const usstates =  this.props.usstates.map((usstate, i) => 
        <option  key={i}>{usstate.attributes.name}</option>)
        return (
           <div>
             <City cities={this.props.cities.map((city,i) => <li key={i}>{city.attributes.name}</li>)}/>
              <form onSubmit={this.handleSubmit}>
                <b>State Name:</b><br></br>
                  {this.props.loading ? <h4>Loading...</h4> : 
                 <select onChange={this.handleChange} name='state_id'> {usstates} </select>}<br></br>
                   <b>City Name:</b> <input type="text" onChange={this.handleChange} value={this.state.name} name="name"></input>
                   <b>Zipcode:</b><input type="text" onChange={this.handleChange} value={this.state.zipcode} name="zipcode"></input>
                   <b>Title:</b><input type="text" onChange={this.handleChange} value={this.state.title} name="title"></input>
                   <b>Description:</b><input type="text" onChange={this.handleChange} value={this.state.description} name="description"></input>
                  <input type="submit"></input>
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

export default connect(mapStateToProps, {  getStates, getCities, addCity })(CityContainer)
