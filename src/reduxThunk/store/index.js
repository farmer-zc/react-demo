import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './count.reducer'


export default createStore(
    combineReducers({
        COUNT: countReducer
    }),
    applyMiddleware(thunk)
);
