import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Mclaren from "../GltfFiles/Mclaren"
import Navbar from '../../../../Components/Navbar/Navbar'
import GltfSideBar from '../GltfSideBar/GltfSideBar'

const Slider = () => {
    return (
        <div style={{ width: '100vw' }}>
            <Navbar />
            <div style={{ display: 'flex' }}>
            <div className='mclaren'>
                <div className='gltfContent'>
                    <h2>Ferrari SF90  Stradale</h2>
                    <h3>Top Speed : 200km/h</h3>
                    <h3>222kW/300 PS Power(kw)/Power(PS)</h3>
                    <h3>No Of cylinders :4</h3>
                    <h4>PRICE: &#8377;1.5 Crore - &#8377;2 Crore</h4>
                </div>
                <Canvas >
                    <ambientLight intensity={0} />
                    <OrbitControls enableZoom={false} />
                    <Environment preset='studio' />
                    {/* other environment presets apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
                    <Suspense fallback={null}>
                        <Mclaren />
                    </Suspense>
                </Canvas>
            </div>
            <GltfSideBar />
            </div>
        </div>
    )
}

export default Slider


