import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LowerpostTemplate from './LowerpostTemplate';
import Fullpost from './Fullpost';
import './ContentTemplate.css';

const ContentTemplate = ({ display, width ,paddingTop ,lowerRepititions,lowerHeight,upperHeight }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state?.data;
  const [data, setData] = useState(locationData || '');

  const onDataFromGrandchild = (receivedData) => {
    setData(receivedData);
    navigate(`/article/${formatTitleForURL(receivedData.title)}`, { state: { data: receivedData } });
  };

  const formatTitleForURL = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className='ContentTemplate' style={{ flexDirection: display}}>
      <div className='left' style={{ width ,height: upperHeight}}>
        <Fullpost category="Tech"  onDataChange={onDataFromGrandchild} />
      </div>
      <div className='right' style={{ width, paddingTop}}>
        <LowerpostTemplate
          repetitions={lowerRepititions}
          category="Tech"
          onDataChange={onDataFromGrandchild}
          offset={1}
          imageHeight={lowerHeight}
        />
      </div>
    </div>
  );
}

export default ContentTemplate;
