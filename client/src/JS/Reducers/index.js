import {combineReducers} from 'redux'

import contactReducer from './contactReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    contactReducer, userReducer
})

export default rootReducer