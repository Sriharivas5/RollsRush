import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Navbar from '../../../../Components/Navbar/Navbar'
import Bugatti from '../GltfFiles/Bugati'
import GltfSideBar from '../GltfSideBar/GltfSideBar'
import { Shadow  ,Caustics } from '@react-three/drei'
const Slider = () => {
    return (
        <div style={{ width: '100vw' }}>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <div className='hongqi' >
                    <div className='gltfContent'>
                        <h2>HyperLuxe Velocity</h2>
                        <h3>Top Speed : 500km/h</h3>
                        <h3>Engine Type: HyperLuxe Electric Drive</h3>
                        <h3>Torque: 1100 Nm</h3>
                        <h4>PRICE: &#8377;25 Crores</h4>
                    </div>
                    <Canvas id='bugati'>
                        <ambientLight intensity={-2} />
                        <OrbitControls />
                        <Environment preset='studio' />
              
                        {/* other environment presets apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
                        <Suspense fallback={null}>
                            <Bugatti />
                        </Suspense>
                    </Canvas>
                </div>
                <GltfSideBar />
            </div>
        </div>
    )
}

export default Slider



