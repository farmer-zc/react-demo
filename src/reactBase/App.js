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

            <h3>5.其他（官网顶层api）</h3>
            <p>React.PureComponent: React.PureComponent 与 React.Component 很相似。两者的区别在于 React.Component 并未实现 shouldComponentUpdate()，而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数。</p>
            <p>React.memo: React.memo 为高阶组件。它与 React.PureComponent 非常相似，但只适用于函数组件，而不适用 class 组件。</p>
            <p>React.cloneElement(element, [props], [...children]) :以 element 元素为样板克隆并返回新的 React 元素。返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。新的子元素将取代现有的子元素，而来自原始元素的 key 和 ref 将被保留。 </p>
            <p>React.Children: React.Children 提供了用于处理 this.props.children 不透明数据结构的实用方法。</p>
            <p>例如：React.Children.map(children, function[(thisArg)])</p>
            <p>React.lazy & React.Suspense 前者表示动态加载组件，后者是可以指定加载器，动态加载组件是显示loading</p>
        </div>
    )
}
