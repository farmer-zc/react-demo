import React from 'react'
import {Consumer} from './index'

export default function ctxChild2() {
    return (
        <div style={{paddingLeft:'20px', marginTop: '10px'}}>
            <span>我是孙子组件 CtxChild2</span>
            <Consumer>
                {
                    store => <div>我拿到了context内容: {store.val} 
                                <button onClick={() => store.changeVal('我是孙子组件CtxChild2改变的ctx')}>changeVal</button>
                            </div>
                }
            </Consumer>
        </div>
    )
}
