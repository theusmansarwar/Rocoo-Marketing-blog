import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { TiSocialTwitter } from "react-icons/ti";

import { useNavigate, useLocation } from 'react-router-dom';
import { RiInstagramFill, RiVimeoFill, RiYoutubeFill, RiFacebookFill, RiSearchLine } from "react-icons/ri";

const Header = ({handleSignIn,menuClick}) => {
    const formatTitleForURL = (title) => {
        return title.toLowerCase().replace(/\s+/g, '-');
      };
    const ListCategory = ['Tech', 'Entertainment', 'Business', 'Sports', 'Politics', 'Latest', 'Showbiz', 'Global', 'More']
    const navigate = useNavigate();
    const location = useLocation();
    const locationData = location.state?.data;
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(locationData || "");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [activeCategory, setActiveCategory] = useState(locationData || "");
 
      const handleCategoryClick = (category) => {
        return () => {
          setSelectedCategory(category);
          setActiveCategory(category);
          navigate(`/category/${formatTitleForURL(category)}`, { state: { data: category } });
        };
      };
      const handleMenuClick = () => {
        setIsMenuClicked(!isMenuClicked);
      };
      const handleSearchClick = () => {
        setIsSearchVisible(!isSearchVisible);
      };
      const handleLogoClick = () => {
        navigate('/');
      };
   
  return (
    
    <header className="App-header">
    <nav>
      <div className='top-nav'>
        <div className='left-div'>
          <p className='date-text'>{formattedDate}</p>
        </div>
        <div className='right-div'>
          <ul>
            <li><a href='#'><RiFacebookFill /></a></li>
            <li><a href='#'><RiInstagramFill /></a></li>
            <li><a href='#'><TiSocialTwitter /></a></li>
            <li><a href='#'><RiVimeoFill /></a></li>
            <li><a href='#'><RiYoutubeFill /></a></li>

          </ul>

          <p className='sign-in-text'  onClick={handleSignIn} >Sign in / Join</p>

        </div>
      </div>
    </nav>
    <div className='menu-section' id='menu-section' >

      <GiHamburgerMenu className='menu-icon' onClick={menuClick} />

      <p className='logo-text' onClick={handleLogoClick}>ROCCO BLOGS</p>
      <ul>
        {ListCategory.map((category) => (
          <li
            key={category}
            onClick={handleCategoryClick(category)}
            className={activeCategory === category ? 'active' : ''}
          >
            {category}
          </li>
        ))}
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