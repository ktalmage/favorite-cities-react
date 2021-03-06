import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStates } from '../actions/states'
import { addCity } from '../actions/cities'
import { getCities } from '../actions/cities'
import { deleteCity } from '../actions/cities'
import City from '../components/City'

class CityContainer extends Component {
     state = {
            name: "",
            zipcode: "",
            title: "",
            description: "",
            state_id: null,
            search: "",
        loading: false
     }

     handleChange = (event) => {
      
      if (event.target.type === "select-one"){
        let id= parseInt(event.target.options[event.target.options.selectedIndex].value)
        this.setState({
          state_id: id
        })
      }
       
      else {
        let name = event.target.name
        this.setState({
          [name]: event.target.value
        })
      }
    }

    

     handleSubmit = event => {
    
        event.preventDefault()
        
        const city = {
          name: this.state.name,
          zipcode: this.state.zipcode, 
          title: this.state.title,
          description: this.state.description,
          state_id: this.state.state_id
        }
        
        console.log('a')
        this.props.addCity(city)
        console.log('g')
        this.setState({
            name: "",
            zipcode: "",
            title: "",
            description: "",
            state_id: null,
            loading: false
        })
     }
     componentDidMount(){
       
        if (this.props.statesloading && this.props.citiesloading) {
          this.props.getStates()
          this.props.getCities()
         }
       
      }

     

    render() {
      
        const usstates =  this.props.usstates.map((usstate, i) => 
        <option  value={usstate.id} key={i}>{usstate.attributes.name}</option>)
        const citySearch = this.props.cities.filter( c => c.attributes.description.toLowerCase().includes(this.state.search.toLowerCase())).map((city, i) => {
        return <City key={i} city={city} deleteCity={this.props.deleteCity}/>})
       
        return (
           <div>
            
              <form onSubmit={this.handleSubmit}>
                <b>State Name:</b><br></br>
                  {this.props.loading ? <h4>Loading...</h4> : 
                 <select onChange={this.handleChange} name='state'> {usstates} </select>}<br></br>
                   <b>City Name:</b> <input type="text" onChange={this.handleChange} value={this.state.name} name="name"></input>
                   <b>Zipcode:</b><input type="text" onChange={this.handleChange} value={this.state.zipcode} name="zipcode"></input>
                   <b>Title:</b><input type="text" onChange={this.handleChange} value={this.state.title} name="title"></input>
                   <b>Description:</b><input type="text" onChange={this.handleChange} value={this.state.description} name="description"></input>
                  <input type="submit"></input>
                  </form>
                  <form>
                    <b>Search</b><input type="text" onChange={this.handleChange} value={this.state.search} name="search" ></input>
                  </form>
                  <br/>
                 {citySearch}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      cities: state.cityReducer.cities,
      citiesloading: state.cityReducer.loading,
      usstates: state.stateReducer.usstates,
      statesloading: state.stateReducer.loading
    }
  }

export default connect(mapStateToProps, {  getStates, addCity, getCities, deleteCity })(CityContainer)
