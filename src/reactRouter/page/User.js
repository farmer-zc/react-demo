import React from 'react'

export default function User(props) {
    console.log(props)
    const logout = () => {
        localStorage.removeItem('token');
        props.history.push('/login')
    }
    return (
        <div>
            <h2>这是User界面</h2>
            <button onClick={logout}>退出登录</button>
        </div>
    )
}
