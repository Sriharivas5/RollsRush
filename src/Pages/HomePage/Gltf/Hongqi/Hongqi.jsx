import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Navbar from '../../../../Components/Navbar/Navbar'
import Hongqi from '../GltfFiles/Hongqi'

import GltfSideBar from '../GltfSideBar/GltfSideBar'
const Slider = () => {
    return (
        <div style={{ width: '100vw' }}>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <div className='hongqi' >
                    <div className='gltfContent'>
                        <h2>MajesticCruiser Sovereig</h2>
                        <h3>Top Speed : 320km/h</h3>
                        <h3>Engine Type: Electric Drive with  Extender</h3>
                        <h3>CO2 Emissions: Minimal</h3>
                        <h4>PRICE: &#8377;30 Crores</h4>
                    </div>
                    <Canvas style={{ width: '100%' }}  id='hongqi'>
                        <ambientLight intensity={0} />
                        <OrbitControls />
                        <Environment preset='city' />
                        {/* other environment presets apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
                        <Suspense fallback={null}>
                            <Hongqi />
                        </Suspense>
                    </Canvas>
                </div>
                <GltfSideBar />
            </div>
        </div>
    )
}

export default Slider


