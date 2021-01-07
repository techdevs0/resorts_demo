import React, { Component } from 'react'
import Footer from '../layouts/Footertwo';
import { Link } from 'react-router-dom';

import roomimg1 from '../../assets/img/room/list-1.jpg';
import roomimg2 from '../../assets/img/room/list-2.jpg';
import roomimg3 from '../../assets/img/room/list-3.jpg';
import roomimg4 from '../../assets/img/room/list-4.jpg';
import roomimg5 from '../../assets/img/room/list-5.jpg';
import roomimg6 from '../../assets/img/room/list-6.jpg';
import Headertwo from '../layouts/Headertwo';


const roomlistPosts = [
  {
      photo: roomimg1,
      title: 'Minimal Duplex Room',
      url: '/room-details',
      price: '$345',
      time: 'Night',
      btn: 'Booking Now',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
      photo: roomimg2,
      title: 'Minimal Duplex Room',
      url: '/room-details',
      price: '$345',
      time: 'Night',
      btn: 'Booking Now',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    photo: roomimg3,
    title: 'Minimal Duplex Room',
    url: '/room-details',
    price: '$345',
    time: 'Night',
    btn: 'Booking Now',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    photo: roomimg4,
    title: 'Minimal Duplex Room',
    url: '/room-details',
    price: '$345',
    time: 'Night',
    btn: 'Booking Now',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    photo: roomimg5,
    title: 'Minimal Duplex Room',
    url: '/room-details',
    price: '$345',
    time: 'Night',
    btn: 'Booking Now',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    photo: roomimg6,
    title: 'Minimal Duplex Room',
    url: '/room-details',
    price: '$345',
    time: 'Night',
    btn: 'Booking Now',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

class Roomlist extends Component {
  render() {
    return (
      <div>
        <Headertwo />
        {/*====== BREADCRUMB PART START ======*/}
        <section className="breadcrumb-area" style={{backgroundImage: 'url(assets/img/bg/04.jpg)'}}>
          <div className="container">
            <div className="breadcrumb-text">
              <span>The ultimate luxury</span>
              <h2 className="page-title">Ultimate Room</h2>
              <ul className="breadcrumb-nav">
                <li><Link to="/">Home</Link></li>
                <li className="active">Rooms</li>
              </ul>
            </div>
          </div>
        </section>
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== ROOM-LIST START ======*/}
        <section className="room-section room-list-style pt-120 pb-120">
          <div className="container">
            <div className="room-list-loop">
            {roomlistPosts.map((item, i) => (
              <div key={i} className="room-box mb-30">
                <div className="row no-gutters justify-content-center">
                  <div className="col-lg-5 col-md-10">
                    <div className="room-img-wrap">
                      <div className="room-img" style={{backgroundImage: "url("+ item.photo + ")"}} />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-10">
                    <div className="room-desc">
                      <div className="row align-items-center">
                        <div className="col-sm-8">
                          <ul className="icons">
                            <li><i className="fal fa-bed" /></li>
                            <li><i className="fal fa-wifi" /></li>
                            <li><i className="fal fa-car" /></li>
                            <li><i className="fal fa-coffee" /></li>
                            <li><i className="fal fa-concierge-bell" /></li>
                            <li><i className="fal fa-compress-arrows-alt" /></li>
                            <li><i className="fal fa-swimmer" /></li>
                          </ul>
                          <h4 className="title"><Link to={item.url}>{item.title}</Link></h4>
                          <p>
                          {item.desc}
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <div className="text-sm-center">
                            <span className="price">{item.price}<span>/{item.time}</span> </span>
                            <Link to={item.url} className="book-btn">{item.btn}</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            </div>
            <div className="pagination-wrap">
              <ul>
                <li><Link to="#"><i className="far fa-angle-double-left" /></Link></li>
                <li className="active"><Link to="#">1</Link></li>
                <li><Link to="#">2</Link></li>
                <li><Link to="#">3</Link></li>
                <li><Link to="#">...</Link></li>
                <li><Link to="#">10</Link></li>
                <li><Link to="#"><i className="far fa-angle-double-right" /></Link></li>
              </ul>
            </div>
          </div>
        </section>
        {/*====== ROOM-LIST END ======*/}
        <Footer />
      </div>

    );
  }
}

export default Roomlist;
