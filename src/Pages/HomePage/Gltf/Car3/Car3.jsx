import React from 'react'
import "./Car3.css"
import Car3 from "../GltfFiles/Car3"
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Environment } from '@react-three/drei'
import Navbar from "../../../../Components/Navbar/Navbar"
const car3 = () => {
  return (
    <div className='car3'>
      <div className='gltfContent' id='gltfContentOne'>
        <h3>Top Speed : 200km/h</h3>
        <h3>222kW/300 PS Power(kw)/Power(PS)</h3>
        <h3>No Of cylinders :4</h3>
        <h4>PRICE: &#8377;1.5 Crore - &#8377;2 Crore</h4>
      </div>
      <div className='gltfHomeContent'>
        <div className="gltfHomeHeading">
          <h2>Ferrari 296 GTB</h2>
        </div>
      </div>
      <Canvas id='home'>
        <ambientLight intensity={0} />
        <OrbitControls enableZoom={false} />
        <Environment preset='warehouse' />
        {/* other environment presets apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
        <Suspense>
          <Car3 />
        </Suspense>
      </Canvas>

    </div>
  )
}

export default car3
