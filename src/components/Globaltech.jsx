import {React,useState} from 'react';
import './Globaltech.css';

import UpperPostTemplate from '../components/UpperPost_template';
import LowerpostTemplate from '../components/LowerpostTemplate';
const imageWidth = '40%';
const imageHeight = '100px';
const Globaltech = ({onDataFromGrandchild}) => {

    
    return (
        <div className='Globaltech'>
            <div className='left'>
                <div className='Heading-1'>
                    <h2><span>GLOBAL TECH</span></h2>
                </div>
                <UpperPostTemplate category="Tech" repetitions={1} offset={0} onDataChange={onDataFromGrandchild} />
                <LowerpostTemplate category="Tech" repetitions={2} onDataChange={onDataFromGrandchild}

                    imageWidth={imageWidth}
                    imageHeight={imageHeight}
                    offset={1} />
            </div>

            <div className='right'>
                <div className='Heading-1'>
                    <h2><span>Sports</span></h2>
                </div>
                <UpperPostTemplate category="Sports" repetitions={1} offset={0}  onDataChange={onDataFromGrandchild} />
                <LowerpostTemplate category="Sports" repetitions={2} onDataChange={onDataFromGrandchild} 
                    imageWidth={imageWidth}
                    imageHeight={imageHeight}
                    offset={1} />
            </div>
        </div>
    );
}

export default Globaltech;
