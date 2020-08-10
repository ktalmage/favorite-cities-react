//combine reducers in here
import { combineReducers } from 'redux'
import stateReducer from './stateReducer'

const rootReducer = combineReducers({
    stateReducer
})

export default rootReducer
