import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Bmwf82 from "../GltfFiles/Bmwf82"
import Navbar from '../../../../Components/Navbar/Navbar'
import GltfSideBar from '../GltfSideBar/GltfSideBar'

const bmwf82 = () => {
    return (
        <div style={{ width: '100vw' }}>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <div className='bmwf82'>
                    <div className='gltfContent'>
                        <h2>BMW M4 Coupe</h2>
                        <h3>Top Speed : 155 mph (249 km/h)</h3>
                        <h3>317 KW @ 5500 RPM</h3>
                        <h3>CO2 Emissions:	204 g/km</h3>
                        <h4>PRICE: &#8377;1.48 Crore</h4>
                    </div>
                    <Canvas id='bmwf82'>
                        <ambientLight intensity={0} />
                        <OrbitControls/>
                        <Environment preset='studio' />
                        {/* other environment presets apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}

                        <Suspense fallback={null}>
                            <Bmwf82 />
                        </Suspense>
                    </Canvas>
                </div>
                <GltfSideBar />

            </div>
        </div>
    )
}

export default bmwf82
