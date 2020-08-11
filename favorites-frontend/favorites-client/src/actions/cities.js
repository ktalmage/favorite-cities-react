export const getCities = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_CITIES"})
        fetch('http://127.0.0.1:3001/cities')
        .then(resp => resp.json())
        .then(cities => {dispatch({type: "CITYS_LOADED", payload: cities})
        
        })
    }
}
    export const addCity = (city) => {
        return (dispatch) => {
            dispatch({type: "ADDING_CITY"})
            fetch('http://127.0.0.1:3001/cities',{
                method: "POST",
                body: JSON.stringify(city),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp=> resp.json())
            .then(city => dispatch({type: "CITY_ADDED", payload: city}))
    }
}

    export const deleteCity = (id) => {
        return (dispatch) => {
            dispatch({ type: "DELETING_CITY"})
            fetch(`http://127.0.0.1:3001/cities/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then(() => dispatch({ type: "CITY_DELETED", payload: id}))
        }
    }
 
    