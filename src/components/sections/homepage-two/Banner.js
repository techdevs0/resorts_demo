import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Slider from "react-slick";
import ReactWOW from 'react-wow'

import bannerimg1 from '../../../assets/img/banner/home.jpg';
// import bannerimg2 from '../../../assets/img/banner/05.jpg';

const bannerPosts = [
  {
      photo: require('../../../assets/img/banner/home.jpg'),
      tag: '',
      taganimation: '.6s',
      title:"The Perfect \n Destination for you",
      titleanimation:'.9s',
      btn1:'gallery',
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
    <Slider className="banner-area banner-style-two" id="bannerSlider" {...settings}>
      {bannerPosts.map((item, i) => (
        <div key={i} className="single-banner d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row justify-content-left">
              <div className="col-lg-8">
                <div className="banner-content text-left">
                <ReactWOW animation="fadeInDown" data-delay={item.taganimation}>
                  <span className="promo-tag">{item.tag}</span></ReactWOW>
                    <ReactWOW animation="fadeInLeft" data-delay={item.titleanimation}>
                  <h1 className="title">{item.title}
                  </h1></ReactWOW>
                  <ul>
                  <ReactWOW animation="fadeInUp" data-delay={item.btn1animation}>
                    <li>
                      <Link className="main-btn btn-border" to={item.btn1url}>{item.btn1}</Link>
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
          <div className="banner-bg" style={{backgroundImage: `url(${bannerimg1})`}} />
          <div className="banner-overly" />
        </div>
      ))}
      </Slider>
    );
  }
}

export default Banner;
