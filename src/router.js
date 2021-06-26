/**
 * @name Router
 * @desc 页面路由配置
 */

import React, { Component } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Home from './pages/Home/Home'

import NotFoundPage from './pages/NotFoundPage'

import {CacheRoute,CacheSwitch} from 'react-router-cache-route'
import Nav from "./components/Nav/Nav";

class Router extends Component {
    render() {
        return (
            <>

            {/*<Nav />*/}
            <Switch>
            {/*    <CacheSwitch>*/}
            {/*        <Route path="/" exact component={Home} />*/}

                    {/* 404 */}
                    <Route path='/404' component={NotFoundPage} />
                    {/* 其他重定向到 404 */}
                    <Redirect from='*' to='/404' />
                {/*</CacheSwitch>*/}

            </Switch>

            </>
        )
    }
}

export default Router
