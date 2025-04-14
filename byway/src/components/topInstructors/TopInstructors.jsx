import React from 'react';
import './topinstructors.css';
import Instructor from '../../assets/model-5.jpg';
import {ReactComponent as Star} from '../../assets/star.svg';

import data from '../../datas.json';


const TopInstructors = () => {

  const instructors = data.instructors;

  return (
    <div className='topInstructorsContainer'>
      <div className="topInstructors">
          <h3>Top Instructors</h3>
          <a href="#">See All</a>
      </div>
      <div className='instructors'>

        {instructors.map(instructor => (

        <div key={instructor.id} className='instructorCard'>
          <div className="top">
            <img src={Instructor} alt="Instructor" className='imgInstructor' />
            <div className="about">
              <h4>{instructor.name}</h4>
              <p>{instructor.sub}</p>
            </div>
          </div>
          <div className="bottom">
            <div className="rating">
              <Star className='star' />
              <p>{instructor.rating}</p>
            </div>
            <p className="students">{instructor.students}</p>
          </div>
        </div>

        ))}

      </div>
    </div>
  );
};

export default TopInstructors;
