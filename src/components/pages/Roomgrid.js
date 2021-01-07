import React, { Component } from 'react'
import Footer from '../layouts/Footertwo';
import { Link } from 'react-router-dom';

import roomimg1 from '../../assets/img/room/01.jpg';
import roomimg2 from '../../assets/img/room/02.jpg';
import roomimg3 from '../../assets/img/room/03.jpg';
import roomimg4 from '../../assets/img/room/04.jpg';
import roomimg5 from '../../assets/img/room/05.jpg';
import roomimg6 from '../../assets/img/room/06.jpg';
import roomimg7 from '../../assets/img/room/07.jpg';
import roomimg8 from '../../assets/img/room/08.jpg';
import roomimg9 from '../../assets/img/room/09.jpg';
import roomimg10 from '../../assets/img/room/10.jpg';
import roomimg11 from '../../assets/img/room/11.jpg';
import roomimg12 from '../../assets/img/room/12.jpg';
import Headertwo from '../layouts/Headertwo';

const roomgridPosts = [
  {
      photo: roomimg1,
      title: 'Minimal Duplex Room',
      url: '/room-details',
      price: '$345/Night',
      book: 'Booking Now',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
  },
  {
      photo: roomimg2,
      title: 'Minimal Duplex Room',
      url: '/room-details',
      price: '$345/Night',
      book: 'Booking Now',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
  },
  {
      photo: roomimg3,
      title: 'Minimal Duplex Room',
      url: '/room-details',
      price: '$345/Night',
      book: 'Booking Now',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
  },
  {
      photo: roomimg4,
      title: 'Minimal Duplex Room',
      url: '/room-details',
      price: '$345/Night',
      book: 'Booking Now',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
  },
  {
      photo: roomimg5,
      title: 'Minimal Duplex Room',
      url: '/room-details',
      price: '$345/Night',
      book: 'Booking Now',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
  },
  {
      photo: roomimg6,
      title: 'Minimal Duplex Room',
      url: '/room-details',
      price: '$345/Night',
      book: 'Booking Now',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
  },
  {
      photo: roomimg7,
      title: 'Minimal Duplex Room',
      url: '/room-details',
      price: '$345/Night',
      book: 'Booking Now',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
  },
  {
    photo: roomimg8,
    title: 'Minimal Duplex Room',
    url: '/room-details',
    price: '$345/Night',
    book: 'Booking Now',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
  },
  {
    photo: roomimg9,
    title: 'Minimal Duplex Room',
    url: '/room-details',
    price: '$345/Night',
    book: 'Booking Now',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
  },
  {
    photo: roomimg10,
    title: 'Minimal Duplex Room',
    url: '/room-details',
    price: '$345/Night',
    book: 'Booking Now',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
  },
  {
    photo: roomimg11,
    title: 'Minimal Duplex Room',
    url: '/room-details',
    price: '$345/Night',
    book: 'Booking Now',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
  },
  {
    photo: roomimg12,
    title: 'Minimal Duplex Room',
    url: '/room-details',
    price: '$345/Night',
    book: 'Booking Now',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
  },
];

class Roomgrid extends Component {
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
        {/*====== ROOM-GRIRD START ======*/}
        <section className="room-section room-grid-style pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center room-gird-loop">
            {roomgridPosts.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                <div className="room-box mb-30">
                    <div className="room-img-wrap">
                    <div className="room-img" style={{backgroundImage: "url("+ item.photo + ")"}} />
                    </div>
                    <div className="room-desc">
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
                    <p>{item.desc}</p>
                    <span className="price">{item.price}</span>
                    <Link to={item.url} className="book-btn">{item.book}</Link>
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
        {/*====== ROOM-GRIRD END ======*/}
        <Footer />
      </div>

    );
  }
}

export default Roomgrid;
