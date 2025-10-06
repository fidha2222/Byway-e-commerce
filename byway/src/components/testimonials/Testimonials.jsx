import React, { useState } from 'react';  
import './testimonial.css';
import {ReactComponent as Quote} from '../../assets/quotes.svg';
import leftButton from '../../assets/short-arrow-left.svg';
import rightButton from '../../assets/short-arrow-right.svg';
import Img from '../../assets/jane.png'; // fallback image if needed

import data from '../../datas.json';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Testimonials = () => {
  const testimonials = data.testimonials || [];

  const [current, setCurrent] = useState(0);

  if (!testimonials.length) return null; // Prevent rendering if no data

  const prevSlide = () => {
    setCurrent(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const t = testimonials[current];

  return (
    <div className="mainTestimonialContainer">
      <div className='testimonialContainer'>
        <div className="titleTestimonial">
          <h3>
            What Our Customer Say <br />About Us
          </h3>
          <div className="buttons">
            <button className='left' onClick={prevSlide}>
              <img src={leftButton} alt="Previous" />
            </button>
            <button className='right' onClick={nextSlide}>
              <img src={rightButton} alt="Next" />
            </button>
          </div>
        </div>
        <div className='testimonials'>
          { [0,1,2].map(offset => {
      const index = (current + offset) % testimonials.length;
      const t = testimonials[index];
      return (
        <div key={t.id} className='testimonialsCard'>
          <Quote className='quote' />
          <p>"{t.testimonial}"</p>
          <div className="person">
            <img
              src={require(`../../${t.profileImg}`)}
              onError={e => e.target.src = Img}
              alt={t.name}
            />
            <div className="aboutPerson">
              <h5>{t.name}</h5>
              <p>{t.designation}</p>
            </div>
          </div>
        </div>
      );
    })
  }
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
