import React from 'react';
import './home.css';
import Footer from '../../components/footer/Footer';
import TopCategories from '../../components/topCategories/TopCategories';
import CourseList from '../../components/courseList/CourseList';
import TopInstructors from '../../components/topInstructors/TopInstructors';
import Testimonials from '../../components/testimonials/Testimonials';
import { ReactComponent as Logo } from '../../assets/logo.svg'; //logo
import { ReactComponent as Cart } from '../../assets/cart.svg';
import Student1 from '../../assets/01.png';
import Student2 from '../../assets/02.png';
import Student3  from '../../assets/03.png';
import One from '../../assets/model-4.jpg';
import Two from '../../assets/model-6.jpg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

const Home = () => {
  return (
    <div className='mainContainer'>
        <div className='container'>
            <header className="header">
                <div className='left'>
                    <Logo className="logo" />
                    Byway
                </div>
                <nav>
                    <a href="/"> 
                        <Cart className="cart" /> 
                    </a>
                    <button className='login'> Log In</button>
                    <button className='signup'>Sign Up</button>
                </nav>
            </header>
            <div className='spotlight'> 
                <div className="left">
                    <h1>Unlock Your Potential <br></br>with Byway</h1>
                    <p>Welcome to Byway, where learning knows no bounds. We believe that <br></br> education is the key to personal and professional growth, and we're here to <br></br>guide you on your journey to success. </p>
                    <button className='buttonSpotlight'>Start your instructor journey</button>
                </div>
                <div className="right">
                    <div className="one">
                        <img src={Student1} alt="student" className='student1' />
                        <div><span></span></div>
                    </div>
                    <div className="two">
                        <img src={Student2} alt="student" className='student2' />
                        <img src={ Student3} alt="student" className='student3' />
                    </div>
                </div>
            </div>
        </div>
        <div className="stats">
            <ul>
                <li>
                    <h3>250+</h3>
                    <p>Courses by our best mentors</p>
                </li>
                <li className='line'></li>
                <li>
                    <h3>1000+</h3>
                    <p>Courses by our best mentors</p>
                </li>
                <li className='line'></li>
                <li>
                    <h3>15+</h3>
                    <p>Courses by our best mentors</p>
                </li>
                <li className='line'></li>
                <li>
                    <h3>2400+</h3>
                    <p>Courses by our best mentors</p>
                </li>
            </ul>
        </div>
        <div className='container'>
            <TopCategories />
            <CourseList />
            <TopInstructors />
        </div>
        <Testimonials />
        <div className='container'>
            <div className="containerAbout">
            <div className="topAbout">
                <img src={One} alt="" className='one' />
                <div className="right">
                    <h4>Become an Instructor</h4>
                    <p>Instructors from around the world teach millions of students on Byway. <br></br>We provide the tools and skills to teach what you love.</p>
                    <button>
                        Start Your Instructor Journey
                        <ArrowRight className='arrowRight' />
                    </button>
                </div>
            </div>
            <div className="bottomAbout">
                <div className="left">
                <h4>Transform your life through education</h4>
                    <p>Learners around the world are launching new careers, advancing in <br></br>their fields, and enriching their lives.</p>
                    <button>
                        Checkout Courses
                        <ArrowRight className='arrowRight' />
                    </button>
                </div>
                <img src={Two} alt="" />
            </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Home;
