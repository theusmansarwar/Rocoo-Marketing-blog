import React, { useState } from 'react';
import { TiSocialTwitter } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import { RiInstagramFill, RiVimeoFill, RiYoutubeFill, RiFacebookFill, RiSearchLine } from "react-icons/ri";
import Blacklogo from '../res-img/desktop-black.png';
import whitelogo from '../res-img/desktop-white.png'
import Featured_Posts from './Featured_Posts';
import TechnologyCards from './TechnologyCards';
import MostPopular from './MostPopular';
import Globaltech from './Globaltech';
import LowerpostTemplate from './LowerpostTemplate';
import Login from './Login';
import ArticleView from './ArticleView';
import { GiHamburgerMenu } from "react-icons/gi";
import GridPost from './GridPost';
import Footers from './Footers';
import Category from './Category';
const imageWidth = '25%';
const imageHeight = '120px';
const Home = () => {

  const ListCategory = ['Tech', 'Entertainment', 'Business', 'Sports', 'Politics', 'Latest', 'Showbiz', 'Global', 'More']


  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isArticlesVisible, setIsArticlesVisible] = useState(false);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isIndexVisible, setIsIndexVisible] = useState(true);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [data, setData] = useState('');
  const handleDataChange = (newData) => {
    setData(newData);
    handleArticleClick();
    
  };

  const handleDataFromGrandchild = (receivedData) => {
    setData(receivedData);
    handleArticleClick();
    console.log("Data received from grandchild:", receivedData);
  };
  const onDataFromGrandchild = (receivedData) => {
    setData(receivedData);
    handleArticleClick();

  };
  const fromgrand = (receivedData) => {
    setData(receivedData);
    handleArticleClick();

  };
  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const handleLoginClick = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  const handleCloseClick = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  const handleArticleClick = () => {
    setIsArticlesVisible(!isArticlesVisible);
    setIsIndexVisible(!isIndexVisible);
  };
  const handleCategoryClick = (category) => {
    return () => {
      setIsArticlesVisible(false);
      setIsIndexVisible(false);
      setIsCategoryVisible(true);
      setSelectedCategory(category);
      setActiveCategory(category);
    };
  };
  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  const backtohome = () => {
    return () => {
      setIsArticlesVisible(false);
      setIsIndexVisible(true);
      setIsCategoryVisible(false);
      setSelectedCategory('');
      setActiveCategory(null);
    };
  };



  return (
    <div className='App'>
      {isLoginVisible && (
        <div className='login-div'>
          <IoCloseOutline className='close-btn' onClick={handleCloseClick} />
          <Login />
        </div>
      )}

      <header className="App-header">
        <nav>
          <div className='top-nav'>
            <div className='left-div'>
              <p className='date-text'>{formattedDate}</p>
              <p className='sign-in-text' onClick={handleLoginClick} >Sign in / Join</p>
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
      <main>
        {isMenuClicked && (
          <div className='SideMenu'>
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

          </div>
        )}
        {isArticlesVisible && (
          <ArticleView data={data} onAction={backtohome()} onDataChange={fromgrand} />
        )}
        {isCategoryVisible && (
          <Category category={selectedCategory} onAction={backtohome()} onDataFromGrandchild={handleDataChange} />
        )}

        {isIndexVisible && (
          <>
            <Featured_Posts onDataChange={handleDataChange} />
            <div className='Content-area'>

              <div className='left-side-content'>

                <div className='Heading-1'>
                  <h2 onClick={handleArticleClick}><span>TECHNOLOGY</span></h2>
                </div>
                <TechnologyCards onDataChange={onDataFromGrandchild} category={'Tech'} />
                <Globaltech onDataFromGrandchild={handleDataFromGrandchild} />
                <div className='Heading-3'>
                  <h2><span>BUSINESS</span></h2>
                </div>

                <LowerpostTemplate repetitions={4} category="Business" onDataChange={onDataFromGrandchild}
                  imageWidth={imageWidth}
                  imageHeight={imageHeight}
                  offset={0} />

                <div className='Heading-3'>
                  <h2><span>LATEST ARTICLES</span></h2>
                </div>
                {/* < Latest_articles  onDataChange={handleDataChange}/> */}

                <div className='latest-articles-div'>
                  <GridPost category="Latest" offset={0} repetitions={6} onDataChange={handleDataChange} />
                </div>

              </div>
              <div className='right-side-content'>
                <div className='Heading-2'>
                  <h2><span>MOST POPULAR</span></h2>
                </div>
                <MostPopular onDataChange={handleDataChange} />

                <div className='Heading-1'>
                  <h2><span>Sports</span></h2>
                </div>
                <GridPost category="Sports" repetitions={4} offset={0} onDataChange={handleDataChange}  />


              </div>
            </div>
          </>
        )}
      </main>
      <Footers />
    </div>
  )
}

export default Home