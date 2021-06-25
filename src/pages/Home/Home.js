import React from 'react'
import './Home.scss'

//components
import Porch from '../../components/Porch/Porch'
import Video from '../../components/Video/Video'
import ArtShow from '../../components/ArtShow/ArtShow'

import config from '../../assets/js/config'

export default class Home extends React.Component{

    constructor() {
        super();
    }

    state = {

    }



    render() {
        return <>
            <Porch />

        </>
    }
}
