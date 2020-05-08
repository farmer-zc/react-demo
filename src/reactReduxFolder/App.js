import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Count from './index'

function App() {
  return (
    <Provider store={store}>
        <Count/>
    </Provider>
  );
}

export default App;
