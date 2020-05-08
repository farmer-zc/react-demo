import { Route, Redirect, Switch } from 'react-router-dom'
import routes from './config'
import React from 'react'

function RouteWithRoutes(props) {
    return (
        props.routes &&  props.routes.length > 0 ? 
        <Switch>
            {
                props.routes.map((route, index) => {
                    if( route.redirect ) {
                        return  <Redirect key={`${index}_${route.path}`} exact={route.exact} from={route.path} to={route.redirect}  />
                    }
                    if( route.routes && route.routes.length > 0 ){
                        return <Route key={`${index}_${route.path}`} path={route.path} exact={route.exact} render={props => route.component ? (
                            <route.component {...props}>
                                <RouteWithRoutes routes={route.routes}/>
                            </route.component>
                        ) : (
                            <RouteWithRoutes routes={route.routes}/>
                        )} />
                    } else {
                        return <Route path={route.path} key={`${index}_${route.path}`} exact={route.exact} component={route.component} />
                    }
                })
            }
        </Switch> : null
    )
}

export default function RouteConfig (props) {
    return (
        <RouteWithRoutes {...props} routes={routes} />
    )
}
