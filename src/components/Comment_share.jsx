import React from 'react'
import './Comment_share.css';
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaComment } from "react-icons/fa6";
import { FaWhatsapp, FaPinterestP, FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

const Comment_share = () => {
  const Uploader_name = "Usman";
  const Date = "August 7, 2024";
  return (
    <div className='Comment_share'>
      <div className='upper-section'>
        <div className='left-section'>
          <IoPersonCircleSharp className='person-icon' />
          <p>By: <b>{Uploader_name} </b> {Date}</p>
        </div>
        <div className='right-section'>
          < FaComment className='person-icon' />
          <p>0</p>
        </div>
      </div>
      <div className='lower-section'>
        <div className='Social-media-icon1'> <TiSocialFacebook /><hr /> Facebook</div>
        <div className='Social-media-icon2'><FaTwitter /><hr /> Twitter</div>
        <div className='Social-media-icon3'><FaPinterestP /><hr /> Pinterest</div>
        <div className='Social-media-icon4'><FaWhatsapp /><hr /> Whatsapp</div>
      </div>
    </div>
  )
}

export default Comment_share