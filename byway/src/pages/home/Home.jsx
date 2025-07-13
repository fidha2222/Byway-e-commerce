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


import React, { useState, useEffect } from 'react';

function LoginPopup({ onClose, onSignUp, onSubmit }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
    };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="top">
            <h1>LOGIN</h1>
        </div>
        <div className="middle">
            <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username:</label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                  />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        type="password" 
                        id="password" 
                        name="password"/>  
                </div>
                <div id='submit'>
                   <button onSubmit={e => e.preventDefault()} type="submit" className='submit'>Log In</button> 
                </div>
            </form>
        </div>
        <div className="bottom">
            <p>Don’t have an account? <button
              type="button"
              className="signup-link"
              onClick={onSignUp}
              style={{
                background: "none",
                border: "none",
                color: "#007bff",
                textDecoration: "underline",
                cursor: "pointer",
                padding: 0,
                font: "inherit"
              }}
            >
              Sign Up
            </button></p>
        </div>
        <button className='close' onClick={onClose}>Close</button>
      </div>
    </div>
  );
}


function SignUpPopup({ onClose, onLogin }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="top">
          <h1>SIGN UP</h1>
        </div>
        <div className="middle">
          <form>
            <div>
              <label htmlFor="username">Username:</label>
              <input  type="username" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="password" id="confirmPassword" name="confirmPassword" />
            </div>
            <div id="submit">
              <button onSubmit={e => e.preventDefault()} type="submit" className="submit">Sign Up</button>
            </div>
          </form>
        </div>
        <div className="bottom">
          <p>
            Already have an account?{' '}
            <button
              type="button"
              className="login-link"
              onClick={onLogin}
              style={{
                background: "none",
                border: "none",
                color: "#007bff",
                textDecoration: "underline",
                cursor: "pointer",
                padding: 0,
                font: "inherit"
              }}
            >
              Log In
            </button>
          </p>
        </div>
        <button className="close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}


const Home = () => {

    const [popupType, setPopupType] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

     useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
    }, []);

    const handleLoginSubmit = async ({ username, password }) => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
      // Handle error (e.g., wrong credentials)
      alert('Login failed. Please check your username and password.');
      return;
      }
      const data = await response.json();

    
    if (data.token) {
      
      localStorage.setItem('authToken', data.token);

    } else {
      alert('Login failed. No token received.');
    }
      setPopupType(null); // Close popup
    } catch (error) {
      console.error('Error:', error);
    alert('An error occurred. Please try again.');
    }
  };

    // logout
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

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
                    {!isAuthenticated ? (
              <>
                <button onClick={() => setPopupType('login')} className='login'>Login</button>
                <button onClick={() => setPopupType('signup')} className='signup'>Sign Up</button>
              </>
            ) : (
              <button onClick={handleLogout} className='logout'>Logout</button>
            )}
                </nav>
            </header>
            {popupType === 'login' && (
            <LoginPopup
              onClose={() => setPopupType(null)}
              onSignUp={() => setPopupType('signup')}
              onSubmit={handleLoginSubmit}
            />
            )}
            {popupType === 'signup' && (
            <SignUpPopup
              onClose={() => setPopupType(null)}
              onLogin={() => setPopupType('login')}
            />
            )}
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
