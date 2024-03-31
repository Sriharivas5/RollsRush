import React, { useState } from 'react'
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import img from '../../Cards3d/assets3d/img2.png'
import { Link } from 'react-router-dom';
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'
import image7 from './assets/image7.png'
import image8 from './assets/image8.png'
import image9 from './assets/image9.png'

import './GltfSideBar.css'
const GltfSideBar = () => {
    const [width, setWidth] = useState('gltfSideBarFullWidth')
    const [buttonCondition, setButtonCondition] = useState(true)
    const handleWidth = () => {
        if (width == 'gltfSideBarFullWidth') {
            setWidth('gltfSideBarHalfWidth')
        }
        else {
            setWidth('gltfSideBarFullWidth')
        }
        setButtonCondition(!buttonCondition)
    }

    return (
        < div className={width} >

            <div>
                <h2>SURPLUS MODELS</h2>
            </div>
            <Link to='/FreeConcept11' id='sideImagePng' >
                <div className='sideBarImage' >
                    <img src={image1} />
                </div>
            </Link>
            <Link to='/Bugatti' id='sideImagePng' >
                <div className='sideBarImage'>
                    <img src={image2} />
                </div>
            </Link>
            <Link to='/FreeConcept3' id='sideImagePng'>
                <div className='sideBarImage'>
                    <img src={image3} />
                </div>
            </Link>
            <Link to='/Sports' id='sideImagePng'>
                <div className='sideBarImage'>
                    <img src={image4} />
                </div>
            </Link>
            <Link to='/Hongqi' id='sideImagePng'>
                <div className='sideBarImage'>
                    <img src={image5} />
                </div>
            </Link>
            <Link to='/Mercedes' id='sideImagePng'>
                <div className='sideBarImage'>
                    <img src={image6} />
                </div>
            </Link>
            <Link to='/Bmwf82' id='sideImagePng'>
                <div className='sideBarImage'>
                    <img src={image8} />
                </div>
            </Link>
            <Link to='/Bmwm4' id='sideImagePng'>
                <div className='sideBarImage'>
                    <img src={image7} />
                </div>
            </Link>
            <Link to='/car2' id='sideImagePng'  >
                <div className='sideBarImage'>
                    <img src={image9} />
                </div>
            </Link>

            {/* <button className='sideActionButton' onClick={handleWidth}>{buttonCondition ? <FaChevronCircleLeft /> : <FaChevronCircleRight />}</button> */}
        </ div>
    )
}

export default GltfSideBar
