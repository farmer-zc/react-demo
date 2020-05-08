import { createStore, applyMiddleware, combineReducers } from 'redux'
import countReducer from './count.reducer.js'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

// 创建saga的中间件
const sagaMiddleWare =  createSagaMiddleware()

const store = createStore(combineReducers({
    COUNT: countReducer
}), applyMiddleware(sagaMiddleWare))

// 启动saga
sagaMiddleWare.run(rootSaga)

export default store;