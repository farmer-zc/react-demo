import React, {useState, useEffect} from 'react'

// 函数组件内部没有生命周期，但是可以使用Hook特性
// props 是函数组件的参数
export default function FunComp(props) {
    // 使用 useState 定义内部变量  格式： const [变量名，set变量名] = useState(默认值)
    // 直接使用name获取变量， 使用setName 改变变量
    const [name, setName] = useState('react');
    const [count, setCount] = useState(0);

    // Effect Hook 可以让你在函数组件中执行副作用操作，比如 ajax
    //你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
    useEffect(() => {
        setName('通过count改变name' + count)
        // 此处可以 return 一个函数用于清除副作用，比如定时器
        return () => {
            // 清除副作用
        }

    }, [count]) // 最后一个参数用法： 不传代表每次都执行，空数组代表只执行一次，非空数组是当数组中的元素变化的时候更新

    function sub () {
        setCount(count-1)
    }

    return (
        <div style={{backgroundColor: 'rgb(217, 217, 217)', padding: '10px'}}>
            <h5>这是函数组件</h5>
            <p>props: {props.val}</p>
            <div>特殊的props：{props.children}</div>
            <p>name: {name}</p>
            <p>count: {count}</p>
            <button onClick={() => setCount(count+1)}>加法</button>&nbsp;&nbsp;<button onClick={sub}>减法</button>
        </div>
    )
}
