import React from 'react';
import './style.css';
import {ReactComponent as Astrology} from '../../assets/astrology.svg';
import {ReactComponent as Development} from '../../assets/devlopment.svg';
import {ReactComponent as Marketing} from '../../assets/marketing.svg';
import {ReactComponent as Physics} from '../../assets/physics.svg';

const TopCategories = () => {
  return (
    <div className='categoriesContainer'>
      <div className="topCategories">
        <h3>Top Categories</h3>
        <a href="#">See All</a>
      </div>
      <div className='categories'>
        <div className='categoryCard'>
          <span><Astrology className='icon' /></span>
          <h4>Astrology</h4>
          <p>11 Courses</p>
        </div>
        <div className='categoryCard'>
          <span><Development className='icon' /></span>
          <h4>Development</h4>
          <p>12 Courses</p>
        </div>
        <div className='categoryCard'>
          <span><Marketing className='icon' /></span>
          <h4>Marketing</h4>
          <p>12 Courses</p>
        </div>
        <div className='categoryCard'>
          <span><Physics className='icon' /></span>
          <h4>Physics</h4>
          <p>14 Courses</p>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
