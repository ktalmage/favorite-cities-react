import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addState } from '../actions/states'

 class StateContainer extends Component {
     state = {
        usstate: {
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
        const usstate = {name: this.state.name}
        this.props.addState(usstate)
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

export default connect(null, { addState })(StateContainer)