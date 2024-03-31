import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

import Mercedes from "../GltfFiles/Mercedes"
import Navbar from '../../../../Components/Navbar/Navbar'
import GltfSideBar from '../GltfSideBar/GltfSideBar'

const mercedes = () => {
    return (
        <div style={{ width: '100vw' }}>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <div className='mercedes'>
                    <div className='gltfContent'>
                        <h2>Mercedes-Benz Maybach S-Class</h2>
                        <h3>Top Speed : 250km/h</h3>
                        <h3>Acceleration :4.5 to 4.8 seconds</h3>
                        <h3>DriveTrain :AWD</h3>
                        <h4>PRICE: &#8377;2.7 Crore</h4>
                    </div>
                    <Canvas id='mercedes'>
                        <ambientLight intensity={0} />
                        <OrbitControls />
                        <Environment preset='studio' />
                        {/* other environment presets apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
                        <Suspense fallback={null}>
                            <Mercedes />
                        </Suspense>
                    </Canvas>
                </div>
                <GltfSideBar />
            </div>
        </div>
    )
}

export default mercedes


