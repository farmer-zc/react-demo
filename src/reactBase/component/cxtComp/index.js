import React, {Component} from 'react'
import CtxChild1 from './ctxChild1'
import ContextTypeComp from './ContextTypeComp'

// 通过 React.createContext 创建一个上下文的容器，传入参数可以设置默认的共享数据
// Provider: 生产者，用于定义共享的数据（没有定义则用默认的数据）
// Consumer: 消费这，用于使用共享数据，前提是组件必须被 Provider 包裹着，用法看子组件
// 此处也可通过单独文件创建然后导出
export const MyContext = React.createContext({val: '我是默认的context'})
export const {Provider, Consumer} = MyContext;

// 将context对象挂载在 class 上
// 这能让你在组件中使用 this.context 来获取共享数据。你可以在任何生命周期中访问到它，包括 render 函数中
ContextTypeComp.contextType = MyContext

export default class CtxComp extends Component{
    constructor(props){
        super(props)

        // 函数要想传递，必须写在 state之前
        this.changeVal = (val) => {
            this.setState({
                val: val
            })
        }
        this.state = {
            val: '我是context',
            changeVal: this.changeVal // 我们可以通过给 context 传递一个函数，使consumer 跟新 context
        }
    }

    render () {
        return (
            <div>
                <p>我时最外层父组件</p>
                {/* 此处的value可以设置成组件state中的数据，可以产生联动 */}
                <Provider value={this.state}>
                    <CtxChild1 />
                    <ContextTypeComp />
                </Provider>
            </div>
        )
    }
}
