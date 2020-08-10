export default (state = { states: [], loading: false}, action) => {
    switch(action.type) {
        case "LOADING_STATES": 
            return {
                ...state,
                loading: true
            }
        default: 
        return state
    }
}