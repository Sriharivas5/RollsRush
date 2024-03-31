

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/car2.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0.4, 0.75, -Math.PI / 2]} scale={0.015}  >
        <group rotation={[3, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.Paint} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.Mesh} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.MatteBlack} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.LightGlass} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.Chrome} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.material} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.Glass} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.RearLightInner} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.RearLED} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.IndicatorLED} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.GlossBlack} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.Tire} />
          <mesh geometry={nodes.Object_16.geometry} material={materials.BrakeDisc} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.Logo} />
          <mesh geometry={nodes.Object_18.geometry} material={materials.SilverWheel} />
          <mesh geometry={nodes.Object_19.geometry} material={materials.BlackWheel} />
          <mesh geometry={nodes.Object_20.geometry} material={materials.Caliper} />
          <mesh geometry={nodes.Object_21.geometry} material={materials.NumberPlateF} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.NumberPlateR} />
          {/* <mesh geometry={nodes.Object_24.geometry} material={materials.Background} /> */}
          <mesh geometry={nodes.Object_25.geometry} material={materials.FloorTiles} scale={0.5}/>
          <mesh geometry={nodes.Object_26.geometry} material={materials.FloorChrome} scale={0.5}/>
          <mesh geometry={nodes.Object_27.geometry} material={materials.FloorColour} scale  ={0.5} /> 
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/car2.gltf')
