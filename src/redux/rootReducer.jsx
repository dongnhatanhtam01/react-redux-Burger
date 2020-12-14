import {combineReducers} from 'redux'
import {BurgerReducer} from './BurgerReducer'

// create general store
export const rootReducer = combineReducers({
    // combine all of reducer inside it
    BurgerReducer
})