import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import styles from './Footer.module.css' // Import CSS module
import LOGOIMAGE from '../../assets/Logo-4.png'
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            gap: '100px'
          }}
        >
          <div style={{height: "250px", width: "250px", marginTop: -150, marginLeft: -100}}>
            <img height={"100%"} width={"100%"} style={{objectFit:"contain"}} className='logo' src={LOGOIMAGE} alt='LOGO' />
          </div>

          <div className={styles.links}>
            <div>
              <h5 style={{ color: '#abb2b9' }}>Sitemap</h5>
            </div>
            <div style={{ width: '100%' }}>
              <Link to='/' className={styles.link}>
                Overview
              </Link>
              <Link to='/portfolio-tracker' className={styles.link}>
                Portfolio Tracker
              </Link>
              <Link to='/dividend-tracker' className={styles.link}>
                {' '}
                Dividend Tracker
              </Link>
              <Link to='/assests' className={styles.link}>
                Assests
              </Link>
              <Link to='/stock-forum' className={styles.link}>
                Stock Forum
              </Link>
            </div>
          </div>
          <div className={styles.links}>
            <div>
              <h5 style={{ color: '#abb2b9' }}>Legal</h5>
            </div>
            <div>
              <Link to='/' className={styles.link}>
                General Terms and Conditions
              </Link>
              <Link to='/portfolio-tracker' className={styles.link}>
                Imprint
              </Link>
              <Link to='/dividend-tracker' className={styles.link}>
                {' '}
                Privacy
              </Link>
              <Link to='/assests' className={styles.link}>
                Advertising Customer GTC
              </Link>
            </div>
          </div>
          <div className={styles.links}>
            <div>
              <h5 style={{ color: '#abb2b9' }}>Resources</h5>
            </div>
            <div>
              <Link to='/' className={styles.link}>
                Help Center
              </Link>
              <Link to='/portfolio-tracker' className={styles.link}>
                Community Guidelines
              </Link>
              <Link to='/dividend-tracker' className={styles.link}>
                {' '}
                Partner Program
              </Link>
              <Link to='/assests' className={styles.link}>
                Advertise with us
              </Link>
            </div>
          </div>
          <div className={styles.links}>
            <div>
              <h5 style={{ color: '#abb2b9' }}>Connect</h5>
            </div>
            <div style={{ display: 'flex' }}>
              <Link to='https://facebook.com' className={styles.icon}>
                <FaFacebook />
              </Link>
              <Link to='https://twitter.com' className={styles.icon}>
                <FaTwitter />
              </Link>
              <Link to='https://instagram.com' className={styles.icon}>
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* <div className={styles.socialMedia}>
          <Link to="https://facebook.com" className={styles.icon}><FaFacebook /></Link>
          <Link to="https://twitter.com" className={styles.icon}><FaTwitter /></Link>
          <Link to="https://instagram.com" className={styles.icon}><FaInstagram /></Link>
        </div> */}
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} FinTracker. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
