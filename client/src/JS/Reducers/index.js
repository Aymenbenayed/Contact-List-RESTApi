import {combineReducers} from 'redux'

import contactReducer from './contactReducer'
import userReducer from './userReducer'
import showusersReducer from './showusersReducer'

const rootReducer = combineReducers({
    contactReducer, userReducer , showusersReducer
})

export default rootReducer