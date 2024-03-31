import React from 'react'
import video1 from "../assets/videos/video3.mp4"
import "./Video.css"

const Video = () => {
    return (
        <div className='video' >
            <div className='videoText'>
                <h2 >Test drive the future electric car <br />
                    with exciting & intelligent <br />
                    features today.
                </h2>
                <div className='backgroundVideoButton'>
                    <button>Test Drive  &#8599;</button>
                </div>
            </div>
            <video id="backGroundVideo" autoPlay loop muted>kkkk
                <source src={video1} type='video/mp4' />

            </video>
        </div>
    )
}

export default Video
