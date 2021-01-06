import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'

class About extends Component {
  render() {
    return (
        <section className="about-section pt-115 pb-115">
        <div className="container">
          <div className="down-arrow-wrap text-center">
            <Link to="#" className="down-arrow"><i className="fal fa-arrow-down" /></Link>
          </div>
          <div className="section-title about-title text-center mb-20">
            <span className="title-tag">since <span>1994</span></span>
            <h2>Situated In Prime Position At The Foot Of The Slopes Of Courchevel Moriond.</h2>
          </div>
          <ul className="about-features masonry-layout">
            <ReactWOW animation='fadeInUp' data-wow-delay=".3s">
            <li>
              <Link to="#">
                <i className="flaticon-coffee" />
                <i className="hover-icon flaticon-coffee" />
                <span className="title">breakfast</span>
              </Link>
            </li>
            </ReactWOW>
            <ReactWOW animation='fadeInUp' data-wow-delay=".5s">
            <li >
              <Link to="#">
                <i className="flaticon-air-freight" />
                <i className="hover-icon flaticon-air-freight" />
                <span className="title">Airport Pickup</span>
              </Link>
            </li>
            </ReactWOW>
            <ReactWOW animation='fadeInUp' data-wow-delay=".7s">
            <li>
              <Link to="#">
                <i className="flaticon-marker" />
                <i className="hover-icon flaticon-marker" />
                <span className="title">city guide</span>
              </Link>
            </li>
            </ReactWOW>
            <ReactWOW animation='fadeInUp' data-wow-delay=".9s">
            <li>
              <Link to="#">
                <i className="flaticon-barbecue" />
                <i className="hover-icon flaticon-barbecue" />
                <span className="title">bbq party</span>
              </Link>
            </li>
            </ReactWOW>
            <ReactWOW animation='fadeInUp' data-wow-delay="1.1s">
            <li>
              <Link to="#">
                <i className="flaticon-hotel" />
                <i className="hover-icon flaticon-hotel" />
                <span className="title">luxury room</span>
              </Link>
            </li>
            </ReactWOW>
          </ul>
        </div>
      </section>
    );
  }
}

export default About;
