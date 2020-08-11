export default (state = { usstates : [], loading: false}, action) => {
    switch(action.type) {
        case "LOADING_STATES": 
            return {
                ...state,
                loading: true
            }
        case "STATES_LOADED":
            console.log(action)
            return {
                ...state,
                usstates: action.payload.data,
                loading: false
            }
        default: 
        return state
    }
}