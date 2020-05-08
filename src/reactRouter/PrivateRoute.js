// 守卫路由
// 我们期望的用法是和 Route 一样
// <PrivateRoute path='/xxx' component={ Comp }></PrivateRoute>

import React from 'react'
// 定义路由还是需要借助路由组件，我们使用高阶组件对路由组件进行升级
// 如果用户没有登录，我们利用重定向让他跳转到登录页面，并且记录跳转前的路径
import { Route, Redirect } from 'react-router-dom'
// 此处component 必须解构出来重命名，因为组件必须大写字母开头
function PrivateRoute({component: Comp, ...rest}) {
    // 一般登录信息我们会放在页面的缓存 localStorage
    const isLogin = localStorage.getItem('token');
    return (
        <Route {...rest} render={ props => 
            isLogin ? 
            (<Comp {...props}/>) : 
            (<Redirect to={{
                pathname:'/login', 
                redirect: props.location.pathname 
            }}  />)
        }></Route>
    )
}

export default  PrivateRoute;