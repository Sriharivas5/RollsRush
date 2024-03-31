import React from 'react'
import "./App.css"
import HeroSection from './Pages/HomePage/HeroSection/HeroSection'
import AnimatedCursor from "react-animated-cursor"
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'

import car2 from './Pages/HomePage/Gltf/Car2/Car2'
import Bmwm4 from './Pages/HomePage/Gltf/Bmwm4/Bmwm4'
import Bmwf82 from './Pages/HomePage/Gltf/BmwF82/Bmwf82'
import Mclaren from './Pages/HomePage/Gltf/Mclaren/Mclaren'
import Mercedes from './Pages/HomePage/Gltf/Mercedes/Mercedes'
import Hongqi from './/Pages/HomePage/Gltf/Hongqi/Hongqi'
import Sports from './Pages/HomePage/Gltf/Sports/Sports'
import FreeConcept11 from './Pages/HomePage/Gltf/FreeConcept11/FreeConcept11'
import FreeConcept3 from './Pages/HomePage/Gltf/FreeConcept3/FreeConcept3'
import Bugatti from './Pages/HomePage/Gltf/Bugatti/Bugatti'
const App = () => {
  return (
    <div>
      {/* <AnimatedCursor
        innerSize={10}
        outerSize={25}
        color='255, 255, 255'
        outerAlpha={0.4}
        innerScale={0.9}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      /> */}
      {/* <HeroSection /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={HeroSection} />
          <Route path='/car2' exact Component={car2} />
          <Route path='/Bmwm4' exact Component={Bmwm4} />
          <Route path='/Bmwf82' exact Component={Bmwf82} />
          <Route path='/Mclaren' exact Component={Mclaren} />
          <Route path='/Mercedes' exact Component={Mercedes} />
          <Route path='/Hongqi' exact Component={Hongqi} />
          <Route path='/Sports' exact Component={Sports} />
          <Route path='/FreeConcept11' exact Component={FreeConcept11} />
          <Route path='/FreeConcept3' exact Component={FreeConcept3} />
          <Route path='/Bugatti' exact Component={Bugatti} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
