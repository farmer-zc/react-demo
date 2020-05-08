import React from 'react'
import RouteConfig from './router/index'
import { BrowserRouter, Link } from 'react-router-dom'


export default function App() {
    return (
        <BrowserRouter>

            <ul>
                <li><Link to='/home'>home</Link></li>
                <li><Link to='/about'>about</Link></li>
                <li><Link to='/list'>list/aboutReact</Link></li>
                <li><Link to='/list/aboutVue'>list/aboutVue</Link></li>
                <li><Link to='/detail/react'>detail/react</Link></li>
                <li><Link to='/detail/vue'>detail/vue</Link></li>
                <li><Link to='/aaa'>NoPath</Link></li>
            </ul>

            <RouteConfig />
        </BrowserRouter>
    )
}

