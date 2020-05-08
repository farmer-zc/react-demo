import { call, put, takeEvery} from 'redux-saga/effects'
// call 用于发送 api 请求
// put 用于 dispatch 对应的action
// takeEvery 用于监听每个 action

// 此处最好是外界引入
function apiModel (val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val)
        }, 2000)
    })
}

function* asyncAdd (action) {
    try {
        const result = yield call(apiModel, action.val);
        yield put({type: 'ADD', val: result})
    } catch(error) {
        // 此处可以触发 接口失败的action
    }
}

function* rootSaga () {
    // 每个异步的 action 都要在这监听一下
    yield takeEvery("asyncAdd", asyncAdd)
}
export default rootSaga