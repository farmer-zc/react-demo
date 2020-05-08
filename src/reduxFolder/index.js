import React, { Component } from 'react';
import store from './store'

class Index extends Component {

    state = {
        value: 1
    }

    render() {
        return (
            <div>
                <p>count: { store.getState().count}</p>
                <input value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
                <button onClick={() => store.dispatch({type: 'ADD', payload: this.state.value})}>加一</button>
                <button onClick={() => store.dispatch({type: 'SUB', payload: this.state.value})}>减一</button>
            </div>
        );
    }
}

export default Index;