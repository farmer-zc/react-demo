import React from 'react'
import CtxChild2 from './ctxChild2'
import {Consumer} from './index'

export default function ctxChild2() {
    return (
        <div style={{paddingLeft:'20px'}}>
            <span>我是子组件 CtxChild1</span>
            <Consumer>
                {
                    store => <div>我拿到了context内容: {store.val}
                                <button onClick={() => store.changeVal('我是子组件CtxChild1改变的ctx')}>changeVal</button>
                            </div>
                        }
            </Consumer>
            <CtxChild2/> 
        </div>
    )
}
