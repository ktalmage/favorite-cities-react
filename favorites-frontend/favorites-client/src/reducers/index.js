//combine reducers in here
import { combineReducers } from 'redux'
import stateReducer from './stateReducer'
import cityReducer from './cityReducer'

const rootReducer = combineReducers({
    stateReducer, cityReducer
})

export default rootReducer
