import React, { useState } from 'react';
import './ArticleView.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footers from '../components/Footers';
import Comment_share from './Comment_share';
import Latest_articles from '../components/MostPopular';
import TechnologyCards from '../components/TechnologyCards';

const ArticleView = ({ data: initialData, onAction }) => {
  const [articleData, setArticleData] = useState(initialData);

  const handleDataChange = (newData) => {
    setArticleData({
      title: newData.title,
      category: newData.category,
      text: newData.text,
      image: newData.image
    });
  };

  return (
    <div className='main-div-article'>
      <div className='Article-content-area'>
        <div className='left'>
          <div aria-label="breadcrumb" className='breadcrumb'>
            <ol className="breadcrumb">
              <li className="breadcrumb-item" onClick={onAction}>Home</li>
              <li className="breadcrumb-item active">{articleData.category}</li>
            </ol>
          </div>

          <h1>{articleData.title}</h1>
          <Comment_share />
          <img src={articleData.image} alt="Article Illustration" />
          <p>{articleData.text}</p>
          <div className='extraheading'>
            <div className='Heading-1'>
              <h2><span>TECHNOLOGY</span></h2>
            </div>
            <TechnologyCards />
          </div>
          <div className='comment-section'>
            <form>
              <textarea required placeholder='Comment:*......' /><br />
              <input type='text' required placeholder='Name:*' /><br />
              <input type='email' required placeholder='Email:*' /><br />
              <input type='url' placeholder='Website:' /><br />
              <div className='checkbox-class'>
                <input type="checkbox" />
                <p className='agree-text'> Save my name, email, and website in this browser for the next time I comment.</p>
              </div>
              <button type="submit">POST COMMENT</button>
            </form>
          </div>
        </div>

        <div className='right'>
          <div className='Heading-3'>
            <h2><span>LATEST ARTICLES</span></h2>
          </div>
          <Latest_articles onDataChange={handleDataChange} />
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
