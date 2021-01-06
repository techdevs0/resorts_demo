import React, { Component } from 'react';
import Slider from "react-slick";

import tesimg1 from '../../../assets/img/testimonial/01.png';
import tesimg2 from '../../../assets/img/testimonial/02.png';
import tesimg3 from '../../../assets/img/testimonial/03.png';

const testimonialPosts = [
  {
    photo: tesimg1,
    name: 'Rosalina D. William',
    designation: 'Founder, qux co.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    photo: tesimg2,
    name: 'Donald H. Hilixer',
    designation: 'Founder, hilix',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    photo: tesimg3,
    name: 'Browfish Dumble',
    designation: 'Founder, Condo',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    photo: tesimg2,
    name: 'Donald H. Hilixer',
    designation: 'Founder, hilix',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];
class Testmonials extends Component {
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      fade: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  };
    return (
      <section className="testimonial-section pb-115 pt-115">
          <div className="container">
            <div className="section-title text-center mb-80">
              <span className="title-tag">testimonials</span>
              <h2>Client Feedback</h2>
            </div>
            {/* testimonials loop  */}
            <Slider className="row testimonial-slider" {...settings}>
            {testimonialPosts.map((item, i) => (
              <div key={i} className="col-lg-12">
                <div className="testimonial-box">
                  <div className="client-img">
                    <img src={item.photo} alt="" />
                    <span className="check"><i className="fal fa-check" /></span>
                  </div>
                  <h3>{item.name}</h3>
                  <span className="clinet-post">{item.designation}</span>
                  <p>
                  {item.desc}
                  </p>
                </div>
              </div>
              ))}
            </Slider>
          </div>
        </section>
    );
  }
}

export default Testmonials;
