export default (state = { usstates: [], loading: false}, action) => {
    switch(action.type) {
        case "LOADING_STATES": 
            return {
                ...state,
                loading: true
            }
        case "STATES_LOADED":
            debugger
            return {
                ...state,
                usstates: action.payload,
                loading: false
            }
        default: 
        return state
    }
}