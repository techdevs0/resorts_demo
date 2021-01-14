import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import offerimg1 from '../../../assets/img/offers/01.jpg';
import offerimg2 from '../../../assets/img/offers/02.jpg';
import offerimg3 from '../../../assets/img/offers/03.jpg';
import offerimg4 from '../../../assets/img/offers/04.jpg';

const offerPosts = [
  {
      photo: offerimg1,
      cat: 'double bed',
      title: 'Luxury Double Bed',
      url: '/room-details',
      price: '$345',
      time: 'Night',
      btn: 'Book Now',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehend erit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
      photo: offerimg2,
      cat: 'double bed',
      title: 'Luxury Double Bed',
      url: '/room-details',
      price: '$345',
      time: 'Night',
      btn: 'Book Now',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehend erit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    photo: offerimg3,
    cat: 'double bed',
    title: 'Luxury Double Bed',
    url: '/room-details',
    price: '$345',
    time: 'Night',
    btn: 'Book Now',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehend erit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    photo: offerimg4,
    cat: 'double bed',
    title: 'Luxury Double Bed',
    url: '/room-details',
    price: '$345',
    time: 'Night',
    btn: 'Book Now',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehend erit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];
class Offers extends Component {
  render() {
    return (
      <section className="offers-area pt-120 pb-60">
        <div className="container">
          <div className="offer-boxes-loop">
          {offerPosts.map((item, i) => (
            <div key={i} className="offer-box">
              <div className="thumb">
                <img src={item.photo} alt="" />
              </div>
              <div className="offer-desc">
                <div className="title-wrap">
                  <div className="title">
                    <span className="room-cat">{item.cat}</span>
                    <h2>{item.title}</h2>
                  </div>
                  <div className="price">
                  {item.price}<span>/{item.time}</span>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-lg-6">
                    <div className="offer-text">
                      <p>
                      {item.desc}
                      </p>
                      <Link to="/room-details" className="main-btn btn-filled">{item.btn}</Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="offer-feature">
                      <ul>
                        <li><i className="fal fa-bath" /> Air conditioner</li>
                        <li><i className="fal fa-wifi" />High speed WiFi</li>
                        <li><i className="fal fa-cut" />Breakfast</li>
                        <li><i className="fal fa-guitar" />Kitchen</li>
                        <li><i className="fal fa-broom" />Cleaning</li>
                        <li><i className="fal fa-shower" />Shower</li>
                        <li><i className="fal fa-shopping-basket" />Grocery</li>
                        <li><i className="fal fa-bed" />Single bed</li>
                        <li><i className="fal fa-shopping-cart" />shop near</li>
                        <li><i className="fal fa-bus" />Towels</li>
                      </ul>
                    </div>
                  </div>
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

export default Offers;
