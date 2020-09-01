export default (state = { cities : [], loading: true}, action) => {
    switch(action.type) {
        case "LOADING_CITIES": 
        console.log(action)
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
            console.log(action)
            return {
                ...state,
                loading: true
            }
            case "CITY_ADDED":
                console.log(action)
                return {
                    ...state,
                    cities: [...state.cities, action.payload.data],
                    loading: false
            }

            case "DELETING_CITY":
                console.log(action)
                return {
                    ...state,
                    loading: true
                }

            case "CITY_DELETED":
                console.log(action)
                return {
                    ...state,
                    cities: [...state.cities.filter(city => `${city.id}` !== action.payload)]
                    
                }
            default: 
                return state
    }
}