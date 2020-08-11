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
        case "ADDING_STATE":
            return {
                ...state,
                loading: true
            }
            case "STATE_ADDED":
                return {
                    ...state,
                    usstates: [...state.usstates, action.payload.data],
                    loading: false
            }

            case "DELETING_STATE":
                return {
                    ...state,
                    loading: true
                }

            case "STATE_DELETED": 
                return {
                    ...state,
                    usstates: [...state.usstates.filter(usstate => `${usstate.id}` !== action.payload.data)]
                }
        default: 
            return state
    }
}