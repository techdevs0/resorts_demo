import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import placeimg1 from '../../../assets/img/places/01.jpg';
import placeimg2 from '../../../assets/img/places/02.jpg';
import placeimg3 from '../../../assets/img/places/03.jpg';
import placeimg4 from '../../../assets/img/places/04.jpg';


const placePosts = [
  {
    photo: placeimg1,
    title: 'Duplex Restaurant',
    url: '/places-details',
    time: '1,500m | 21 min. Walk',
  },
  {
    photo: placeimg2,
    title: 'Duplex Restaurant',
    url: '/places-details',
    time: '1,500m | 21 min. Walk',
  },
  {
    photo: placeimg3,
    title: 'Duplex Restaurant',
    url: '/places-details',
    time: '1,500m | 21 min. Walk',
  },
  {
    photo: placeimg4,
    title: 'Duplex Restaurant',
    url: '/places-details',
    time: '1,500m | 21 min. Walk',
  },
];


class Placesbox extends Component {
  render() {
    return (
      <div className="places-boxes pt-115">
        {/* Title */}
        <div className="section-title text-center mb-50">
          <span className="title-tag">Popular</span>
          <h2>Highlights Places</h2>
        </div>
        <div className="row justify-content-center">
        {placePosts.map((item, i) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-10">
            <div className="place-box mt-30">
              <div className="place-bg-wrap">
                <div className="place-bg" style={{backgroundImage: "url("+ item.photo + ")"}} />
              </div>
              <div className="desc">
              <h4><Link to={item.url}>{item.title}</Link></h4>
                <span className="time">{item.time}</span>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default Placesbox;
