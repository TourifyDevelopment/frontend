import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-text.png';
import '../style/buttons.css'

class LandingPage extends Component {
  render() {
    return (
      <nav className='flex justify-between w-screen mt-2 px-2'>
        <img src={logo} alt="tourify" className='h-24 w-auto'/>
        
        <div className="flex justify-end items-center">
          <div className="accent-btn mr-3">
            <Link to='/docs' className='focus-visible:outline-none'>Documentation</Link>
          </div>
          <div className="primary-btn">
            <Link to='/login' className='focus-visible:outline-none'>Get started</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default LandingPage;