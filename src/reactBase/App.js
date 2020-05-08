import React from 'react'
import ClassComp from './component/ClassComp'
import FunComp from './component/FunComp'
import DrawComp from './component/DrawComp'
import CtxComp from './component/cxtComp/index'
import RefComp from './component/refComp/index'

export default function App() {
    return (
        <div style={{padding: '20px', marginBottom: "30px"}}>
            <h3>1.class组件：</h3>
            <ClassComp val="myProps" >
                <span>我是children</span>
            </ClassComp>

            <h3>2.函数组件：</h3>
            <FunComp val="myProps" >
                <span>我是children</span>
            </FunComp>

            <h3>3.条件渲染 & 列表渲染：</h3>
            <DrawComp />
            
            <h3>4.context上下文：Context 通过组件树提供了一个共享数据的方法，避免了组件深层嵌套手动的传递 props 属性</h3>
            <CtxComp />

            <h3>5.ref</h3>
            <RefComp />
        </div>
    )
}
