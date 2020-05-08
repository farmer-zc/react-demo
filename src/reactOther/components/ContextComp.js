import React, {useContext} from 'react'

const MyContext = React.createContext()

class ContextComp extends React.Component {

    render () {
        return (
            <MyContext.Provider value={{val: 'react'}}>
                <CxtComp />
            </MyContext.Provider>
        )
    }

}

function CxtComp () {
    
    // 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。
    // 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。
    // 如果没有Provider,则值为 默认值
    const context = useContext(MyContext)

    return (
        <div>
            context ： { context.val }
        </div>
    )
}

export default ContextComp