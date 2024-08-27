import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './ArticleView.css';
import '../Ads/DummyAd.css';

import { IoCloseOutline } from "react-icons/io5";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footers from '../Footer/Footers';
import Header from '../Header/Header';

import Login from '../Forms/Login';
const ArticleView = ({ data: initialData, menuClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state?.data;
  const [articleData, setArticleData] = useState(locationData || initialData);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  useEffect(() => {
    if (locationData) {
      setArticleData(locationData);
    }
  }, [locationData]);
  const handleCloseClick = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  const handleSignIn = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }


  useEffect(() => {
    const loadAds = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e.message);
      }
    };

    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.onload = loadAds;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (<>
    {isLoginVisible && (
      <div className='login-div'>
        <IoCloseOutline className='close-btn' onClick={handleCloseClick} />
        <Login />
      </div>
    )}
    <div className='ArticleView'>

      <Header  handleSignIn={handleSignIn} menuClick={menuClick} />
      <h1>{articleData.title}</h1>
      <p className='upload-info'>by {articleData.by} | {formatDate(articleData.created_at)} </p>
      <img src={articleData.image} />
      <div className='article-content'>
        <div className='left'>
          <div className="dummy-ad-vertical">
            <p>Ad Space</p>
            <p>160 x 600</p>
          </div>
        </div>
        <div className='mid'>
          <p>{articleData.text}</p>
          <div className="dummy-ad-large">
            <p>Ad Space</p>
            <p>336 x 280</p>
          </div>
        </div>
        <div className='right'>
          <div className="dummy-ad-vertical">
            <p>Ad Space</p>
            <p>160 x 600</p>
          </div>
        </div>

      </div>

      <div className='FOOTER'>
        <Footers />
      </div>

    </div>

    </>
  );
};

export default ArticleView;
