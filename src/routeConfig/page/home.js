import React from 'react'

export default function Home(props) {
    return (
        <div>
            <h2>我是home页面</h2>
            <button onClick={() => props.history.goBack()}>goBack</button>
        </div>
    )
}
