import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStates } from '../actions/states'

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

    //  componentDidMount(){
    //      console.log(this.props)
    //      this.getStates()
    //  }

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
        
        const states = this.props.usstates.map((usstate, i) => <li key={i}>{usstate.attributes.name}</li>)
        return (
            <div>
               
                {states}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        usstates: state.stateReducer.usstates,
        statesloading: state.stateReducer.loading
    }
}

export default connect(mapStateToProps, { getStates })(StateContainer)