import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    user: userReducer,
})

const store = createStore(rootReducer, composeWithDevTools())
// const store = createStore(rootReducer)

export default store
