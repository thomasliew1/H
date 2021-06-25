import React from 'react'
import config from "../../assets/js/config";
import './Porch.scss'
import Video from "../Video/Video";


class Porch extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isFinish: false
        }

        this.next = this.next.bind(this);

    }

    next() {
        console.log(`next`)
        this.setState({
            isFinish: true
        })
    }

    render() {
        return <div className={`porch `}>
            <div className={`left ${this.state.isFinish?'left-finish':''}`}></div>
            <div className={`right ${this.state.isFinish?'right-finish':''}`}></div>

            {
                this.state.isFinish?(<Video />):
                (
                    <div className="handle-area-porch" onClick={this.next}></div>
                )
            }


            

        </div>
    }

}

export default Porch;