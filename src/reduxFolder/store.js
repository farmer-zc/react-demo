import { createStore } from 'redux'

// 定义 state 仓库
const initState = {
    count: 0
}

// 编写 reducer 参数 state初始值，触发的action
const countReducer = (state = initState, action ) => {
    const { type, payload} = action;
    console.log(state)
    switch (type) {
        case 'ADD':
            return { count: (state.count + (payload-0))}
        case 'SUB':
            return { count: (state.count - payload)}
        default:
            return state
    }
}

// 创建数据仓库
const store = createStore(countReducer)

export default store;