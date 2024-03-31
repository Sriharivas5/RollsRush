import React, { useState } from 'react';
import "./Card3d.css"
import { Link } from 'react-router-dom';
import img1 from "./assets3d/img1.png"
import img2 from "./assets3d/img2.png"
import img5 from "./assets3d/img5.png"
import img4 from "./assets3d/img4.png"

import image1 from '../Gltf/GltfSideBar/assets/image1.png'
import image2 from '../Gltf/GltfSideBar/assets/image2.png'
import image3 from '../Gltf/GltfSideBar/assets/image3.png'
import image4 from '../Gltf/GltfSideBar/assets/image4.png'
import image5 from '../Gltf/GltfSideBar/assets/image5.png'
import image6 from '../Gltf/GltfSideBar/assets/image6.png'
import image7 from '../Gltf/GltfSideBar/assets/image7.png'
import image8 from '../Gltf/GltfSideBar/assets/image8.png'



const Card3d = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
    };

    return (
        <div className='card3dMain'>
            <div className="cards3dHeading">
                <h2>Top Selling Cars</h2>
            </div>
            <div id='cards3d'>
                <div
                    className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="image3d">
                                <img src={image1} alt="" />
                            </div>
                            <div className="content3d">
                                <h2> QuantumDrive XZ</h2>
                                <h5>Top Speed : 450km/h</h5>
                                <h4>Torque : 1200 Nm</h4>
                                <p>PRICE : ₹20 crores</p>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <Link to='/FreeConcept11'><button>View 360&deg;</button></Link>

                        </div>
                    </div>
                </div>

                <div
                    className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >

                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="image3d">
                                <img src={image2} alt="" />
                            </div>
                            <div className="content3d">
                                <h2>HyperLuxe Velocity</h2>
                                <h5>Top Speed : 500km/h</h5>
                                <h4>Torque: 1100 Nm</h4>
                                <p>PRICE: ₹25 Crores</p>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <Link to='/Bugatti'><button>View 360&deg;</button></Link>
                        </div>
                    </div>
                </div>

                <div
                    className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="image3d">
                                <img src={image3} alt="" />
                            </div>
                            <div className="content3d">
                                <h2>NanoFlare Epsilon </h2>
                                <h5>Top Speed : 400km/h</h5>
                                <h4>CO2 Emissions: Zero</h4>
                                <p>PRICE: ₹18 Crores</p>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <Link to='/FreeConcept3'><button>View 360&deg;</button></Link>
                        </div>
                    </div>
                </div>

                <div
                    className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >

                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="image3d">
                                <img src={image4} alt="" />
                            </div>
                            <div className="content3d">
                                <h2> FusionTrek Alpha</h2>
                                <h5>Top Speed : 550km/h</h5>
                                <h4>Torque: 1300 Nm</h4>
                                <p>PRICE: ₹30 Crores</p>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <Link to='/Sports'><button>View 360&deg;</button></Link>
                        </div>
                    </div>
                </div>


                <div
                    className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="image3d">
                                <img src={image6} alt="" />
                            </div>
                            <div className="content3d">
                                <h2>Mercedes-Benz </h2>
                                <h5>Top Speed : 250km/h</h5>
                                <h4>Up to 300 hp (375 kW)</h4>
                                <p>PRICE: ₹2.7 Crore</p>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <Link to='/Mercedes'><button>View 360&deg;</button></Link>
                        </div>
                    </div>
                </div>


                <div
                    className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="image3d">
                                <img src={image5} alt="" />
                            </div>
                            <div className="content3d">
                                <h2>MajesticCruiser</h2>
                                <h5>Top Speed : 320km/h</h5>
                                <h4>Engine Type: Electric </h4>
                                <p>PRICE: ₹30 Crores</p>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <Link to='/Hongqi'><button>View 360&deg;</button></Link>

                        </div>
                    </div>
                </div>


                <div
                    className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="image3d">
                                <img src={image7} alt="" />
                            </div>
                            <div className="content3d">
                                <h2>BMW m4 Competition</h2>
                                <h5>280 km/h (174 mph)</h5>
                                <h4>Up to 510 hp (375 kW)</h4>
                                <p>Rs. 1.48 Crore</p>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <Link to='/Bmwm4'><button>View 360&deg;</button></Link>
                        </div>
                    </div>
                </div>

                <div
                    className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="image3d">
                                <img src={image8} alt="" />
                            </div>
                            <div className="content3d">
                                <h2>BMW m4 Coupe</h2>
                                <h5>Top Speed : 155 mph</h5>
                                <h4>317 KW @ 5500 RPM</h4>
                                <p>PRICE: ₹1.48 Crore</p>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <Link to='/Bmwf82'><button>View 360&deg;</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card3d;





