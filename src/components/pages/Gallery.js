import React, { Component } from 'react'
import Footer from '../layouts/Footertwo';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'

import galleryimg1 from '../../assets/img/gallery/01.jpg';
import galleryimg2 from '../../assets/img/gallery/02.jpg';
import galleryimg3 from '../../assets/img/gallery/03.jpg';
import galleryimg4 from '../../assets/img/gallery/04.jpg';
import galleryimg5 from '../../assets/img/gallery/05.jpg';
import galleryimg6 from '../../assets/img/gallery/06.jpg';
import galleryimg7 from '../../assets/img/gallery/07.jpg';
import galleryimg8 from '../../assets/img/gallery/08.jpg';
import Headertwo from '../layouts/Headertwo';


const galleryPosts = [
  {
    photo: galleryimg1,
    anitime: '.3s',
  },
  {
    photo: galleryimg2,
    anitime: '.4s',
  },
  {
    photo: galleryimg3,
    anitime: '.5s',
  },
  {
    photo: galleryimg4,
    anitime: '.6s',
  },
  {
    photo: galleryimg5,
    anitime: '.7s',
  },
  {
    photo: galleryimg6,
    anitime: '.8s',
  },
  {
    photo: galleryimg7,
    anitime: '.9s',
  },
  {
    photo: galleryimg8,
    anitime: '1.1s',
  },
];
class Gallery extends Component {
  render() {
    return (
      <div>
        <Headertwo />
        {/*====== BREADCRUMB PART START ======*/}
        <section className="breadcrumb-area" style={{backgroundImage: 'url(assets/img/bg/04.jpg)'}}>
          <div className="container">
            <div className="breadcrumb-text">
              <span>The ultimate luxury</span>
              <h2 className="page-title">Room Details</h2>
              <ul className="breadcrumb-nav">
                <li><Link to="/">Home</Link></li>
                <li className="active">Rooms</li>
              </ul>
            </div>
          </div>
        </section>
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== GALLERY START ======*/}
        <section className="gallery-wrappper pt-120 pb-120">
          <div className="container">
            <div className="gallery-loop">
            {galleryPosts.map((item, i) => (
              <ReactWOW key={i} animation="fadeInUp" data-wow-delay={item.anitime}>
              <div className="single-gallery-image">
                <Link to={item.photo} className="popup-image">
                  <img src={item.photo} alt="Images" />
                </Link>
              </div>
              </ReactWOW>
              ))}
            </div>
          </div>
        </section>
        {/*====== GALLERY END ======*/}
        <Footer />
      </div>

    );
  }
}

export default Gallery;
