import React, { Component } from 'react'

// class组件内部有生命周期
export default class ClassComp extends Component {
    // 构造函数，props是父组件传递过来的值
    // super(props) 必须在第一句
    constructor(props) {
        super(props);       
        // state是组件内部维护的数据，
        // state中的数据不能直接改变，必须调用setState
        this.state = {
            name: 'react',
            count: 0,
            timer: null
        }
        this.add = this.add.bind(this)
    }

    componentDidMount() {
        // 则是组件加载完毕时候，可以调用ajax
        // setState 是异步的，所以在下面直接拿不到setState后的值
        this.setState({
            name: 'reactBase'
        })
        console.log(this.state.name); // react
    }

    // 方法必须在 constructor 中重新绑定一下 this, 或者使用箭头函数
    add () {
        // setState 也可以接收一个回调函数，参数就是上一个state的状态，以及此次的props
        this.setState((preState, props) => ({
            count: preState.count + 1
        }))
    }
    // 使用箭头函数
    sub () {
        this.setState((preState, props) => ({
            count: preState.count - 1
        }))
    }

    render() {
        return (
            <div style={{backgroundColor: 'rgb(217, 217, 217)', padding: '10px'}}>
                <h5>这是es6 class 组件</h5>
                <p>props: {this.props.val}</p>
                <div>特殊的props：{this.props.children}</div>
                <p>name: {this.state.name}</p>
                <p>count: {this.state.count}</p>
                <button onClick={this.add}>加法</button>&nbsp;&nbsp;<button onClick={() => this.sub()}>减法</button>
            </div>
        )
    }
}
