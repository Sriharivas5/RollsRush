import React from 'react'
import "./HeroSection.css"
import Navbar from '../../../Components/Navbar/Navbar';

import Video from '../Video/Video';
import ServicesCards from '../ServicesCards/ServicesCards';


import Car2 from '../Gltf/Car2/Car2';
import Car3 from '../Gltf/Car3/Car3';
import Bmwm4 from "../Gltf/Bmwm4/Bmwm4"
import Bmwf82 from '../Gltf/BmwF82/Bmwf82'
import Mclaren from "../Gltf/Mclaren/Mclaren"
import Mercedes from "../Gltf/Mercedes/Mercedes"

import Hongqi from '../Gltf/Hongqi/Hongqi'
import Sports from '../Gltf/Sports/Sports'
import FreeConcept11 from '../Gltf/FreeConcept11/FreeConcept11'
import FreeConcept3 from '../Gltf/FreeConcept3/FreeConcept3'
import Bugatti from '../Gltf/Bugatti/Bugatti'


import GltfSideBar from '../Gltf/GltfSideBar/GltfSideBar'
import Slider from "../Slider/Slider"
import Marquee from "../Marquee/Marquee"


import Card3d from '../Cards3d/Cards3d';
import RapidCount from '../RapidCount/RapidCount';
import AvailableCards from '../AvailableCards/AvailableCards';
import Hero from '../Hero/Hero';
import Footer from '../../../Components/Footer/Footer';
import Cursor from '../../../Cursor'
const HeroSection = () => {
    return (
        <div className='heroSection'>
            <Cursor />
            <Navbar />
            <Hero />
            <RapidCount />
            <AvailableCards />
            {/* <Car3 /> */}
            <ServicesCards />
            <Video />
            <Card3d />
            <Slider />
            <Marquee />
            <Footer />


            {/* <Car3 /> */}
            {/* <Car2 /> */}
            {/* <Bmwm4 /> */}
            {/* <Bmwf82 /> */}
            {/* <Mclaren /> */}
            {/* <Mercedes /> */}
            {/* <Hongqi /> */}
            {/* <Sports /> */}
            {/* <FreeConcept11/> */}
            {/* <FreeConcept3/> */}
            {/* <Bugatti/> */}
            {/* <GltfSideBar/> */}
        </div>
    )
}

export default HeroSection
