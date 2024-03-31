import React from 'react'
import "./Bmwm4.css"
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Bmwm4 from "../GltfFiles/Bmwm4"
import Navbar from '../../../../Components/Navbar/Navbar'

import GltfSideBar from '../GltfSideBar/GltfSideBar'

const bmwm4 = () => {
    return (
        <div style={{ width: '100vw' }}>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <div className='bmwm4'>
                    <div className='gltfContent'>
                        <h2>BMW M4 Competition</h2>
                        <h3>Top Speed : 250km/h</h3>
                        <h3>Emission Standard BS6 Phase 2</h3>
                        <h3>No Of cylinders :6</h3>
                        <h4>PRICE: &#8377;2 Crore - &#8377;2.3 Crore</h4>
                    </div>
                    <Canvas id='bmwm4'>
                        <ambientLight intensity={10} />
                        <OrbitControls />
                        <Environment preset='warehouse' />
                        <Suspense fallback={null}>
                            <Bmwm4 />
                        </Suspense>
                    </Canvas>
                </div>
                <GltfSideBar />
            </div>
        </div>
    )
}

export default bmwm4
