import React from 'react'

import StateComp from './components/StateComp'
import EffectComp from './components/EffectComp'
import ContextComp from './components/ContextComp'
import RefComp from './components/RefComp'
import Comp from './components/Comp'
import PureComp from './components/PureComp'
import ChildComp from './components/ChildComp'
import ChildComp1 from './components/ChildComp1'

export default function App() {
    return (
        <div style={{padding: '20px'}}>
            <h2>Hook</h2>
            <p>Hook是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性</p>
            <div>
                <h4>1. useState</h4>
                <StateComp />
            </div>
            <div>
                <h4>2. useEffect</h4>
                <EffectComp />
            </div>
            <div>
                <h4>3. useContext</h4>
                <ContextComp />
            </div>
            <div>
                <h4>4. useRef</h4>
                <RefComp />
            </div>
            <h2>React 顶层API</h2>
            <div>
                {/* 用于创建 class 组件 */}
                <h4>1. React.Component</h4>
                <Comp />
            </div>
            <div>
                {/* 与上面相似  不同的是React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数 */}
                <h4>2. React.PureComponent</h4>
                <PureComp />
            </div>
            <div>
                <h4>3. React.memo</h4>
                <p> React.memo 为高阶组件。它与 React.PureComponent 非常相似，但只适用于函数组件，而不适用 class 组件 </p>
            </div>
            <div>
                <h4>4. React.Children</h4>
                <p>React.Children 提供了用于处理 this.props.children 不透明数据（任意数据）结构的实用方法。（map，forEach, count, only, toArray）</p>
                <ChildComp>
                    <p>第1个p</p>
                    <p>第2个p</p>
                    <p>第3个p</p>
                </ChildComp>
            </div>
            <div>
                <h4>5. React.cloneElement</h4>
                <p>React.cloneElement( element, [props], [...children] ) <br />
                以 element 元素为样板克隆并返回新的 React 元素。返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。新的子元素将取代现有的子元素，而来自原始元素的 key 和 ref 将被保留。
                </p>
                <b>可以用于向子组件传递props</b>
                <ChildComp1>
                    <Child/>
                </ChildComp1>
            </div>
            <div>
                <h4>6. React.isValidElement(object)</h4>
                <p>验证对象是否为 React 元素，返回值为 true 或 false。</p>
            </div>
            <div>
                <h4>7. React.lazy && React.Suspense</h4>
                <p>React.lazy() 允许你定义一个动态加载的组件</p>
                <p>React.Suspense 可以指定加载指示器(loading),懒加载组件是 React.Suspense 支持的唯一用例(懒加载过程中 loading)</p>
            </div>
        </div>
    )
}

function Child (props) {
    return <div>我是cloneElement传递过来的props：{props.count}</div>
}
