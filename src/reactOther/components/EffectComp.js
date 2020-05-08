import React, {useState, useEffect} from 'react'

export default function EffectComp() {

    const [count, setCount] = useState(0)
    
    /*
    副作用：数据获取（ajax请求），设置订阅以及手动更改 React 组件中的 DOM 都属于副作用
    useEffect 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个生命周期函数的组合
    return：当副作用需要清除时，可在回调函数中返回一个清除副作用的函数
    第二个参数：1.不传：副作用每次都会执行， 
               2.空数组：副作用只调用一次
               3.非空数组：当数组内的值发生变化的时候执行
    格式: 
    useEffect(() => {
        // 副作用调用

        return () => {
            // 清除需要清除的副作用
        }
    }, [])
    */
   useEffect(()=>{
        document.title = `你点击了${count}次`
   })
    return (
        <div>
            <button onClick={e => setCount(count+1)}>设置title</button>
        </div>
    )
}
