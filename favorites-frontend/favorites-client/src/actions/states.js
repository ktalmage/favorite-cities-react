export const getStates = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_STATES"})
        fetch('http://127.0.0.1:3001/states')
        .then(resp => resp.json())
        .then(usstates => {dispatch({type: "STATES_LOADED", payload: usstates})
        })
    }
}