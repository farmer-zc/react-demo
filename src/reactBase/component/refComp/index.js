import React, { Component } from 'react'
import RefDemo from './RefDemo'
import ClassRef from './ClassRef'
import RefsComp from './RefsComp'
import HocComp from './HocComp'

export default class refComp extends Component {
    constructor(props) {
        super(props)
        this.ipt = React.createRef();
        this.MyCompRef = React.createRef();
    }

    componentDidMount () {
        // 直接调用class组件上的方法，自动获取焦点
        this.ipt.current.focusTxtIpt();
    }

    sayHello () {
        console.log(this.MyCompRef.current.sayHello())
    }

    render() {
        return (
            <div>
                <div>
                    <p><b>通过ref 获取dom</b></p>
                    <RefDemo/>
                </div>
                <div>
                    <p><b>class组件上使用ref(不能在函数组件上使用ref，因为没有实例，但是可以通过hook使用)</b></p>
                    <span>class组件上使用ref 获取到的是当前class的实例</span>
                    <ClassRef ref={this.ipt}/>
                </div>
                <div>
                    <p><b>refs 转发， React.forwardRef（高阶组件中很有用）</b></p>
                    <span>Ref 转发是一个可选特性，其允许某些组件接收 ref，并将其向下传递（换句话说，“转发”它）给子组件。</span><br/>
                    <span>注意：第二个参数 ref 只在使用 React.forwardRef 定义组件时存在。常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref。</span><br/>
                    <RefsComp />
                    <p><b>高阶组件中使用refs转发</b></p>
                    <div>Ref和key一样不是props属性，被react经过特殊处理，不会透传</div>
                    <div>对高阶组件添加ref，那么ref指向的就是外层组件的实例，而不会传到内部组件，,但是我们可以通过 forwardRef 把ref通过props属性传递个内层组件</div>
                    <HocComp ref={this.MyCompRef}  />
                    <button onClick={() => this.sayHello()}>sayHello</button>
                </div>
            </div>
        )
    }
}
