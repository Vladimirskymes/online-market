import React, {useContext, useEffect} from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import { authorizationRoutes, publicRoutes } from '../Routes';
import { SHOP_ROUTE } from '../utils/constants';
import {Context} from "../index"
import {observer} from "mobx-react-lite"
const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return (
        <Switch>
            {user.isAuth && authorizationRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    )
})

export default AppRouter
