import React from 'react'
import './Video.scss'

import ArtShow from '../ArtShow/ArtShow'


class Video extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isFinish: false
        }


        this.next = this.next.bind(this);

    }

    next(){
        console.log(`next`);
        this.setState({
            isFinish: true
        })
    }




    render() {


        return <div className={'video'} >
            {
                this.state.isFinish?(<ArtShow />):(
                    <>
                        <div className="tv" >
                            <div className="tv-screen">
                                <video autoPlay={false} src=""></video>
                            </div>

                        </div>
                        <div className="handle-area-video" onClick={this.next}>
                            进入民生银行画展
                        </div>
                    </>
                )
            }

        </div>
    }

}

export default Video;
