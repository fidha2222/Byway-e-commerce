import React from 'react';
import './courselist.css';
import BG from '../../assets/bg.jpg';
import {ReactComponent as Star} from '../../assets/star.svg';
import CourseDetails from '../../pages/coursedetails/CourseDetails';

import data from '../../datas.json';

const CourseList = () => {

  const courses = data.courses;

  return (
    <div className='courselistContainer'>
          <div className="topCourses">
            <h3>Top Courses</h3>
            <a href="#">See All</a>
          </div>
          <div className='courses'>

            {courses.map(course => (

            <div key={course.id} className='courseCard'>
              <img src={BG} alt="Course" />
              <div className="aboutCourse">
                <h4><a href={CourseDetails}>{course.title}</a></h4>
                <h6>By Ronald Richards</h6>
                <div className="rating">
                  <ul className="stars">
                    <li>
                      <Star className="star" />
                    </li>
                    <li>
                      <Star className="star" />
                    </li>
                    <li>
                      <Star className="star" />
                    </li>
                    <li>
                      <Star className="star" />
                    </li>
                    <li>
                      <Star className="star" />
                    </li>
                  </ul>
                  <p>{course.rating}</p>
                </div>
                <p>{course.description}</p>
                <h4 className="courseFee">{course.fees}</h4>
              </div>
            </div>

            ))}

          </div>
        </div>
  );
};

export default CourseList;
