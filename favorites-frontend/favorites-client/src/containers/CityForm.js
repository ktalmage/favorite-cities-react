import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStates } from '../actions/states'
import { addCity } from '../actions/cities'
import { getCities } from '../actions/cities'



 class CityForm extends Component {
     state = {
        city: {
            name: ""
        },
        loading: false
     }

     handleChange = event => {
        this.setState({
            name: event.target.value
        })
     }

     handleSubmit = event => {
        event.preventDefault()
        const city = {name: this.state.name}
        this.props.addCity(city)
        this.setState({
            name: "",
            loading: false
        })
     }
     componentDidMount(){
        this.props.getCities()
      }

    render() {
        const usstates =  this.props.usstates.map((usstate, i) => 
        <option key={i}>{usstate.attributes.name}</option>)
        return (
           <div>
              <form onSubmit={this.handleSubmit}>
                  
                {this.props.loading ? <h4>Loading...</h4> : 
                <select>{usstates}</select>}
                    <input type="text" value={this.state.cities.name}
                    onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
      usstates: state.stateReducer.usstates,
      loading: state.stateReducer.loading
    }
  }

export default connect(mapStateToProps, { addCity, getStates, getCities })(CityForm)
