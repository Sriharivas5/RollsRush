import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navBar'>
      <div className="navBarContainer">
        <div className="logo">
          <Link to='/' > <img src="https://www.freepnglogos.com/uploads/cleveland-auto-show-car-logo-png-25.png" /></Link>
          <Link to='/' >  <h2>RollsRush</h2></Link>
        </div>
        {/* <div classNameName="links ">
          <a href="#"><li>Services</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Rentals</li></a>
          <a href="#"><li>Contact</li></a>
        </div> */}
        <div className="dropdown">
          <button className="dropbtn">Services </button>
          <div className="dropdown-content">
            <a href="#"> Vehicle Sales</a>
            <a href="#"> Car Auctions</a>
            <a href="#"> Financing</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">About</button>
          <div className="dropdown-content">
            <a href="#">Success Stories </a>
            <a href="#">Events & Meetups </a>
            <a href="#">Community First </a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Rentals</button>
          <div className="dropdown-content">
            <a href="#">Economy </a>
            <a href="#">Compact </a>
            <a href="#">Luxury </a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Contact</button>
          <div className="dropdown-content">
            <a href="#">Whatsapp </a>
            <a href="#">Facebook </a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
