import React from 'react';
import './footer.css'
import { ReactComponent as Logo } from '../../assets/logo.svg'; //logo
import SocialMedia from '../../assets/Social-Media.png';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className="left">
          <div className="topLeft">
            <Logo alt='Byway' className='logo' />
            <h4>Byway</h4>
          </div>
          <p>Empowering learners through accessible and engaging online <br></br>
          education. <br></br>
          Byway is a leading online learning platform dedicated to <br></br>
          providing high-quality, flexible, and affordable educational <br></br>
          experiences.</p>
        </div>
        <div className="right">
          <div className="one">
            <h5>Get Help</h5>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Latest Articles</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
          </div>
          <div className="two">
            <h5>Programs</h5>
            <ul>
              <li><a href="">Art & Design</a></li>
              <li><a href="">Business</a></li>
              <li><a href="">IT & Software</a></li>
              <li><a href="">Languages</a></li>
              <li><a href="">Programming</a></li>
            </ul>
          </div>
          <div className="three">
            <h5>Contact Us</h5>
            <div className="contact">
              <p>Address: 123 Main Street, Anytown, CA 12345</p>
              <p>Tel: +(123) 456-7890</p>
              <p>Mail: bywayedu@webkul.in</p>
            </div>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={SocialMedia} alt="SocialMedia" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
