import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Navbar from '../../../../Components/Navbar/Navbar'
import Sports from '../GltfFiles/Sportscar'
import GltfSideBar from '../GltfSideBar/GltfSideBar'

const Slider = () => {
    return (
        <div style={{ width: '100vw' }}>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <div className='hongqi' >
                    <div className='gltfContent'>
                        <h2>FusionTrek Alpha</h2>
                        <h3>Top Speed : 550km/h</h3>
                        <h3>Engine Type: FusionTrek  Reactor</h3>
                        <h3>Torque: 1300 Nm</h3>
                        <h4>PRICE: &#8377;30 Crores</h4>
                    </div>
                    <Canvas id='sports'>
                        <ambientLight intensity={0} />
                        <OrbitControls  />
                        <Environment preset='studio' />
                        {/* other environment presets apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
                        <Suspense fallback={null}>
                            <Sports />
                        </Suspense>
                    </Canvas>
                </div>
                <GltfSideBar />
            </div>
        </div>
    )
}

export default Slider


