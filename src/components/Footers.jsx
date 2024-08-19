import React from 'react'
import { IoEarthSharp } from "react-icons/io5";
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram, } from "react-icons/ti";
import { RiWhatsappLine } from "react-icons/ri";
import './Footers.css'
const Footers = () => {
  return (
    <div>
      <footer>

        <div className='footer-list'>
          <div className='Footer_one'>
            <h3>Company</h3>
            <a href=''><p></p>About</a>
            <a href=''><p></p>Contact</a>
            <a href=''><p></p>Career</a>
            <a href=''><p></p>Team</a>
            <a href=''><p></p>privacy</a>
            <a href=''><p></p>Sitemaps</a>

          </div>
          <div className='Footer_two'>
            <h3>Design services</h3>
            <a href=''><p></p>Design contests</a>
            <a href=''><p></p>1-to-1 Projects</a>
            <a href=''><p></p>Find a designer</a>
            <a href=''><p></p>Discover inspiration</a>
            <a href=''><p></p>Pricing</a>


          </div>
          <div className='Footer_three'>
            <h3>Contact</h3>
            <a href=''><p></p>theusmansarwar26@gmail.com</a>
            <a href=''><p></p>+923278000326</a>
            <a href=''><p></p>Johar Town Lahore, Punjab, Pakistan 57000</a>
            <div className='social-icon'>
              <TiSocialFacebook />
              <TiSocialTwitter />
              <TiSocialLinkedin />
              <TiSocialInstagram />
              <RiWhatsappLine />
            </div>

          </div>
        </div>
        <hr />
        <div className='credit'>Copyright © 2024 - 2024 StartupPAkistan.com. All Rights Reserved.  Powered by ROCCO video</div>
      </footer>
    </div>
  )
}

export default Footers