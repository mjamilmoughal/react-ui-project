import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import video from '../assets/images/banner-video.gif'
//import video from '../assets/images/banner-video.gif'



export class GetStarted extends Component {
    render() {
        return (
            <div className="bg-video-wrap">
            {/* <video src={video} loop muted autoPlay>
            </video> */}
            <img src={video}/>
            {/* <div className="overlay">
            </div> */}
            {/* <h1>Fullscreen video background
            </h1> */}
            <Link className="ToHome" to="/Home">Start Adventure</Link>
          </div>
        )
    }
}

export default GetStarted
