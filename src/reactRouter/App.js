import React from 'react'

import Home from './page/home'
import About from './page/about'
import Detail from './page/detail'
import List from './page/list/list'
import AboutReact from './page/list/aboutReact'
import AboutVue from './page/list/aboutVue'
import NoPath from './page/NoPath'
import User from './page/User'
import Login from './page/Login'

// 1. 导入 BrowserRouter 作为根组件
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'


// 2. 配置导航
export default function App() {
    return (
        <BrowserRouter>
            {/* 2. 配置导航链接（如果需要的导航的话） */}
            <ul>
                <li><Link to='/home'>home</Link></li>
                <li><Link to='/about'>about</Link></li>
                <li><Link to='/list'>list/aboutReact</Link></li>
                <li><Link to='/list/aboutVue'>list/aboutVue</Link></li>
                <li><Link to='/detail/react'>detail/react</Link></li>
                <li><Link to='/detail/vue'>detail/vue</Link></li>
                <li><Link to='/user'>User</Link></li>
                <li><Link to='/other'>other</Link></li>
                <li><Link to='/aaa'>NoPath</Link></li>
            </ul>
            {/* 3. 编写路由配置 */}
            {/* Switch 表示在 Switch 中只有一个路由会被匹配到 */}
            <Switch>
                {/* 
                    Route：路由组件，会把 *路由对象* 传到他渲染的组件的props中，
                        exact 表示全量匹配  
                        path  表示匹配的路径
                        component 表示要渲染的组件，
                        render 可以根据条件动态的渲染组件，不会于component同时出现，权重没有 component 高
                */}
                {/* 
                    路由对象：三个主要的属性
                        1. history  导航指令：用于编程式跳转路由 （看about页面）
                        2. match    获取参数信息 （看detail相关页面）
                        3. location 当前的 url 信息, 用于传递url (看404相关页面)


                */}
                <Route exact path='/' component={Home}></Route> {/* 默认路由(推荐)，也可以用redirect 重定向 */}
                <Route path='/home' component={Home}></Route>
                <Route path='/about' render={props=>(<About {...props}></About>)}></Route>
                <Route path='/list' render={props => (
                    <List {...props}>
                        <Switch>
                            <Route exact path='/list/' component={AboutReact}></Route>
                            <Route path='/list/aboutReact' component={AboutReact}></Route>
                            <Route path='/list/aboutVue' component={AboutVue}></Route>
                        </Switch>
                    </List>
                )}></Route>
                <Route path='/detail/:type' component={Detail}></Route> {/* 动态路由 */}
                <Redirect from='/other' to='/' /> {/* 重定向 form 是需要重定向的路径，to 是需要定向到的路径*/}

                <PrivateRoute path="/user" component={User}></PrivateRoute>
                <Route path="/login" component={Login}></Route>
                <Route component={NoPath} /> {/*不写path，表示都匹配不到 即 404页面*/}
            </Switch>
        </BrowserRouter>
    )
}

