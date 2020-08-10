export const getStates = () => {
    return dispatch => {
        dispatch({type: "LOADING_STATES"})
        return fetch('http://localhost:3000/states')
        .then(resp => resp.json())
        .then(states => dispatch({type: "STATES_LOADED", payload: states}))
    }
}