export const getStates = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_STATES"})
        fetch('http://127.0.0.1:3001/states')
        .then(resp => resp.json())
        .then(usstates => {dispatch({type: "STATES_LOADED", payload: usstates})
        
        })
    }
}
    export const addState = (usstate) => {
        return (dispatch) => {
            dispatch({type: "ADDING_STATE"})
            fetch('http://127.0.0.1:3001/states',{
                method: "POST",
                body: JSON.stringify(usstate),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp=> resp.json())
            .then(usstate => dispatch({type: "STATE_ADDED", payload: usstate}))
    }
}
 
    