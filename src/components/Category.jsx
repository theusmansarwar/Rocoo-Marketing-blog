import React from 'react'
import TechnologyCards from './TechnologyCards'
import './Category.css'
import Latestarticle from './MostPopular'
import Footers from './Footers'
import GridPost from './GridPost'
const Category = ({ category, onAction,onDataFromGrandchild }) => {

  return (
    <div>
      <div aria-label="breadcrumb" className='breadcrumb'>
        <ol className="breadcrumb">
          <li className="breadcrumb-item" onClick={onAction}>Home</li>
          <li className="breadcrumb-item active">{category}</li>
        </ol>
      </div>
      <h1>{category}</h1>
      <div className='techno'>
        <TechnologyCards category={category} onDataChange={onDataFromGrandchild} />
      </div>
      <div className='Categorys-content'>
        <div className='left'>
          <GridPost category={category} repetitions={6} offset={2} onDataChange={onDataFromGrandchild} />
        </div>
        <div className='right'>
          <div className='Heading-2'>
            <h2><span>Latest Article</span></h2>
          </div>
          <Latestarticle onDataChange={onDataFromGrandchild} />

        </div>
      </div>


    </div>
  )
}

export default Category