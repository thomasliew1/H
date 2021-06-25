import React from 'react'
import {Link} from "react-router-dom";


/*
* 这是导航组件
* */
class Nav extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <nav>
            <Link to="/">首页</Link>
            <Link to="/detail">个人信息-详情页</Link>
        </nav>
    }
}

export default Nav;