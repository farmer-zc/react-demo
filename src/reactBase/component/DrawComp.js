import React, { Component } from 'react'

export default class DrawComp extends Component {
    state = {
        list: [
            {id:1, name: 'javascript'},
            {id:2, name: 'react'},
            {id:3, name: 'vue'}
        ],
        isShow: true,
        showBtn: true
    }
    
    render() {

        // if else 只能在外面定义
        let button
        if(this.state.showBtn) {
            button = <button onClick={() => this.setState({isShow: !this.state.isShow})}>切换isShow</button>
        }
        
        return (
            <div style={{backgroundColor: 'rgb(217, 217, 217)', padding: '10px', overflow: 'hidden'}}>
                <div style={{float: 'left', marginRight: '50px'}}>
                    <p>列表渲染  map </p>
                    <ul>
                        {
                            this.state.list.map(item => (<li key={item.id}> {item.id}: {item.name}</li>))
                        }
                    </ul>
                </div>
                <div style={{ float: "left"}}>
                    <p>条件渲染 &&  三目运算符</p>
                    {button}
                    {this.state.isShow && <p>我是运算符&&条件 isShow为true时显示的P标签</p>}
                    {this.state.isShow ? <div>isShow为false</div> : <div>isShow为True</div>}
                </div>
            </div>
        )
    }
}
