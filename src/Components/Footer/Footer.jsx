import React from 'react'
import './Footer.css'
import linkedIn from "./assets/linkedIn.png"
import github from "./assets/github2.png"
import github2 from "./assets/github.png"
import instagram from './assets/instagram.png'
import location from './assets/location.png'
import phone from './assets/phone.png'
import email from './assets/email.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerLogo">
                <h2>ROLLS RUSH</h2>
                <p >Every Drive Is a Royal Adventure!</p>
            </div>
            <hr />
            <div className="footerMiddle">
                <div className='help'>
                    <h3>Help</h3>
                    <p>FAQ</p>
                    <p>Terms & Conditions</p>
                    <p>reporting</p>
                </div>

                <div className='follow'>
                    <h3>Follow Us</h3>
                    <div className='followIcon'><img src={linkedIn} />Linked In <p></p></div>
                    <div className='followIcon'> <img src={github2} /> Git hub<p></p></div>
                    <div className='followIcon'><img src={instagram} /> <p>Instagram</p></div>
                </div>

                <div className='address'>
                    <h3>Address</h3>
                    <div className='followIcon'><img src={location} /> <p>Madhapur ,Hyderabad</p></div>
                    <div className='followIcon'><img src={phone} /> <p>+91 9999999999</p></div>
                    <div className='followIcon'><img src={email} /> <p> rollsrush@gmail.co</p></div>
                </div>

            </div>
            <hr />
            <div className="copyRights">
                <p>Copyright © 2012 - 2024 TermsFeed®. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
