import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' 
import LOGOIMAGE from '../../assets/LogoFinal.png'
import { Container } from '@chakra-ui/react'

const Navbar: React.FC = () => {

  return (
    <nav className='navbar'>
      <Container>
        <div className='navbar-container'>
          <div style={{ height: '300px', width: '300px', marginTop: -50 }}>
            <img
              height={'100%'}
              width={'100%'}
              style={{ objectFit: 'contain' }}
              className='logo'
              src={LOGOIMAGE}
              alt='LOGO'
            />
          </div>
          <div>
            <ul className='navbar-links'>
              <li className='nav-item'>
                <Link to='/overview' className='nav-link'>
                  Overview
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/portfolio-tracker' className='nav-link'>
                  Portfolio Tracker
                </Link>
              </li>
              
              <li className='nav-item'>
                <Link to='/assests' className='nav-link'>
                  Assests
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/stock-forum' className='nav-link'>
                  Stock Forum
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/latest-news' className='nav-link'>
                  Latest News
                </Link>
              </li>
            </ul>
          </div>
          <div style={{display: "flex", gap: "15px"}}>
            <div className='login'>
              <Link to='/login' className='nav-link'>
                Log in
              </Link>
            </div>
            <div className='signup'>
              <Link to='/signup' className='nav-link'>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
