import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";


import blogimg1 from '../../../assets/img/latest-post/01.jpg';
import blogimg2 from '../../../assets/img/latest-post/02.jpg';
import blogimg3 from '../../../assets/img/latest-post/03.jpg';

const blogPosts = [
  {
    photo: blogimg1,
    title: 'Each of our 8 double rooms has its own distinct.',
    url: '/news-details',
    date: '23rd March 2019',
    author: 'Admin',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    photo: blogimg2,
    title: 'Each of our 8 double rooms has its own distinct.',
    url: '/news-details',
    date: '23rd March 2019',
    author: 'Admin',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    photo: blogimg3,
    title: 'Each of our 8 double rooms has its own distinct.',
    url: '/news-details',
    date: '23rd March 2019',
    author: 'Admin',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    photo: blogimg1,
    title: 'Each of our 8 double rooms has its own distinct.',
    url: '/news-details',
    date: '23rd March 2019',
    author: 'Admin',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    photo: blogimg2,
    title: 'Each of our 8 double rooms has its own distinct.',
    url: '/news-details',
    date: '23rd March 2019',
    author: 'Admin',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    photo: blogimg3,
    title: 'Each of our 8 double rooms has its own distinct.',
    url: '/news-details',
    date: '23rd March 2019',
    author: 'Admin',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow next-arrow" onClick={onClick}><i className="fal fa-arrow-right"></i></div>
  );
}
 
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow prev-arrow" onClick={onClick}><i className="fal fa-arrow-left"></i></div>
  );
}
class News extends Component {
  render() {
    const settings = {
      
      slidesToShow: 3,
      slidesToScroll: 1,
      fade: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
        dots: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
      <section className="latest-news pt-115 pb-115">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-7">
              <div className="section-title">
                <span className="title-tag">Blog</span>
                <h2>News Feeds</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-5 d-none d-sm-block">
              <div className="latest-post-arrow arrow-style text-right">
              <SamplePrevArrow />
              <SampleNextArrow />
              </div>
            </div>
          </div>
          {/* Latest post loop */}
          <Slider className="row latest-post-slider mt-80" {...settings}>
          {blogPosts.map((item, i) => (
            <div key={i} className="col-lg-12">
              <div className="latest-post-box">
                <div className="post-img" style={{backgroundImage: "url("+ item.photo + ")"}} />
                <div className="post-desc">
                  <ul className="post-meta">
                    <li>
                      <Link to={item.url}><i className="fal fa-calendar-alt" />{item.date}</Link>
                    </li>
                    <li>
                      <Link to={item.url}><i className="fal fa-user" />By {item.author}</Link>
                    </li>
                  </ul>
                  <h4><Link to={item.url}>{item.title}</Link></h4>
                  <p>
                  {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </section>
    );
  }
}

export default News;
