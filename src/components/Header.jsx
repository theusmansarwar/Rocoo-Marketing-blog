
import { TiSocialTwitter } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import { RiInstagramFill, RiVimeoFill, RiYoutubeFill, RiFacebookFill, RiSearchLine } from "react-icons/ri";
import Blacklogo from '../res-img/desktop-black.png';
import whitelogo from '../res-img/desktop-white.png'
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react';
const Header = ({ onAction }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isArticlesVisible, setIsArticlesVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isIndexVisible, setIsIndexVisible] = useState(true);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const handleArticleClick = () => {
    setIsArticlesVisible(!isArticlesVisible);
    setIsIndexVisible(!isIndexVisible);

  };
  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);

  };
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <header className="App-header">
      <nav>
        <div className='top-nav'>
          <div className='left-div'>
            <p className='date-text'>{formattedDate}</p>
            <p className='sign-in-text' onClick={onAction} >Sign in / Join</p>
          </div>
          <div className='right-div'>
            <ul>
              <li><a href='#'><RiFacebookFill /></a></li>
              <li><a href='#'><RiInstagramFill /></a></li>
              <li><a href='#'><TiSocialTwitter /></a></li>
              <li><a href='#'><RiVimeoFill /></a></li>
              <li><a href='#'><RiYoutubeFill /></a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='logo-section'>
        <img src={Blacklogo} alt="Logo" />
      </div>
      <div className='menu-section' id='menu-section' >
        <GiHamburgerMenu className='menu-icon' onClick={handleMenuClick} />
        <div className='menu-logo'>
          <img src={whitelogo} alt="Logo" />
        </div>
        <ul>
          <li >Startups</li>
          <li>Tech</li>
          <li>Business</li>
          <li>Telecom</li>
          <li>Global</li>
          <li>Auto</li>
          <li>Pakistan</li>
          <li>Sports</li>
          <li>Investments</li>
          <li onClick={handleArticleClick}>More</li>
        </ul>
        <RiSearchLine className='search-icon' onClick={handleSearchClick} />
      </div>
      {isSearchVisible && (
        <div className='search-div'>
          <div className="arrow arrow-right"></div>
          <div className='search-section'>
            <input type='search' autoFocus />
            <button>Search</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header