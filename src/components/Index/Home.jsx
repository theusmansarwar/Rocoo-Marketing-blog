import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";
import Featured_Posts from '../Featured/Featured_Posts';
import MostPopular from '../Popular/MostPopular';
import LowerpostTemplate from '../Templates/LowerpostTemplate';
import Login from '../Forms/Login';
import ContentTemplate from '../Templates/ContentTemplate';
import Footers from '../Footer/Footers';
import Header from '../Header/Header';
import UpperPostTemplate from '../Templates/UpperPost_template';
const Home = ({menuClick}) => {
  const formatTitleForURL = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state?.data;
  const [selectedCategory, setSelectedCategory] = useState(locationData || "");
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(locationData || "");
  const [data, setData] = useState('');
  const handleDataChange = (newData) => {
    setData(newData);

    navigate(`/article/${formatTitleForURL(newData.title)}`, { state: { data: newData } });

  };
  const onDataFromGrandchild = (receivedData) => {
    setData(receivedData);
    navigate(`/article/${formatTitleForURL(receivedData.title)}`, { state: { data: receivedData } });

  };

 
 
  const handleCloseClick = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleSignIn = () => {
    setIsLoginVisible(!isLoginVisible);
  };


  return (
    <div className='App'>
      {isLoginVisible && (
        <div className='login-div'>
          <IoCloseOutline className='close-btn' onClick={handleCloseClick} />
          <Login />
        </div>
      )}
       <Header handleSignIn={handleSignIn} menuClick={menuClick}/>
      <main>
  
       
          <div className='contents-div' >

            <Featured_Posts onDataChange={handleDataChange} />
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


            <div className='Content-area'>

              <div className='left-side-content'>
                <div className='line-headings'>
                  <div className='top'>
                    <h3>TECHNOLOGY</h3>
                    <p>View All</p>
                  </div>
                  <div className="stripe">
                    <span className="stripe-3"></span> <span className="stripe-2"></span>
                  </div>
                </div>

                <ContentTemplate lowerRepititions={4} paddingTop="0px" lowerHeight="85px" upperHeight='370px' />

              </div>
              <div className='right-side-content'>
                <div className='line-headings'>
                  <div className='top'>
                    <h3>GLOBAL TECH</h3>
                    <p>View All</p>
                  </div>
                  <div className="stripe">
                    <span className="stripe-4"></span> <span className="stripe-2"></span>
                  </div>
                </div>
                <LowerpostTemplate repetitions={4} category="Tech" onDataChange={onDataFromGrandchild}
                  offset={0}
                  imageHeight={"85px"} />

              </div>
            </div>

            <div className='line-headings'>
              <div className='top'>
                <h3>LATEST ARTICLE</h3>
                <p>View All</p>
              </div>
              <div className="stripe">
                <span className="stripe-5"></span> <span className="stripe-2"></span>
              </div>
            </div>
            <UpperPostTemplate repetitions={6} category={''} offset={0} onDataChange={onDataFromGrandchild} />




            <div className='Content-area2'>

              <div className='left-side-content2'>
                <div className='line-headings'>
                  <div className='top'>
                    <h3>BUSSINES</h3>
                    <p>View All</p>
                  </div>
                  <div className="stripe">
                    <span className="stripe-3"></span> <span className="stripe-2"></span>
                  </div>
                </div>

                <ContentTemplate display="column" width="100%" paddingTop="20px" lowerRepititions={4} />

              </div>
              <div className='right-side-content2'>
                <div className='line-headings'>
                  <div className='top'>
                    <h3>Sports</h3>
                    <p>View All</p>
                  </div>
                  <div className="stripe">
                    <span className="stripe-1"></span> <span className="stripe-2"></span>
                  </div>
                </div>
                <LowerpostTemplate repetitions={4} category="Tech" onDataChange={onDataFromGrandchild}
                  offset={0}
                  imageHeight={"173px"}
                  description={true} />

              </div>
            </div>

          </div>
      
      </main>
      <Footers />
    </div>
  )
}

export default Home