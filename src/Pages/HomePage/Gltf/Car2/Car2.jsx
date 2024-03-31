import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import "./Car2.css"
import Car2 from "../GltfFiles/Car2"
import Navbar from '../../../../Components/Navbar/Navbar'
import GltfSideBar from '../GltfSideBar/GltfSideBar'

const car2 = () => {
    return (
        <div style={{ width: '100vw' }}>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <div className='car2'>
                    <div className='gltfContent'>
                        <h2>Rolls-Royce Wraith</h2>
                        <h3>Top Speed : 180km/h</h3>
                        <h3>Torque : 900 Nm - 800 Nm</h3>
                        <h3>Engine  : 6592 cc</h3>
                        <h4>PRICE: &#8377;6.22 Crore - &#8377;7.21 Crore</h4>
                    </div>
                    <Canvas id='car2' >
                        <ambientLight intensity={0} />
                        <OrbitControls />
                        <Environment preset='studio' />
                        {/* other environment presets apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
                        <Suspense fallback={null}>
                            <Car2 />
                        </Suspense>
                    </Canvas>
                </div>
                <GltfSideBar />
            </div>
        </div>
    )
}

export default car2


