import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import ReactWOW from 'react-wow'

import bannerimg1 from '../../../assets/img/banner/home.jpg';
// import bannerimg2 from '../../../assets/img/banner/05.jpg';

const bannerPosts = [
  {
    photo: require('../../../assets/img/banner/dining.jpg'),
    tag: '',
    taganimation: '.6s',
    title: "The Perfect \n Destination for you",
    titleanimation: '.9s',
    btn1: 'gallery',
    btn1animation: '1.1s',
    btn1url: '/gallery',
    btn2: 'Learn More',
    btn2animation: '1.3s',
    btn2url: '/about',
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
          <div key={i} className={`single-banner d-flex align-items-center justify-content-center ${this.props.isMain ? '' : 'sub-banner'}`}>
            <div className="container">
              <div className="row justify-content-left">
                <div className="col-10 col-lg-6">
                  <div className="banner-content text-left">
                    <ReactWOW animation="fadeInDown" data-delay={item.taganimation}>
                      <span className="promo-tag">{item.tag}</span></ReactWOW>
                    <ReactWOW animation="fadeInLeft" data-delay={item.titleanimation}>
                      <h1 className="title">{this.props.title}
                      </h1></ReactWOW>
                    <ul className={this.props.isMain ? '' : 'd-none'}>
                      <ReactWOW animation="fadeInUp" data-delay={item.btn1animation}>
                        <li>
                          <Link className="main-btn btn-border" to={item.btn1url}>{item.btn1}</Link>
                        </li>
                      </ReactWOW>
                      <ReactWOW animation="fadeInUp" data-delay={item.btn2animation}>
                        <li>
                          <Link className="main-btn btn-border" to={item.btn2url}>{item.btn2}</Link>
                        </li>
                      </ReactWOW>
                    </ul>
                  </div>
                </div>
                {/* <div className="col-12 col-lg-6"> */}
                <div className={`d-none ${this.props.isMain ? 'd-md-flex' : ''}`} style={{
                  position: 'absolute', width: '50%', display: 'flex', marginTop: '2rem', alignItems: 'baseline', justifyContent: 'flex-end'
                  , right: '60px', bottom: '68px'
                }}>
                  <div className="rounded-circle mx-2" style={{ width: '100px', height: '100px', overflow: 'hidden', backgroundColor: '#fff' }}>
                    <img className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={require('./../../../assets/img/banner/tc-winner.gif')} />
                  </div>
                  <div className="rounded-circle mx-2" style={{ width: '100px', height: '100px', overflow: 'hidden' }}>
                    <img className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'fill' }} src={require('./../../../assets/img/banner/luxury.png')} />
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
            {/* banner bg */}
            <div className="banner-bg" style={{ backgroundImage: `url(${this.props.image || bannerimg1})`, backgroundPosition: 'bottom', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} />
            <div className="banner-overly" />
          </div>
        ))}
      </Slider>
    );
  }
}

export default Banner;
