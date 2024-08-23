import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ArticleView from './components/ArticleView';
import Home from './components/Home';
import Category from './components/Category';
import SideMenu from './components/SideMenu';

function App() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <Router>
      {isMenuClicked && <SideMenu />}
      <Routes>
        <Route path="/" element={<Home menuClick={handleMenuClick} />} />
        <Route path="/category/:category" element={<Category menuClick={handleMenuClick} />} />
        <Route path="/article/:title" element={<ArticleView menuClick={handleMenuClick}/>} />
      </Routes>
    </Router>
  );
}

export default App;
