import React, { useState } from 'react'
import "./RapidCount.css"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"

import { GiCarWheel } from "react-icons/gi";
import { GiAutoRepair } from "react-icons/gi";
import { GiPaintBucket } from "react-icons/gi";
const RapidCount = () => {
    const [data, setData] = useState(false)

    return (
        <div>
            <ScrollTrigger
                onEnter={() => setData(true)}
                onExit={() => setData(false)}
            >
                <div className="rapidCount">
                    <div className="wheels">
                        <div className="img">
                            <GiCarWheel id='rapidIcon'/>
                        </div>
                        <div className="rapidCountText">
                            <h3>Wheel Replacement</h3>
                            <h1>

                                {data && <CountUp start={0} end={150} duration={4} />}
                                +
                            </h1>
                        </div>
                    </div>
                    <div className="remodeling">
                        <div className="img">
                            <GiAutoRepair />
                        </div>
                        <div className="rapidCountText">
                            <h3>Interior Remodeling</h3>
                            <h1>

                                {data && <CountUp start={0} end={100} duration={4} />}
                                +
                            </h1>
                        </div>
                    </div>
                    <div className="colourCorrection">
                        <div className="img">
                            <GiPaintBucket />
                        </div>
                        <div className="rapidCountText">
                            <h3>Colour Correction</h3>
                            <h1>

                                {data && <CountUp start={0} end={256} duration={4} />}
                                +
                            </h1>
                        </div>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    )
}

export default RapidCount
