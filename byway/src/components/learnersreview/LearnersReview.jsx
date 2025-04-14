import React from 'react';
import { useParams } from 'react-router-dom';
import './learnerreview.css';

import Star from '../../assets/star.svg';
import MarkDoe from '../../assets/span-6.svg';

import data from '../../datas.json';


const LearnersReview = () => {

    const learnerreview = data.learnersreview;

    return (
        <div className='MainContainer'>
            <h5>Learner Reviews</h5>
            <div className="bottom">
                <div className="left">
                    <div className="ratingTop">
                        <img src={Star} alt="" />
                        <p className='rating'>4.6</p>
                        <p>146,951 reviews</p>
                    </div>
                    <div className="ratingBottom">
                        <div className='one'>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><p>80%</p></span>
                        </div>
                        <div className='two'>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><p>10%</p></span>
                        </div>
                        <div className='three'>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><p>5%</p></span>
                        </div>
                        <div className='four'>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><p>3%</p></span>
                        </div>
                        <div className='five'>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><p>2%</p></span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    {learnerreview.map(review => ( 
                    <div className="reviewCard">

                        <div className="reviewer">
                            <img src={MarkDoe} alt="" />
                            <h5>{review.name}</h5>
                        </div>
                        <div className="review">
                            <div className="top">
                                <div className="rating">
                                    <img src={Star} alt="" />
                                    <p>{review.rating}</p>
                                </div>
                                <p>Reviewed on 22nd March, 2024</p>
                            </div>
                            <p>I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.</p>
                        </div>
                    
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LearnersReview;