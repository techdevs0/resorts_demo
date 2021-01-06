import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import ReactWOW from 'react-wow'

import bannerimg1 from '../../../assets/img/banner/05.jpg';
import bannerimg2 from '../../../assets/img/banner/06.jpg';

const bannerPosts = [
  {
      photo: bannerimg1,
      tag: 'The ultimate luxury experience',
      taganimation: '.6s',
      title:'The Perfect \n Base For You',
      titleanimation:'.9s',
      btn1:'take a tour',
      btn1animation:'1.1s',
      btn1url:'/room-details',
      btn2:'Learn More',
      btn2animation:'1.3s',
      btn2url:'/about',
  },
  {
      photo: bannerimg2,
      tag: 'The ultimate luxury experience',
      taganimation: '.6s',
      title:'The Perfect \n Base For You',
      titleanimation:'.9s',
      btn1:'take a tour',
      btn1animation:'1.1s',
      btn1url:'/room-details',
      btn2:'Learn More',
      btn2animation:'1.3s',
      btn2url:'/about',
  },
];

class Banner extends Component {
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      fade: true,
      arrows: false,
  }; 
    return (
        <Slider className="banner-area banner-style-three" id="bannerSlider" {...settings}>
      {bannerPosts.map((item, i) => (
        <div key={i} className="single-banner d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="banner-content">
                  <ReactWOW animation="fadeInDown" data-delay={item.taganimation}>
                  <span className="promo-tag">
                  {item.tag}
                  </span></ReactWOW>
                  <ReactWOW animation="fadeInLeft" data-delay={item.titleanimation}>
                  <h1 className="title">
                  {item.title}
                  </h1></ReactWOW>
                  <ul>
                  <ReactWOW animation="fadeInUp" data-delay={item.btn1animation}>
                    <li>
                      <Link className="main-btn btn-filled" to={item.btn1url}>{item.btn1}</Link>
                    </li></ReactWOW>
                    <ReactWOW animation="fadeInUp" data-delay={item.btn2animation}>
                    <li>
                      <Link className="main-btn btn-border" to={item.btn2url}>{item.btn2}</Link>
                    </li></ReactWOW>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* banner bg */}
          <div className="banner-bg" style={{backgroundImage: "url("+ item.photo + ")"}} />
          <div className="banner-overly" />
        </div>
        ))}
      </Slider>
      
    );
  }
}

export default Banner;
