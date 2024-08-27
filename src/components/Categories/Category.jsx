import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Category.css'
import { IoCloseOutline } from "react-icons/io5";
import MostPopular from '../Popular/MostPopular';
import ContentTemplate from '../Templates/ContentTemplate'
import UpperPostTemplate from '../Templates/UpperPost_template';
import Header from '../Header/Header';
import Footers from '../Footer/Footers';
import Login from '../Forms/Login';
const Category = ({ category, onAction,menuClick}) => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const locationData = location.state?.data;
  const [data, setData] = useState(locationData || '');
  const handleCloseClick = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  const handleDataChange = (newData) => {
    setData(newData);

    navigate(`/article/${formatTitleForURL(newData.title)}`, { state: { data: newData } });

  };
  const handleSignIn = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  
  const formatTitleForURL = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };
  return (
    <div className='category-background'>
       {isLoginVisible && (
        <div className='login-div'>
          <IoCloseOutline className='close-btn' onClick={handleCloseClick} />
          <Login />
        </div>
      )}
          <Header handleSignIn={handleSignIn} menuClick={menuClick}/>
       
    <div className='category-div-area'>
 
      {/* <div aria-label="breadcrumb" className='breadcrumb'>
        <ol className="breadcrumb">
          <li className="breadcrumb-item" onClick={onAction}>Home</li>
          <li className="breadcrumb-item active">{category}</li>
        </ol>
      </div> */}
      <h1>{category}</h1>
      <div className='Content-template-section'>
      <ContentTemplate lowerRepititions={2} lowerHeight={'145px'} upperHeight={'300px'}/>
      </div>
      <div className='line-headings'>
              <div className='top'>
                <h3>MOST POPULAR</h3>
                <p>View All</p>
              </div>
              <div className="stripe">
                <span className="stripe-1"></span> <span className="stripe-2"></span>
              </div>
            </div>
            <MostPopular onDataChange={handleDataChange} repetitions={3} />

            <div className='line-headings'>
              <div className='top'>
                <h3>LATEST ARTICLE</h3>
                <p>View All</p>
              </div>
              <div className="stripe">
                <span className="stripe-5"></span> <span className="stripe-2"></span>
              </div>
            </div>
            <UpperPostTemplate repetitions={9} category={''} offset={0} />

   


    </div>
    <Footers/>
    </div>
  )
}

export default Category