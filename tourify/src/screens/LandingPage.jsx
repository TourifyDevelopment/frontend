import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-text.png';
import logo2 from '../assets/images/logo.png';
import '../style/buttons.css'
import preview from '../assets/images/preview.png'

//First page that is visible when visting the website 
class LandingPage extends Component {
  render() {
    return (
      <>
        <nav className='flex justify-between w-screen mt-2 px-2'>
          <img src={logo} alt="tourify" className='h-24 w-auto' />

          <div className="flex justify-end items-center">
            <div className="accent-btn mr-3">
              <Link to='/docs' className='focus-visible:outline-none'>Documentation</Link>
            </div>
            <div className="primary-btn">
              <Link to='/login' className='focus-visible:outline-none'>Get started</Link>
            </div>
          </div>
        </nav>
        <div className="pl-96 pt-32 w-3/5">
          <div className="flex items-end">
            <img src={logo2} alt="" className='h-52 rounded-lg' />

            <h1 className='text-9xl font-bold pl-4 pb-4'>Tourify</h1>
          </div>
          <h2 className='text-7xl pl-3 pt-4'>Der moderne Weg virtuelle Touren zu erstellen </h2>
          <h2 className='text-3xl mt-4 pl-4'>Aufgrund von Zeitmangel noch nicht fertiggestellt!</h2>
        </div>
        <img src={preview} className='absolute w-2/5 right-16 bottom-16 drop-shadow-2xl skew-y-6  -z-10' />
      </>

    )
  }
}

export default LandingPage;