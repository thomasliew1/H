import React from 'react'
import './HotArea.scss'


/*
* 这是导航组件
* */
class HotArea extends React.Component{
    constructor(props) {
        super();

        console.log(props);
        this.state = {
            position: {
                ...props
            },
            isShowImg:false
        }

        this.hide = this.hide.bind(this)
        this.show = this.show.bind(this)
    }

    hide(e){
        e.stopPropagation();
        this.setState({
            isShowImg: false
        })
    }

    show(e){
        e.stopPropagation();
        this.setState({
            isShowImg: true
        })
    }

    render() {
        return <div onClick={this.show} className='hot-area' style={this.state.position}>
            {
                this.state.isShowImg?(<div className="pop-img-wrapper" >
                    <img onClick={this.hide} className={`pop-img`} src={this.state.position.url} alt=""/>
                </div>):null
            }


        </div>
    }
}

export default HotArea;