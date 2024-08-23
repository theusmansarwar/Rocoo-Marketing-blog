import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram, } from "react-icons/ti";
import { RiWhatsappLine } from "react-icons/ri";

import './Footers.css'
const Footers = () => {
  return (
   
      <div className='footer'>

        <div className='footer-list'>
          <div className='Footer_one'>
            <h4>Product</h4>
            <ul>
            <li><a href=''>Employee database</a></li>
            <li> <a href=''>Payroll</a></li>
            <li><a href=''>Absences</a></li>
            <li><a href=''>Time tracking</a></li>
            <li><a href=''>Shift planner</a></li>
            <li><a href=''>Recuriting</a></li>
            </ul>
          </div>
          <div className='Footer_two'>
          <h4>Information</h4>
            <ul>
            <li><a href=''>FAQ</a></li>
            <li> <a href=''>Blog</a></li>
            <li><a href=''>Support</a></li>
           
            </ul>

          </div>
          <div className='Footer_three'>
          <h4>Company</h4>
            <ul>
            <li><a href=''>About us</a></li>
            <li> <a href=''>Careers</a></li>
            <li><a href=''>Contact us</a></li>
            <li><a href=''>Lift Media</a></li>
            </ul>
           

          </div>
          <div className='Footer_four'>
            <h4>Subscribe</h4>
            <div class="input-container">
   
    <input class="input-field" type="email" placeholder="Email Address" name="email"/>
    <FaArrowRight class="email-btn-icon"/>
  </div>
            <p>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
          
           

          </div>
        </div>
        <hr />
        <div className='footer-last-div'>
          <p className='footer-Logo-text'>ROCCO BLOGS</p>
          <ul>
            <li><a href=''>Terms</a></li>
            <li><a href=''>Privacy</a></li>
            <li><a href=''>Cookies</a></li>
            </ul>
           <div className='social-icon'>
              <TiSocialFacebook className='footer-icons'/>
              <TiSocialTwitter className='footer-icons'/>
              <TiSocialLinkedin className='footer-icons'/>
              <TiSocialInstagram className='footer-icons'/>
              <RiWhatsappLine className='footer-icons'/>
            </div></div>
        <div className='credit'>Copyright © 2024 RoccoBlogs.com All Rights Reserved</div>
      </div>
  
  )
}

export default Footers