import React from 'react'

export default function About(props) {
    return (
        <div>
            <h2>我是about页面</h2>
            <button onClick={() => props.history.push('/home')}>去home页面</button>
        </div>
    )
}
