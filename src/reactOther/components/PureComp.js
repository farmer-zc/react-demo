import React from 'react'

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {number: 0}
    }
    add = () => {
        this.setState({
            number: 0
        })
    }

    componentDidUpdate () {
        console.log('我是Component创建的组件，我更新了')
    }

    render() { 
        return (
            <div>
                <span>{this.state.number}</span>
                <button onClick={this.add}>setState触发更新</button>
            </div>
        );
    }
  }
