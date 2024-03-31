import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Navbar from '../../../../Components/Navbar/Navbar'
import FreeConcept from '../GltfFiles/Freeconcept3'
import GltfSideBar from '../GltfSideBar/GltfSideBar'

const Slider = () => {
    return (
        <div style={{ width: '100vw' }}>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <div className='hongqi' >
                    <div className='gltfContent'>
                        <h2>NanoFlare Epsilon </h2>
                        <h3>Top Speed : 400km/h</h3>
                        <h3>Engine Type: NanoFlare Electric Drive</h3>
                        <h3>CO2 Emissions: Zero</h3>
                        <h4>PRICE: &#8377;18 Crores</h4>
                    </div>
                    <Canvas id='o'>
                        <ambientLight intensity={0} />
                        <OrbitControls />
                        <Environment preset='studio' />
                        {/* other environment presets apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
                        <Suspense fallback={null}>
                            <FreeConcept />
                        </Suspense>
                    </Canvas>
                </div>
                <GltfSideBar />
            </div>
        </div>
    )
}

export default Slider


