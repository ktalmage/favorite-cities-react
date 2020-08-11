import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addState } from '../actions/states'
import { addCity } from '../actions/cities'

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

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name}
                    onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default connect(null, { addState, addCity })(CityForm)
