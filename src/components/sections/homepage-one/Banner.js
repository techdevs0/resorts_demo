import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Slider from "react-slick"; 
import ReactWOW from 'react-wow'

import bannerimg1 from '../../../assets/img/banner/01.jpg';
import bannerimg2 from '../../../assets/img/banner/02.jpg';

const bannerPosts = [
    {
        photo: bannerimg1,
    },
    {
        photo: bannerimg2,
    },
];
class Banner extends Component {
  render() {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false,
    };
    return (
        <section className="banner-area banner-style-one">
            <div className="container container-custom-two">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                <div className="banner-content">
                    <ReactWOW animation="fadeInDown" data-wow-delay=".3s">
                    <span className="promo-tag" >The ultimate luxury
                    experience</span></ReactWOW>
                    <ReactWOW animation="fadeInLeft" data-wow-delay=".5s">
                    <h1 className="title"> The Perfect <br /> Base For You
                    </h1></ReactWOW>
                    <ul>
                    <li>
                    <ReactWOW animation="fadeInUp" data-wow-delay=".7s">
                        <Link className="main-btn btn-filled" to="/room-details">take a
                        tour</Link>
                    </ReactWOW>
                    </li>
                    <li>
                    <ReactWOW animation="fadeInUp" data-wow-delay=".9s">
                        <Link className="main-btn btn-border" to="/about">Learn
                        More</Link>
                        </ReactWOW>
                    </li>
                    </ul>
                </div>
                </div>
                <ReactWOW animation="fadeInRight" data-wow-delay="0.5s">
                <div className="col-lg-6 col-md-6">
                <div className="banner-thumb d-none d-md-block">
                    <Slider className="hero-slider-one" {...settings}>
                    {bannerPosts.map((item, i) => (
                    <div key={i} className="single-thumb">
                        <img src={item.photo} alt="" />
                    </div>
                    ))}
                    </Slider>
                </div>
                </div>
                </ReactWOW>
            </div>
            </div>
        </section>
      
    );
  }
}

export default Banner;
