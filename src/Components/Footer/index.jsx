import React from 'react'
import logo from "../../assets/footer__logo.png"
import { Link } from 'react-router-dom'
import { FiTwitter } from 'react-icons/fi';
import "./style.css"

const Index = () => {
  return (
    <div className="">
      <div className='footer__container'>
        <div className="footer__section">
          <img src={logo} alt="" />
          <span >
            <p>Zecue is a one of a kind video sharing game that guides you on the ultimate adventure of creating real life connections & building deep relationships. be SEEN. be YOU.</p>
          </span>
        </div>
        <div className="footer__section__navlink">
          <div className="">
            <Link to="/support" className='link-unstyled'>Support</Link>
            <Link to="/press" className='link-unstyled'>Press</Link>
            <Link to="/privacy-policy" className='link-unstyled'>Privacy Policy</Link>
            <Link to="/terms-of-service" className='link-unstyled'>Terms of Service</Link>
            <Link to="/community" className='link-unstyled'>Community Guidelines</Link>
            <Link to="/cookie-policy" className='link-unstyled'>Cookie Policy</Link>
            <Link to="/intellectual-property" className='link-unstyled'>Intellectual Property</Link>
            <Link to="/privacy-policy-for-younger-users" className='link-unstyled'>Privacy Policy For Younger Users</Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Zecue Patent Pending</p>
        <Link to="https://twitter.com/zecue_official" target="_blank"><FiTwitter /></Link>
      </div>
    </div>
  )
}

export default Index