import React from 'react';
import './testimonial.css';
import {ReactComponent as Quote} from '../../assets/quotes.svg';
import leftButton from '../../assets/short-arrow-left.svg';
import rightButton from '../../assets/short-arrow-right.svg';
import Img from '../../assets/jane.png';

import data from '../../datas.json';

const Testimonials = () => {

  const testimonials = data.testimonials;

  return (
    <div className="mainTestimonialContainer">
      <div className='testimonialContainer'>
        <div className="titleTestimonial">
          <h3>What Our Customer Say <br></br>About Us</h3>
          <div className="buttons">
            <button className='left'>
              <img src={leftButton} alt="" />
            </button>
            <button className='right'>
              <img src={rightButton} alt="" />
            </button>
          </div>
        </div>
        <div className='testimonials'>

          {testimonials.map(testimonial => (

          <div key={testimonial.id} className='testimonialsCard'>
            <Quote className='quote' />
            <p>"{testimonial.testimonial}"</p>
            <div className="person">
              <img src={Img} alt="" />
              <div className="aboutPerson">
                <h5>{testimonial.name}</h5>
                <p>{testimonial.designation}</p>
              </div>
            </div>
          </div>

          ))}

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
