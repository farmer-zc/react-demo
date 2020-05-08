import React, { Component } from 'react'

export default class RefDemo extends Component {

    constructor(props) {
        super(props)
        // 使用React.createRef() 创建ref
        this.myRef = React.createRef();
        this.myTxt = null;
    }

    focusTextIpt () {
        // 我们可以通过current来访问dom
        console.log(this.myRef.current)
        this.myRef.current.focus();
    }
    getIptVal () {
        // 可以直接访问到dom
        console.log(this.myTxt)
        this.myTxt.focus()
    }

    render() {
        return (
            <div>
                <p>
                    <span>createRef 方式创建 ref：</span>
                    <input type="text" ref={this.myRef} />
                    <button onClick={() => this.focusTextIpt()}>获取焦点并打印</button>
                </p>
                <p>
                    <span>回调形式创建：</span>
                    <input type="text" ref={el => this.myTxt = el} />
                    <button onClick={() => this.getIptVal()}>获取焦点并打印</button>
                </p>
            </div>
        )
    }
}
