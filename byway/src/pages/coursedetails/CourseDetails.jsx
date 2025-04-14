import React from 'react';
import { useParams } from 'react-router-dom';
import './coursedetails.css';

import Header from '../../components/header/Header';
import LearnersReviews from '../../components/learnersreview/LearnersReview';
import Testimonials from '../../components/testimonials/Testimonials';
import CourseList from '../../components/courseList/CourseList';
import Footer from '../../components/footer/Footer';

import {ReactComponent as DownArrow} from '../../assets/arrow-down.svg';
import RightArrow from '../../assets/short-arrow-right-black.svg';
import Language from '../../assets/language.svg';
import Star from '../../assets/star.svg';
import span8 from '../../assets/span-8.svg';
import achive from '../../assets/achive.svg';
import cap from '../../assets/cap.svg';
import play from '../../assets/play.svg';
import Image from '../../assets/img.jpg';
import socialMedia from '../../assets/social-media.jpg';

import data from '../../datas.json';


const CourseDetails = ({ courses, match }) => {
    const { courseId } = useParams();
    const course = courses.find(c => c.id === parseInt(courseId));
    
    if (!course) return <div>Course not found</div>;

    const instructors = data.instructors;
    const selectedInstructor = instructors.find(instructor => instructor.id === course.instructorId);

    const imageMap = {
      "InstructorImg": span8,
    };

    return (
        <div className='MainPageContainer'>
          <div className="pageContainer">
            <Header />
          </div>
          <div className="courseHeroContainer">
            <div className="pageContainer">
              <div className="courseHero">
                <div className="left">
                  <ul className="top">
                    <li><a href="">Home</a></li>
                    <li><img src={RightArrow} alt="" /></li>
                    <li><a href="">Categories</a></li>
                    <li><img src={RightArrow} alt="" /></li>
                    <li><a href="#" className='title'>Introduction to User Experience Design</a></li>
                  </ul>
                  <h1>{course.title}</h1>
                  <p>{course.about}</p>
                  <div className="about">
                    <div className="rating">
                      <h6>4.9</h6>
                      <ul>
                        <li><img src={Star} alt="" /></li>
                        <li><img src={Star} alt="Star" /></li>
                        <li><img src={Star} alt="Star" /></li>
                        <li><img src={Star} alt="Star" /></li>
                        <li><img src={Star} alt="Star" /></li>
                      </ul>
                      <p>{course.rating}</p>
                    </div>
                    <p>{course.description}</p>
                  </div>
                  <div className="courseInstructor">
                    <img src={span8} alt="" />
                    <p>Created by <a href="">{course.instructor || 'Unknown'}</a></p>
                  </div>
                  <div className="language">
                    <img src={Language} alt="" />
                    <p>{course.languages}</p>
                  </div>
                  
                </div>
                <div className="right">
                  <img src={Image} alt="" />
                  <div className="fees">
                    <h3>$49.5</h3>
                    <h6>$99.5</h6>
                    <h3 className="offer">50% Off</h3>
                  </div>
                  <button className='addToCart'>Add To Cart</button>
                  <button className='buyNow'>Buy Now</button>
                  <div className="share">
                    <p>Share</p>
                    <img src={socialMedia} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pageContainer">

            <div className="filter">
              <p>Description</p>
              <p>Instructor</p>
              <p>Syllabus</p>
              <p>Reviews</p>
            </div>

            <div className="courseDescription">
              <h3>Course Description</h3>
              <p>This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises. </p>
            </div>

            <div className="certificate">
              <h3>Certification</h3>
              <p>At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you will earn a prestigious certification that not only validates your expertise but also opens doors to new opportunities in your chosen field.</p>
            </div>

            {selectedInstructor ? (
            <div className="InstructorContainer">
              <h3>Instructor</h3>
              <h2 key={selectedInstructor.id}>{selectedInstructor.name}</h2>
              <p className="designation">{selectedInstructor.sub}</p>
              <div className="instructor">
                <img src={imageMap[selectedInstructor.ImgProfile]} alt={`${selectedInstructor.name}'s profile`} className='InstructorImg' />
                <div className="details">
                  <span className='one'>
                    <img src={achive} alt="" className='achive' />
                    <p className="reviews">{selectedInstructor.reviews}</p>
                  </span>
                  <span className='two'>
                    <img src={cap} alt="" className='cap' />
                    <p className="students">{selectedInstructor.students_course01}</p>
                  </span>
                  <span className='three'>
                    <img src={play} alt="" className='play' />
                    <p className="courses">{selectedInstructor.no_courses}</p>
                  </span>
                </div>
              </div>
              <p className="about">{selectedInstructor.description}</p>
            </div>
            ) : (
              <p>No instructor found.</p>
            )}

            <div className="courseSyllabus">
              <h3>Syllabus</h3>
              <div className="syllabus">
                <ul>
                  <li>
                    <div className="left">
                      <DownArrow />
                      <h5>Introduction to UX Design</h5>
                    </div>
                    <div className="right">
                      <p className="lessons">5 Lessons</p>
                      <p className="hours">1 hour</p>
                    </div>
                  </li>
                  <li>
                    <div className="left">
                      <DownArrow />
                      <h5>Basics of User-Centered Design</h5>
                    </div>
                    <div className="right">
                      <p className="lessons">5 Lessons</p>
                      <p className="hours">1 hour</p>
                    </div>
                  </li>
                  <li>
                    <div className="left">
                      <DownArrow />
                      <h5>Elements of User Experience</h5>
                    </div>
                    <div className="right">
                      <p className="lessons">5 Lessons</p>
                      <p className="hours">1 hour</p>
                    </div>
                  </li>
                  <li>
                    <div className="left">
                      <DownArrow />
                      <h5>Visual Design Principles</h5>
                    </div>
                    <div className="right">
                      <p className="lessons">5 Lessons</p>
                      <p className="hours">1 hour</p>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
            <LearnersReviews />
          </div>
          <Testimonials />
          <div className="pageContainer">
            <CourseList />
          </div>
          <Footer />
        </div>
    );
};

export default CourseDetails;