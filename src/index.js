import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// 1. redux部分, 包括下面监听state变化-------
//    import store from './reduxFolder/store'
//    import App from './reduxFolder/index';

// 2. react-redux 部分-----------
//    import App from './reactReduxFolder/App'

// 3. redux-thunk 部分-----------
//    import App from './reduxThunk/App'

// 4. redux-saga 部分------------
//    import App from './reduxSaga/App'

// 5. react-router 基本使用部分-----------
//    import App from './reactRouter/App'

// 6. 路由表配置部分-----------
//    import App from './routeConfig/App'

// 7. react 基础部分
import App from './reactBase/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

/*
// 1.1  redux 部分
//      redux 监听state变化
store.subscribe(
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
)
*/

serviceWorker.unregister();

