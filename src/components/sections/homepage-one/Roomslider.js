import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

import roomimg1 from '../../../assets/img/room-slider/01.jpg';
import roomimg2 from '../../../assets/img/room-slider/02.jpg';
import roomimg3 from '../../../assets/img/room-slider/03.jpg';
import roomimg4 from '../../../assets/img/room-slider/04.jpg';
import roomimg5 from '../../../assets/img/room-slider/05.jpg';

const roomimgPosts = [
  {
    photo: roomimg1,
  },
  {
    photo: roomimg2,
  },
  {
    photo: roomimg3,
  },
  {
    photo: roomimg4,
  },
  {
    photo: roomimg5,
  },
];
const roomPosts = [
  {
    name: 'Luxury',
    icon: 'flaticon-hotel',
    url: '/room-details',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    name: 'Luxury',
    icon: 'flaticon-hotel',
    url: '/room-details',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    name: 'Luxury',
    icon: 'flaticon-hotel',
    url: '/room-details',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    name: 'Luxury',
    icon: 'flaticon-hotel',
    url: '/room-details',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    name: 'Luxury',
    icon: 'flaticon-hotel',
    url: '/room-details',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];
class Roomslider extends Component {
    constructor(props) {
    super(props);
    this.state = {
        nav1: null,
        nav2: null
    };
    }

    componentDidMount() {
    this.setState({
        nav1: this.slider1,
        nav2: this.slider2
    });
    }
  render() {
   
    return (
        <section className="room-slider">
        <div className="container-fluid p-0">
          <Slider className="row rooms-slider-one" asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          slidesToShow={3}
            slidesToScroll={1}
            fade={false}
            infinite={true}
            autoplay={true}
            autoplaySpeed={4000}
            arrows={false}
            dots={false}
            centerMode={true}
            centerPadding={'6%'}
            responsive={ [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '15%',
                    },
                },
            ]
          }
          >
            {roomimgPosts.map((item, i) => (
            <div key={i} className="col">
              <div className="slider-img" style={{backgroundImage: "url("+ item.photo + ")"}}>
              </div>
            </div>
            ))}
          </Slider>
        </div>
        <div className="rooms-content-wrap">
          <div className="container">
            <div className="row justify-content-center justify-content-md-start">
              <div className="col-xl-4 col-lg-5 col-sm-8">
                <div className="room-content-box">
                  <div className="slider-count" />
                  <div className="slider-count-big" />
                  <Slider className="room-content-slider"
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={1}
                    slidesToScroll={1}
                    fade={false}
                    infinite={true}
                    autoplay={true}
                    autoplaySpeed={4000}
                    arrows={false}
                    dots={true}
                    >
                    {roomPosts.map((item, i) => (
                    <div key={i} className="single-content">
                      <div className="icon">
                      <i className={item.icon}/>
                      </div>
                      <h3><Link to={item.url}>{item.name}</Link></h3>
                      <p>{item.desc}</p>
                    </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Roomslider;
