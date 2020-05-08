import Home from './../page/home'
import About from './../page/about'
import Detail from './../page/detail'
import NoPath from './../page/NoPath'
import List from './../page/list/list'
import AboutReact from './../page/list/aboutReact'
import AboutVue from './../page/list/aboutVue'

const routes =  [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/detail/:type',
        component: Detail
    },
    {
        path: '/list',
        component: List,
        routes: [
            {
                path: '/list/',
                exact: true,
                component: AboutReact
            },
            {
                path: '/list/aboutReact',
                component: AboutReact
            },
            {
                path: '/list/aboutVue',
                component: AboutVue
            },
        ]
    },
    {
        component: NoPath
    }
]

export default routes