import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import froomimg1 from '../../../assets/img/room/01.jpg';
import froomimg2 from '../../../assets/img/room/02.jpg';
import froomimg3 from '../../../assets/img/room/03.jpg';

const featurePosts = [
    {
        photo: froomimg1,
        title: 'Minimal Duplex Room',
        url: '/room-details',
        price: '$345/Night',
        book: 'Booking Now',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
    },
    {
        photo: froomimg2,
        title: 'Minimal Duplex Room',
        url: '/room-details',
        price: '$345/Night',
        book: 'Booking Now',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
    },
    {
        photo: froomimg3,
        title: 'Minimal Duplex Room',
        url: '/room-details',
        price: '$345/Night',
        book: 'Booking Now',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.',
    },
];

class Featureroom extends Component {
  render() {
    return (
      <section className="feature-room-section with-bg pt-155 pb-115" style={{backgroundImage: 'url(assets/img/bg/06.jpg)'}}>
        <div className="container">
          <div className="section-title white-color text-center">
            <span className="title-tag">popular list</span>
            <h2>Popular Rooms</h2>
          </div>
          {/* Room Looop */}
          <div className="row room-gird-loop justify-content-center mt-30">
          {featurePosts.map((item, i) => (
            <div key={i} className="col-lg-4 col-sm-6"> 
              <div className="room-box mt-30">
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
        </div>
      </section>
    );
  }
}

export default Featureroom;
