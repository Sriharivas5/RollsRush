import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Navbar from '../../../../Components/Navbar/Navbar'
import FreeConcept11 from '../GltfFiles/Freeconcept11'
import GltfSideBar from '../GltfSideBar/GltfSideBar'

const Slider = () => {
    return (
        <div style={{ width: '100vw' }}>
            <Navbar />
            <div style={{ display: 'flex' }}>

                <div className='hongqi' >
                    <div className='gltfContent'>
                        <h2>QuantumDrive XZ-9000</h2>
                        <h3>Top Speed : 450km/h</h3>
                        <h3>Engine Type: Quantum Electric Drive</h3>
                        <h3>Torque: 1200 Nm</h3>
                        <h4>PRICE: &#8377;20 crores</h4>
                    </div>
                    <Canvas id='freeConcept11' >
                        <ambientLight intensity={0} />
                        <OrbitControls />
                        <Environment preset='studio' />
                        {/* other environment presets apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
                        <Suspense fallback={null}>
                            <FreeConcept11 />
                        </Suspense>
                    </Canvas>
                </div>
                <GltfSideBar />
            </div>
        </div>
    )
}

export default Slider


