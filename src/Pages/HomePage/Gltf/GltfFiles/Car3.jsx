
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/car3.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.2,0, -0.7]} scale={1.5} >
        <mesh geometry={nodes.Object_2.geometry} material={materials.Brake_Light} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Grille_3} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Grille_5} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Grille_6} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Head_Light_Emission} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.License_Plate} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Light} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Reflector} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.vehicle_generic_black_plastic} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['350Z_Brake']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Badge} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Caliper} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Carbon_BMP} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Carbon_BMP} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.Carbon_BMP} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.Glass_Full} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Grille_1} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.Interior_Emissive} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.New_Project_9} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Primary_Paint} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.Primary_Paint} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.Primary_Paint} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.Rear_Mirror} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.Stitches_Steering_ALT_OPC} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.Suede_BMP} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.Suede_BMP} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.Suede_BMP} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.Suede_BMP} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.Wheel_1A} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.Wheel_1A} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.Wheel_1A} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.Wheel_1A} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.interior_Diffuse} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.vehicle_generic_tyrewallblack} />
      </group>
    </group>
  )
}

useGLTF.preload('/car3.gltf')
