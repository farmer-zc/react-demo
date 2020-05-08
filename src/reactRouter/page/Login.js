import React from 'react'
import { Redirect } from 'react-router-dom'

export default function User(props) {
    console.log(props)
    const isLogin = localStorage.getItem('token');

    // 如果props中有redirect属性 那么表明是从路由守卫跳转过来则登录后需要跳转回去，否则跳到主页
    const redirect = props.location.redirect || '/'

    const login = () => {
        localStorage.setItem('token', 'login');
        props.history.push(redirect)
    }

    if (isLogin) {
        return <Redirect to={redirect}/>
    }
    return (
        <div>
            <h2>这这是登录页面</h2>
            <button onClick={ login }>登录</button>&nbsp;&nbsp;
        </div>
    )
}
