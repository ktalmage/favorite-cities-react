export default (state = { cities : [], loading: false}, action) => {
    switch(action.type) {
        case "LOADING_CITIES": 
            return {
                ...state,
                loading: true
            }
        case "CITIES_LOADED":
            console.log(action)
            return {
                ...state,
                cities: action.payload.data,
                loading: false
            }
        case "ADDING_CITY":
            return {
                ...state,
                loading: true
            }
            case "CITY_ADDED":
                return {
                    ...state,
                    usCITIES: [...state.cities, action.payload.data],
                    loading: false
            }

            case "DELETING_CITY":
                return {
                    ...state,
                    loading: true
                }

            case "CITY_DELETED": 
                return {
                    ...state,
                    cities: [...state.cities.filter(city => `${city.id}` !== action.payload.data)]
                }
        default: 
            return state
    }
}