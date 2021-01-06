import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactWOW from 'react-wow'

class About extends Component {
  state = {
    open: false,
    };
    onOpenModal = () => {
    this.setState({ open: true });
    };
    
    onCloseModal = () => {
    this.setState({ open: false });
    };
    render() {
    const { open } = this.state;
    return (
      <section className="about-section pt-115 pb-115">
          <div className="container">
            <div className="video-wrap video-wrap-two video-about mb-60" style={{backgroundImage: 'url(assets/img/text-block/04.jpg)'}}>
              <div className="popup-video" onClick={this.onOpenModal} ><i className="fas fa-play" /></div>
              <Modal open={open} onClose={this.onCloseModal} center classNames={{
                  modal: 'video-modal',
                  }}>
                  <iframe src="https://www.youtube.com/embed/EEJFMdfraVY" title="title"></iframe>
                  </Modal>
            </div>
            <div className="section-title about-title text-center">
              <span className="title-tag">since <span>1994</span></span>
              <h2>Hello. Our hotel has been present for over 20 years. We make the best or all our customers.</h2>
            </div>
            <ul className="about-features">
              <ReactWOW animation="fadeInUp" data-wow-delay=".3s">
              <li>
                <Link to="#">
                  <i className="flaticon-coffee" />
                  <i className="hover-icon flaticon-coffee" />
                  <span className="title">breakfast</span>
                </Link>
              </li></ReactWOW>
              <ReactWOW animation="fadeInUp" data-wow-delay=".4s">
              <li>
                <Link to="#">
                  <i className="flaticon-air-freight" />
                  <i className="hover-icon flaticon-air-freight" />
                  <span className="title">Airport Pickup</span>
                </Link>
              </li></ReactWOW>
              <ReactWOW animation="fadeInUp" data-wow-delay=".5s">
              <li>
                <Link to="#">
                  <i className="flaticon-marker" />
                  <i className="hover-icon flaticon-marker" />
                  <span className="title">city guide</span>
                </Link>
              </li></ReactWOW>
              <ReactWOW animation="fadeInUp" data-wow-delay=".6s">
              <li>
                <Link to="#">
                  <i className="flaticon-barbecue" />
                  <i className="hover-icon flaticon-barbecue" />
                  <span className="title">bbq party</span>
                </Link>
              </li></ReactWOW>
              <ReactWOW animation="fadeInUp" data-wow-delay=".7s">
              <li>
                <Link to="#">
                  <i className="flaticon-hotel" />
                  <i className="hover-icon flaticon-hotel" />
                  <span className="title">luxury room</span>
                </Link>
              </li></ReactWOW>
            </ul>
            <div className="about-text-box">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about-img">
                    <img src="assets/img/text-block/05.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-text">
                    <span>Restaurant</span>
                    <h3>Get Restaurant Facilities &amp; Many Other More</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem por
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip.
                    </p>
                    <Link to="#" className="main-btn btn-filled">take a tour</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
    );
  }
}

export default About;
