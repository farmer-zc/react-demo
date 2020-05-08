import React from 'react'
import { Provider } from 'react-redux'
import Count from './index'
import store from './store/index'

export default function App() {
    return (
        <div>
            <Provider store={store}>
                <Count />
            </Provider>
        </div>
    )
}
