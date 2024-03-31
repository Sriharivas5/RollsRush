import React from 'react'
import "./AvailableCards.css"

import { GiRunningNinja } from "react-icons/gi";
import { FaLaptopFile } from "react-icons/fa6";
import { HiChip } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";

const AvailableCards = () => {
    return (
        <div>
            <div className="availableCards">
                <div className="cardsText">
                    <h2>
                        AVAILABLE USEFUL FEATURES
                    </h2>
                    <h3>
                        These available features make your website load faster, perfectly flexible for small devices, and cool animations & transitions and you will get friendly support.
                    </h3>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="cardIcon">
                            <GiRunningNinja />
                        </div>
                        <div className="cardText">
                            <h3>
                                FAST PERFORMANCE
                            </h3>
                            <p>
                                Optimized for smaller build size, faster work compilation, and lots of other improvements.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardIcon">
                            <FaLaptopFile />
                        </div>
                        <div className="cardText">
                            <h3>
                                PERFECT RESPONSIVE
                            </h3>
                            <p>
                                The Template is fully flexible for all devices. You can visit our template on all devices easily.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardIcon">
                            <HiChip />
                        </div>
                        <div className="cardText">
                            <h3>
                                AWESOME FEATURES
                            </h3>
                            <p>
                                Simple & Nice Transitions make the template awesome. You can easily use the transitions.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardIcon">
                            <BiSupport />
                        </div>
                        <div className="cardText">
                            <h3>
                                FRIENDLY SUPPORT
                            </h3>
                            <p>
                                We provide 24/7 support for our all clients. You can purchase the template without any hesitation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvailableCards
