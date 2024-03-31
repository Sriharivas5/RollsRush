
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  
  const { nodes, materials } = useGLTF('/mercedes.gltf')
  return (
    <group {...props} dispose={null}  rotation={[0.45, -1.1, 0.1]} position={[2.4,0,0]}>
      <group scale={0.0155}>
        <group position={[-0.868, 76.46, 147.821]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_engine_2_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_engine_2_gavril_v8_0.geometry} material={materials.gavril_v8} />
          <mesh geometry={nodes.sw222_engine_2_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} />
        </group>
        <group position={[-0.016, 126.413, 16.567]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_intmirror_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_intmirror_mirror003_0.geometry} material={materials['mirror.003']} />
        </group>
        <group position={[-0.061, 84.683, -124.579]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_body_trim_carbon_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_body_trim_carbon_sw222_amg_texture8_0.geometry} material={materials.sw222_amg_texture8} />
          <mesh geometry={nodes.sw222_body_trim_carbon_sw222_amg_texture28_0.geometry} material={materials.sw222_amg_texture28} />
          <mesh geometry={nodes.sw222_body_trim_carbon_sw222_amg_texture30_0.geometry} material={materials.sw222_amg_texture30} />
        </group>
        <group position={[93.331, 103.885, 42.695]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_mirror_L_sw222_paint_0.geometry} material={materials.sw222_paint} />
          <mesh geometry={nodes.sw222_mirror_L_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_mirror_L_sw222_main_alt_0.geometry} material={materials.sw222_main_alt} />
          <mesh geometry={nodes.sw222_mirror_L_sw222_glass_0.geometry} material={materials.sw222_glass} />
          <mesh geometry={nodes.sw222_mirror_L_sw222_signal_L_0.geometry} material={materials.sw222_signal_L} />
          <mesh geometry={nodes.sw222_mirror_L_mirror003_0.geometry} material={materials['mirror.003']} />
        </group>
        <group position={[80.513, 76.132, 176.166]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_headlight_us_2013_L_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_headlight_us_2013_L_sw222_off_0.geometry} material={materials.sw222_off} />
          <mesh geometry={nodes.sw222_headlight_us_2013_L_sw222_off2_0.geometry} material={materials.sw222_off2} />
        </group>
        <group position={[-81.166, 73.309, 181.824]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_headlight_us_2017_R_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_headlight_us_2017_R_sw222_off_0.geometry} material={materials.sw222_off} />
          <mesh geometry={nodes.sw222_headlight_us_2017_R_sw222_off2_0.geometry} material={materials.sw222_off2} />
        </group>
        <group position={[-69.38, 71.093, 191.651]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_headlightframe_R_2017_2_sw222_main_alt_2029_0.geometry} material={materials['sw222_main_alt_2.029']} />
          <mesh geometry={nodes.sw222_headlightframe_R_2017_2_sw222_glass_0.geometry} material={materials.sw222_glass} />
          <mesh geometry={nodes.sw222_headlightframe_R_2017_2_sw222_amg_texture12_0.geometry} material={materials.sw222_amg_texture12} />
          <mesh geometry={nodes.sw222_headlightframe_R_2017_2_sw222_runninglight_0.geometry} material={materials.sw222_runninglight} />
          <mesh geometry={nodes.sw222_headlightframe_R_2017_2_sw222_amg_texture9001_0.geometry} material={materials['sw222_amg_texture9.001']} />
          <mesh geometry={nodes.sw222_headlightframe_R_2017_2_sw222_headlight_0.geometry} material={materials.sw222_headlight} />
          <mesh geometry={nodes.sw222_headlightframe_R_2017_2_sw222_foglight_0.geometry} material={materials.sw222_foglight} />
        </group>
        <group position={[69.38, 71.093, 191.651]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_headlightframe_L_2017_2_sw222_main_alt_2029_0.geometry} material={materials['sw222_main_alt_2.029']} />
          <mesh geometry={nodes.sw222_headlightframe_L_2017_2_sw222_glass_0.geometry} material={materials.sw222_glass} />
          <mesh geometry={nodes.sw222_headlightframe_L_2017_2_sw222_amg_texture12_0.geometry} material={materials.sw222_amg_texture12} />
          <mesh geometry={nodes.sw222_headlightframe_L_2017_2_sw222_runninglight_0.geometry} material={materials.sw222_runninglight} />
          <mesh geometry={nodes.sw222_headlightframe_L_2017_2_sw222_signal_L_0.geometry} material={materials.sw222_signal_L} />
          <mesh geometry={nodes.sw222_headlightframe_L_2017_2_sw222_headlight_0.geometry} material={materials.sw222_headlight} />
        </group>
        <group position={[81.166, 73.309, 181.824]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_headlight_us_2017_L_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_headlight_us_2017_L_sw222_off_0.geometry} material={materials.sw222_off} />
          <mesh geometry={nodes.sw222_headlight_us_2017_L_sw222_off2_0.geometry} material={materials.sw222_off2} />
        </group>
        <group position={[-80.515, 76.132, 176.166]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_headlight_us_2013_R_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_headlight_us_2013_R_sw222_off_0.geometry} material={materials.sw222_off} />
          <mesh geometry={nodes.sw222_headlight_us_2013_R_sw222_off2_0.geometry} material={materials.sw222_off2} />
        </group>
        <group position={[-81.213, 88.025, -109.227]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_door_RR_chrome_2_2_sw222_paint_0.geometry} material={materials.sw222_paint} />
          <mesh geometry={nodes.sw222_door_RR_chrome_2_2_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_door_RR_chrome_2_2_sw222_paint_2_0.geometry} material={materials.sw222_paint_2} />
        </group>
        <group position={[-79.998, 88.073, 10.689]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_door_FR_chrome_2_2_sw222_paint_0.geometry} material={materials.sw222_paint} />
          <mesh geometry={nodes.sw222_door_FR_chrome_2_2_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_door_FR_chrome_2_2_sw222_main_alt_0.geometry} material={materials.sw222_main_alt} />
          <mesh geometry={nodes.sw222_door_FR_chrome_2_2_sw222_amg_texture21_0.geometry} material={materials.sw222_amg_texture21} />
          <mesh geometry={nodes.sw222_door_FR_chrome_2_2_sw222_paint_2_0.geometry} material={materials.sw222_paint_2} />
        </group>
        <group position={[79.998, 88.073, 10.689]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_door_FL_chrome_2_2_sw222_paint_0.geometry} material={materials.sw222_paint} />
          <mesh geometry={nodes.sw222_door_FL_chrome_2_2_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_door_FL_chrome_2_2_sw222_main_alt_0.geometry} material={materials.sw222_main_alt} />
          <mesh geometry={nodes.sw222_door_FL_chrome_2_2_sw222_amg_texture21_0.geometry} material={materials.sw222_amg_texture21} />
          <mesh geometry={nodes.sw222_door_FL_chrome_2_2_sw222_paint_2_0.geometry} material={materials.sw222_paint_2} />
        </group>
        <group position={[81.213, 88.025, -109.227]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_door_RL_chrome_2_2_sw222_paint_0.geometry} material={materials.sw222_paint} />
          <mesh geometry={nodes.sw222_door_RL_chrome_2_2_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_door_RL_chrome_2_2_sw222_paint_2_0.geometry} material={materials.sw222_paint_2} />
        </group>
        <group position={[0.01, 89.495, -241.28]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_trunk_chrome_2_sw222_paint_0.geometry} material={materials.sw222_paint} />
          <mesh geometry={nodes.sw222_trunk_chrome_2_sw222_amg_texture27_0.geometry} material={materials.sw222_amg_texture27} />
        </group>
        <group position={[16.921, 69.325, 110.037]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={90.25}>
          <mesh geometry={nodes.tail_lights0001_steeringwheel_ok0_0.geometry} material={materials['steeringwheel_ok.0']} />
          <mesh geometry={nodes.tail_lights0001_tail_lights017_0.geometry} material={materials['tail_lights0.17']} />
        </group>
        <group position={[70.875, 79.604, -78.008]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_doorpanel_RL_wood_5_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_doorpanel_RL_wood_5_sw222_amg_texture21_0.geometry} material={materials.sw222_amg_texture21} />
          <mesh geometry={nodes.sw222_doorpanel_RL_wood_5_sw222_amg_texture28_0.geometry} material={materials.sw222_amg_texture28} />
          <mesh geometry={nodes.sw222_doorpanel_RL_wood_5_sw222_amg_texture26_alt_0.geometry} material={materials.sw222_amg_texture26_alt} />
          <mesh geometry={nodes.sw222_doorpanel_RL_wood_5_sw222_amg_texture17_0.geometry} material={materials.sw222_amg_texture17} />
          <mesh geometry={nodes.sw222_doorpanel_RL_wood_5_sw222_interior_0.geometry} material={materials.sw222_interior} />
          <mesh geometry={nodes.sw222_doorpanel_RL_wood_5_sw222_amg_texture8_0.geometry} material={materials.sw222_amg_texture8} />
        </group>
        <group position={[-70.875, 79.604, -78.008]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_doorpanel_RR_wood_3_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_doorpanel_RR_wood_3_sw222_amg_texture21_0.geometry} material={materials.sw222_amg_texture21} />
          <mesh geometry={nodes.sw222_doorpanel_RR_wood_3_sw222_amg_texture28_0.geometry} material={materials.sw222_amg_texture28} />
          <mesh geometry={nodes.sw222_doorpanel_RR_wood_3_sw222_amg_texture26_alt_0.geometry} material={materials.sw222_amg_texture26_alt} />
          <mesh geometry={nodes.sw222_doorpanel_RR_wood_3_sw222_amg_texture31_0.geometry} material={materials.sw222_amg_texture31} />
          <mesh geometry={nodes.sw222_doorpanel_RR_wood_3_sw222_interior_0.geometry} material={materials.sw222_interior} />
          <mesh geometry={nodes.sw222_doorpanel_RR_wood_3_sw222_amg_texture8_0.geometry} material={materials.sw222_amg_texture8} />
          <mesh geometry={nodes.sw222_doorpanel_RR_wood_3_sw222_amg_texture17_0.geometry} material={materials.sw222_amg_texture17} />
        </group>
        <group position={[-0.428, 71.555, 217.536]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_grille_2013_maybach_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_grille_2013_maybach_sw222_main_alt_0.geometry} material={materials.sw222_main_alt} />
          <mesh geometry={nodes.sw222_grille_2013_maybach_sw222_mblogo_0.geometry} material={materials.sw222_mblogo} />
        </group>
        <group position={[-0.21, 70.686, -100.781]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_seats_R_sw222_amg_texture28_0.geometry} material={materials.sw222_amg_texture28} />
          <mesh geometry={nodes.sw222_seats_R_sw222_amg_texture17_0.geometry} material={materials.sw222_amg_texture17} />
          <mesh geometry={nodes.sw222_seats_R_sw222_amg_texture30_0.geometry} material={materials.sw222_amg_texture30} />
        </group>
        <group position={[-1.568, 94.102, -76.968]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_body_sw222_paint_0.geometry} material={materials.sw222_paint} />
          <mesh geometry={nodes.sw222_body_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_body_sw222_amg_texture21_0.geometry} material={materials.sw222_amg_texture21} />
          <mesh geometry={nodes.sw222_body_sw222_brakelight_alt_0.geometry} material={materials.sw222_brakelight_alt} />
          <mesh geometry={nodes.sw222_body_sw222_main_0.geometry} material={materials.sw222_main} />
          <mesh geometry={nodes.sw222_body_sw222_ammg_alcantara_0.geometry} material={materials.sw222_ammg_alcantara} />
          <mesh geometry={nodes.sw222_body_sw222_amg_texture26_alt_0.geometry} material={materials.sw222_amg_texture26_alt} />
          <mesh geometry={nodes.sw222_body_sw222_interior_0.geometry} material={materials.sw222_interior} />
          <mesh geometry={nodes.sw222_body_sw222_red_0.geometry} material={materials.sw222_red} />
          <mesh geometry={nodes.sw222_body_sw222_amg_texture15_0.geometry} material={materials.sw222_amg_texture15} />
          <mesh geometry={nodes.sw222_body_sw222_amg_texture9_0.geometry} material={materials.sw222_amg_texture9} />
          <mesh geometry={nodes.sw222_body_sw222_amg_texture24_0.geometry} material={materials.sw222_amg_texture24} />
          <mesh geometry={nodes.sw222_body_sw222_amg_texture30_0.geometry} material={materials.sw222_amg_texture30} />
        </group>
        <group position={[-67.994, 84.195, -242.621]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_taillightframe_R_2017_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_taillightframe_R_2017_sw222_vehiclelights_0.geometry} material={materials.sw222_vehiclelights} />
          <mesh geometry={nodes.sw222_taillightframe_R_2017_sw222_reverselight_0.geometry} material={materials.sw222_reverselight} />
          <mesh geometry={nodes.sw222_taillightframe_R_2017_sw222_brakelight_0.geometry} material={materials.sw222_brakelight} />
          <mesh geometry={nodes.sw222_taillightframe_R_2017_sw222_taillight_0.geometry} material={materials.sw222_taillight} />
        </group>
        <group position={[-93.331, 103.885, 42.695]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_mirror_R_sw222_paint_0.geometry} material={materials.sw222_paint} />
          <mesh geometry={nodes.sw222_mirror_R_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_mirror_R_sw222_main_alt_0.geometry} material={materials.sw222_main_alt} />
          <mesh geometry={nodes.sw222_mirror_R_sw222_glass_0.geometry} material={materials.sw222_glass} />
          <mesh geometry={nodes.sw222_mirror_R_sw222_signal_R_0.geometry} material={materials.sw222_signal_R} />
          <mesh geometry={nodes.sw222_mirror_R_mirror003_0.geometry} material={materials['mirror.003']} />
        </group>
        <group position={[11.535, 77.845, 30.788]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_dash_carbon_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_dash_carbon_sw222_amg_texture27_0.geometry} material={materials.sw222_amg_texture27} />
          <mesh geometry={nodes.sw222_dash_carbon_sw222_amg_texture8_0.geometry} material={materials.sw222_amg_texture8} />
          <mesh geometry={nodes.sw222_dash_carbon_sw222_amg_texture28_0.geometry} material={materials.sw222_amg_texture28} />
          <mesh geometry={nodes.sw222_dash_carbon_sw222_amg_texture26_0.geometry} material={materials.sw222_amg_texture26} />
          <mesh geometry={nodes.sw222_dash_carbon_sw222_amg_texture26_alt_0.geometry} material={materials.sw222_amg_texture26_alt} />
          <mesh geometry={nodes.sw222_dash_carbon_sw222_amg_texture30_0.geometry} material={materials.sw222_amg_texture30} />
          <mesh geometry={nodes.sw222_dash_carbon_sw222_interior_0.geometry} material={materials.sw222_interior} />
          <mesh geometry={nodes.sw222_dash_carbon_etk800_screen_0.geometry} material={materials.etk800_screen} />
          <mesh geometry={nodes.sw222_dash_carbon_sw222_amg_texture1_0.geometry} material={materials.sw222_amg_texture1} />
          <mesh geometry={nodes.sw222_dash_carbon_vivace_gauges_screen_0.geometry} material={materials.vivace_gauges_screen} />
        </group>
        <group position={[36.761, 76.757, -31.194]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_seat_FL_carbon_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_seat_FL_carbon_sw222_amg_texture8_0.geometry} material={materials.sw222_amg_texture8} />
          <mesh geometry={nodes.sw222_seat_FL_carbon_sw222_amg_texture28_0.geometry} material={materials.sw222_amg_texture28} />
          <mesh geometry={nodes.sw222_seat_FL_carbon_sw222_amg_texture17_0.geometry} material={materials.sw222_amg_texture17} />
          <mesh geometry={nodes.sw222_seat_FL_carbon_sw222_amg_texture30_0.geometry} material={materials.sw222_amg_texture30} />
          <mesh geometry={nodes.sw222_seat_FL_carbon_sw222_red_0.geometry} material={materials.sw222_red} />
          <mesh geometry={nodes.sw222_seat_FL_carbon_sw222_amg_texture29_0.geometry} material={materials.sw222_amg_texture29} />
        </group>
        <group position={[-36.761, 76.757, -31.194]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_seat_FR_carbon_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_seat_FR_carbon_sw222_amg_texture8_0.geometry} material={materials.sw222_amg_texture8} />
          <mesh geometry={nodes.sw222_seat_FR_carbon_sw222_amg_texture28_0.geometry} material={materials.sw222_amg_texture28} />
          <mesh geometry={nodes.sw222_seat_FR_carbon_sw222_amg_texture17_0.geometry} material={materials.sw222_amg_texture17} />
          <mesh geometry={nodes.sw222_seat_FR_carbon_sw222_amg_texture30_0.geometry} material={materials.sw222_amg_texture30} />
          <mesh geometry={nodes.sw222_seat_FR_carbon_sw222_red_0.geometry} material={materials.sw222_red} />
          <mesh geometry={nodes.sw222_seat_FR_carbon_sw222_amg_texture29_0.geometry} material={materials.sw222_amg_texture29} />
        </group>
        <group position={[-71.132, 80.475, 16.025]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_doorpanel_FR_carbon_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_doorpanel_FR_carbon_sw222_amg_texture21_0.geometry} material={materials.sw222_amg_texture21} />
          <mesh geometry={nodes.sw222_doorpanel_FR_carbon_sw222_amg_texture8_0.geometry} material={materials.sw222_amg_texture8} />
          <mesh geometry={nodes.sw222_doorpanel_FR_carbon_sw222_amg_texture28_0.geometry} material={materials.sw222_amg_texture28} />
          <mesh geometry={nodes.sw222_doorpanel_FR_carbon_sw222_amg_texture26_alt_0.geometry} material={materials.sw222_amg_texture26_alt} />
          <mesh geometry={nodes.sw222_doorpanel_FR_carbon_sw222_amg_texture31_0.geometry} material={materials.sw222_amg_texture31} />
          <mesh geometry={nodes.sw222_doorpanel_FR_carbon_sw222_amg_texture17_0.geometry} material={materials.sw222_amg_texture17} />
          <mesh geometry={nodes.sw222_doorpanel_FR_carbon_sw222_interior_0.geometry} material={materials.sw222_interior} />
        </group>
        <group position={[70.851, 78.828, 18.177]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_doorpanel_FL_carbon_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_doorpanel_FL_carbon_sw222_amg_texture21_0.geometry} material={materials.sw222_amg_texture21} />
          <mesh geometry={nodes.sw222_doorpanel_FL_carbon_sw222_amg_texture8_0.geometry} material={materials.sw222_amg_texture8} />
          <mesh geometry={nodes.sw222_doorpanel_FL_carbon_sw222_amg_texture28_0.geometry} material={materials.sw222_amg_texture28} />
          <mesh geometry={nodes.sw222_doorpanel_FL_carbon_sw222_amg_texture26_alt_0.geometry} material={materials.sw222_amg_texture26_alt} />
          <mesh geometry={nodes.sw222_doorpanel_FL_carbon_sw222_amg_texture31_0.geometry} material={materials.sw222_amg_texture31} />
          <mesh geometry={nodes.sw222_doorpanel_FL_carbon_sw222_amg_texture17_0.geometry} material={materials.sw222_amg_texture17} />
          <mesh geometry={nodes.sw222_doorpanel_FL_carbon_sw222_interior_0.geometry} material={materials.sw222_interior} />
        </group>
        <group position={[-0.618, 133.185, 6.446]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_sunvisor_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_sunvisor_sw222_ammg_alcantara_0.geometry} material={materials.sw222_ammg_alcantara} />
        </group>
        <group position={[36.981, 84.994, 26.786]} rotation={[-2.864, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_steer_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_steer_sw222_amg_texture28_0.geometry} material={materials.sw222_amg_texture28} />
          <mesh geometry={nodes.sw222_steer_sw222_ammg_alcantara_0.geometry} material={materials.sw222_ammg_alcantara} />
          <mesh geometry={nodes.sw222_steer_sw222_amg_texture46_0.geometry} material={materials.sw222_amg_texture46} />
          <mesh geometry={nodes.sw222_steer_sw222_amg_texture26_0.geometry} material={materials.sw222_amg_texture26} />
        </group>
        <group position={[0.752, 82.78, -259.224]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_trunk_showcase_plate_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_trunk_showcase_plate_sw222_amg_texture4_0.geometry} material={materials.sw222_amg_texture4} />
        </group>
        <group position={[-0.81, 76.866, 147.08]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_engine_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_engine_sw222_amg_texture8_0.geometry} material={materials.sw222_amg_texture8} />
          <mesh geometry={nodes.sw222_engine_gavril_v8_0.geometry} material={materials.gavril_v8} />
          <mesh geometry={nodes.sw222_engine_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} />
        </group>
        <group position={[-44.894, 35.206, -202.879]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_exhaust_R_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_exhaust_R_sw222_main_0.geometry} material={materials.sw222_main} />
        </group>
        <group position={[47.604, 35.161, -201.945]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_exhaust_L_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_exhaust_L_sw222_main_0.geometry} material={materials.sw222_main} />
        </group>
        <group position={[78.938, 79.545, 177.731]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_headlight_L_2013_sw222_vehiclelights_alt_0.geometry} material={materials.sw222_vehiclelights_alt} />
          <mesh geometry={nodes.sw222_headlight_L_2013_sw222_runninglight_alt_0.geometry} material={materials.sw222_runninglight_alt} />
          <mesh geometry={nodes.sw222_headlight_L_2013_sw222_signal_L_alt_0.geometry} material={materials.sw222_signal_L_alt} />
        </group>
        <group position={[-78.634, 79.415, 178.085]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_headlight_R_2013_sw222_vehiclelights_alt_0.geometry} material={materials.sw222_vehiclelights_alt} />
          <mesh geometry={nodes.sw222_headlight_R_2013_sw222_signal_R_alt_0.geometry} material={materials.sw222_signal_R_alt} />
          <mesh geometry={nodes.sw222_headlight_R_2013_sw222_runninglight_alt_0.geometry} material={materials.sw222_runninglight_alt} />
        </group>
        <group position={[-0.213, 43.979, 224.558]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_bumper_F_showcase_plate_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_bumper_F_showcase_plate_sw222_amg_texture4_0.geometry} material={materials.sw222_amg_texture4} />
        </group>
        <group position={[-0.785, 45.398, -257.374]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_bumper_R_amg_2017_2_sw222_paint_0.geometry} material={materials.sw222_paint} />
          <mesh geometry={nodes.sw222_bumper_R_amg_2017_2_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_bumper_R_amg_2017_2_sw222_main_alt_0.geometry} material={materials.sw222_main_alt} />
          <mesh geometry={nodes.sw222_bumper_R_amg_2017_2_sw222_glass_0.geometry} material={materials.sw222_glass} />
          <mesh geometry={nodes.sw222_bumper_R_amg_2017_2_sw222_vehiclelights_0.geometry} material={materials.sw222_vehiclelights} />
          <mesh geometry={nodes.sw222_bumper_R_amg_2017_2_sw222_grey053_0.geometry} material={materials.sw222_grey053} />
        </group>
        <group position={[-54.532, 34.586, -264.999]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_exhausttip_R_amg_2017_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_exhausttip_R_amg_2017_sw222_amg_texture11_0.geometry} material={materials.sw222_amg_texture11} />
        </group>
        <group position={[54.532, 34.585, -264.999]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_exhausttip_L_amg_2017_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_exhausttip_L_amg_2017_sw222_amg_texture11_0.geometry} material={materials.sw222_amg_texture11} />
        </group>
        <group position={[27.167, 68.626, 216.286]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_amg_badge_2013_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_amg_badge_2013_sw222_main_alt_0.geometry} material={materials.sw222_main_alt} />
        </group>
        <group position={[27.633, 68.188, 218.555]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_brabus_badge_2017_sw222_main_alt_0.geometry} material={materials.sw222_main_alt} />
          <mesh geometry={nodes.sw222_brabus_badge_2017_sw222_brabus_0.geometry} material={materials.sw222_brabus} />
        </group>
        <group position={[0, 35.905, 205.983]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw222_bumper_F_brabus_2017_sw222_paint_0.geometry} material={materials.sw222_paint} />
          <mesh geometry={nodes.sw222_bumper_F_brabus_2017_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} />
          <mesh geometry={nodes.sw222_bumper_F_brabus_2017_sw222_main_alt_0.geometry} material={materials.sw222_main_alt} />
          <mesh geometry={nodes.sw222_bumper_F_brabus_2017_primary042_0.geometry} material={materials['primary.042']} />
          <mesh geometry={nodes.sw222_bumper_F_brabus_2017_primary102_0.geometry} material={materials['primary.102']} />
        </group>
        <group position={[77.193, 36.575, 127.364]} rotation={[Math.PI / 2, -0.035, Math.PI]} scale={[107.768, 92.487, 92.488]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_brake001_0.geometry} material={materials['amdb11_brake.001']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc_chrome001_0.geometry} material={materials['amdb11_misc_chrome.001']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc001_0.geometry} material={materials['amdb11_misc.001']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_caliper001_0.geometry} material={materials['amdb11_caliper.001']} />
        </group>
        <group position={[77.193, 36.575, -170.506]} rotation={[Math.PI / 2, -0.035, Math.PI]} scale={[107.768, 92.487, 92.488]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_brake001_0.geometry} material={materials['amdb11_brake.001']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc_chrome001_0.geometry} material={materials['amdb11_misc_chrome.001']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc001_0.geometry} material={materials['amdb11_misc.001']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_caliper001_0.geometry} material={materials['amdb11_caliper.001']} />
        </group>
        <group position={[-76.694, 36.575, 127.364]} rotation={[Math.PI / 2, 0.035, -Math.PI]} scale={[-107.768, 92.487, 92.488]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_brake001_0.geometry} material={materials['amdb11_brake.001']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc_chrome001_0.geometry} material={materials['amdb11_misc_chrome.001']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc001_0.geometry} material={materials['amdb11_misc.001']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_caliper001_0.geometry} material={materials['amdb11_caliper.001']} />
        </group>
        <group position={[-76.694, 36.575, -170.506]} rotation={[Math.PI / 2, 0.035, -Math.PI]} scale={[-107.768, 92.487, 92.488]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_brake001_0.geometry} material={materials['amdb11_brake.001']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc_chrome001_0.geometry} material={materials['amdb11_misc_chrome.001']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc001_0.geometry} material={materials['amdb11_misc.001']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_caliper001_0.geometry} material={materials['amdb11_caliper.001']} />
        </group>
        <mesh geometry={nodes.sw222_windshield_sw222_glass_0.geometry} material={materials.sw222_glass} position={[0.512, 122.677, 38.709]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_headlightglass_L_2017_sw222_glass_0.geometry} material={materials.sw222_glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_taillightglass_R_2017_glass004_0.geometry} material={materials['glass.004']} position={[-70.753, 85.467, -241.42]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_wipers_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[-6.017, 97.949, 86.266]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_doorglass_FR_sw222_glass_0.geometry} material={materials.sw222_glass} position={[-71.888, 116.628, 0.581]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_doorglass_RR_sw222_glass007_0.geometry} material={materials['sw222_glass.007']} position={[-72.231, 116.16, -104.481]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_doorglass_FL_sw222_glass_0.geometry} material={materials.sw222_glass} position={[71.863, 116.674, 0.108]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_shock_R_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 54.69, -162.757]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_halfshaft_R_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 35.963, -157.656]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_subframe_R_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 42.607, -154.403]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_hub_R_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 35.376, -157.131]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_lowerarm_R_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 28.17, -157.645]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_upperarm_R_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 47.444, -148.187]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_tierod_R_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 34.097, -173.784]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_spring_R_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 43.723, -165.174]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_diff_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 35.484, -153.038]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_swaybar_R_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 44.951, -154.537]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_radsupport_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 67.386, 186.733]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_steeringbox_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 23.553, 149.62]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_lowerarm_F_b_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 28.097, 158.061]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_subframe_F_sw222_main_0.geometry} material={materials.sw222_main} position={[0.1, 26.621, 135.586]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_halfshaft_F_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 32.506, 140]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_hub_F_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 33.696, 140.048]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_strut_F_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 72.799, 134.828]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_tierod_F_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 22.507, 151.97]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_lowerarm_F_a_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 21.156, 138.28]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_diff_F_sw222_main_0.geometry} material={materials.sw222_main} position={[5.337, 32.021, 139.803]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_swaybar_F_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 40.934, 153.732]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_fueltank_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 29.257, -95.698]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_heatshield_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 25.46, -16.943]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_bumperbar_F_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 53.03, 200.801]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_strutbrace_F_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 89.639, 125.074]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_engbaycrap_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[4.423, 81.772, 139.282]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_strutbrace_F_extra_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 86.04, 179.929]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_radiator_sw222_main_0.geometry} material={materials.sw222_main} position={[-1.319, 61.283, 182.275]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_intercooler_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 37.826, 186.257]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_mercedes_trunk_badge_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[-0.092, 98.241, -259.244]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_mercedes_hood_badge_2017_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[0.005, 86.114, 207.14]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_amg_badge_2017_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[27.935, 68.291, 218.502]} rotation={[-Math.PI / 2, 0, 0.022]} scale={100} />
        <mesh geometry={nodes.sw222_transmission_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 36.983, 84.983]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_transfercase_sw222_main_0.geometry} material={materials.sw222_main} position={[5.911, 29.869, 42.191]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_badge_v12_biturbo_R_2017_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[-88.008, 74.018, 92.146]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_amg_s65_lettering_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[-17.275, 95.604, -253.622]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_badge_v12_biturbo_L_2017_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[88.008, 74.128, 86.976]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_door_FL_trim_chrome_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[84.716, 31.487, 15.025]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_door_RL_trim_chrome_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[85.269, 32.703, -75.371]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_fender_L_trim_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[85.092, 30.381, 83.871]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_door_FR_trim_chrome_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[-84.716, 31.487, 15.025]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_door_RR_trim_chrome_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[-85.269, 32.703, -75.371]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_fender_R_trim_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[-85.092, 30.381, 83.871]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_sideskirt_amg_sw222_paint_0.geometry} material={materials.sw222_paint} position={[1.102, 24.469, -7.488]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_sideskirt_trim_final_edition_sw222_main_alt_2005_0.geometry} material={materials['sw222_main_alt_2.005']} position={[0, 23.026, -11.049]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_driveshaft_sw222_main_0.geometry} material={materials.sw222_main} position={[0, 34.184, -97.821]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_driveshaft_F_sw222_main_0.geometry} material={materials.sw222_main} position={[12.731, 28.499, 55.062]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_hood_2013_sw222_paint_0.geometry} material={materials.sw222_paint} position={[0, 85.904, 155.723]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_fender_L_2017_sw222_paint_0.geometry} material={materials.sw222_paint} position={[79.043, 76.962, 110.74]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_fender_R_2017_sw222_paint_0.geometry} material={materials.sw222_paint} position={[-81.8, 77.183, 112.079]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_exhausttip_L_amg_line_2013_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[54.47, 34.494, -253.182]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_exhausttip_R_amg_line_2013_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[-54.121, 34.494, -253.373]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_lip_brabus_2017_sw222_main_alt_2_0.geometry} material={materials.sw222_main_alt_2} position={[0.047, 102.747, -251.426]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.sw222_wheel_amg_sw222_main_alt_2028_0.geometry} material={materials['sw222_main_alt_2.028']} position={[85.649, 34.166, 137.755]} rotation={[-Math.PI / 2, 0, 0]} scale={108.894} />
        <mesh geometry={nodes['Object_4003_Scene_-_Root001_0'].geometry} material={materials['Scene_-_Root.001']} position={[75.102, 36.622, 140.663]} rotation={[-Math.PI / 2, 0, 0]} scale={[127.027, 104.296, 104.296]} />
        <mesh geometry={nodes.sw222_wheel_amg001_sw222_main_alt_2028_0.geometry} material={materials['sw222_main_alt_2.028']} position={[85.649, 34.166, -160.116]} rotation={[-Math.PI / 2, 0, 0]} scale={108.894} />
        <mesh geometry={nodes['Object_4001_Scene_-_Root001_0'].geometry} material={materials['Scene_-_Root.001']} position={[75.102, 36.622, -157.208]} rotation={[-Math.PI / 2, 0, 0]} scale={[127.027, 104.296, 104.296]} />
        <mesh geometry={nodes.sw222_wheel_amg002_sw222_main_alt_2028_0.geometry} material={materials['sw222_main_alt_2.028']} position={[-85.15, 34.166, 137.755]} rotation={[-Math.PI / 2, 0, 0]} scale={[-108.894, 108.894, 108.894]} />
        <mesh geometry={nodes['Object_4002_Scene_-_Root001_0'].geometry} material={materials['Scene_-_Root.001']} position={[-74.603, 36.622, 140.663]} rotation={[-Math.PI / 2, 0, 0]} scale={[-127.027, 104.296, 104.296]} />
        <mesh geometry={nodes.sw222_wheel_amg003_sw222_main_alt_2028_0.geometry} material={materials['sw222_main_alt_2.028']} position={[-85.15, 34.166, -160.116]} rotation={[-Math.PI / 2, 0, 0]} scale={[-108.894, 108.894, 108.894]} />
        <mesh geometry={nodes['Object_4004_Scene_-_Root001_0'].geometry} material={materials['Scene_-_Root.001']} position={[-74.603, 36.622, -157.208]} rotation={[-Math.PI / 2, 0, 0]} scale={[-127.027, 104.296, 104.296]} />
      </group>
    </group>
  )
}

useGLTF.preload('/mercedes.gltf')
