import React,{ useState } from 'react'

export default function StateComp() {
    // 格式： const [变量名, set变量名] = useState(默认值)
    const [count, setCount] = useState(0);
    const initList = [
        {id: 1, name: 'react'},
        {id: 2, name: 'vue'},
        {id: 3, name: 'javascript'}
    ]
    // useState 可以定义多个，且可以是对象
    const [list] = useState(initList)


    return (
        <div>
            <p>count: {count}</p>
            <button onClick={e => setCount(count+1)}>加一</button>
            <ul>
                {
                    list.map(item => <li key={item.id}>{`${item.id}: ${item.name}`}</li>)
                }
            </ul>
        </div>
    )
}
