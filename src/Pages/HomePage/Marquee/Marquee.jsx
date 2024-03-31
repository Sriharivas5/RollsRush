import React from "react";
import "./Marquee.css"
import Marquee from "react-fast-marquee";
import marqueeImage1 from "./marqueeAssets/img1.png"
import marqueeImage2 from "./marqueeAssets/img2.png"
import marqueeImage3 from "./marqueeAssets/img3.png"
import marqueeImage4 from "./marqueeAssets/img4.png"
import marqueeImage6 from "./marqueeAssets/img6.png"
const App = () => (
    <Marquee className="marqueeHeading" loop={0}>
        <div className="marqueeImage">
            <img src={marqueeImage1}  />
        </div>
        <div className="marqueeImage">
            <img src={marqueeImage2}  />
        </div>
        <div className="marqueeImage" id="marqueethree">  
            <img src={marqueeImage3}  />
        </div>
        <div className="marqueeImage">
            <img src={marqueeImage4}  />
        </div>
     
        <div className="marqueeImage" id="marqueeLast">
            <img src={marqueeImage6}  />
        </div>


    </Marquee>
);

export default App;