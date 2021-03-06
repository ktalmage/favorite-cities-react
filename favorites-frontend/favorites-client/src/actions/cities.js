const CITY_URL = 'http://127.0.0.1:3001/cities'

export const getCities = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_CITIES"})
        fetch(CITY_URL)
        .then(resp => resp.json())
        .then(cities => {dispatch({type: "CITIES_LOADED", payload: cities})
        
        })
    }
}
    export const addCity = (city) => {
        console.log('b')
        return (dispatch) => {
            console.log('c')
            dispatch({type: "ADDING_CITY"})
            fetch(CITY_URL,{
                method: 'POST',
                body: JSON.stringify(city),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp=> resp.json())
            .then(city => {
                console.log('d')
                dispatch({type: "CITY_ADDED", payload: city})
            })
            console.log('e')
        }
        
    }

    export const deleteCity = (id) => {
        return (dispatch) => {
            dispatch({ type: "DELETING_CITY"})
            fetch(`${CITY_URL}/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then(() => dispatch({ type: "CITY_DELETED", payload: id}))
        }
    }
 
    