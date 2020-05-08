import React from 'react'
import { Provider } from 'react-redux'
import store from './store/index'

import Count from './index'

function App () {
    return (
        <Provider store={store}>
            <Count></Count>
        </Provider>
    )
}

export default App;