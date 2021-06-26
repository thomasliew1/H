import React from 'react'
import './404.scss'

class NotFoundPage extends React.Component{
    constructor() {
        super();
    }
    render() {
        return <>
            {
                alert(`敬请期待`)
            }
            {
                <div className='tips'>敬请期待</div>
            }
            </>;
    }
}

export default NotFoundPage;