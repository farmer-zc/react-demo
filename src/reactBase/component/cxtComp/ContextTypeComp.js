import React, { Component } from 'react'

class ContextTypeComp extends Component {
    
    componentDidMount () {
        console.log(this.context)
    }
    
    render() {
        return (
            <div style={{backgroundColor: 'rgb(225,225,225)', padding: '10px'}}>
                我是利用contextType来获取数据的：{this.context.val}<br/>
                <button onClick={() => this.context.changeVal('我是子组件ContextType改变的ctx')}>changeVal</button>
            </div>
        )
    }
}

export default ContextTypeComp

