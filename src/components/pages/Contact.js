import React, { Component } from 'react'
import Footer from '../layouts/Footertwo';
import { Link } from 'react-router-dom';
import Headertwo from '../layouts/Headertwo';

class Contact extends Component {
  render() {
    return (
      <div>
        <Headertwo />
        {/*====== BREADCRUMB PART START ======*/}
        <section className="breadcrumb-area" style={{backgroundImage: 'url(assets/img/bg/04.jpg)'}}>
          <div className="container">
            <div className="breadcrumb-text">
              <span>The ultimate luxury</span>
              <h2 className="page-title">Contact us</h2>
              <ul className="breadcrumb-nav">
                <li><Link to="/">Home</Link></li>
                <li className="active">Contact</li>
              </ul>
            </div>
          </div>
        </section>
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== CONTACT PART START ======*/}
        <section className="contact-part pt-115 pb-115">
          <div className="container">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6 col-10">
                  <div className="info-box">
                    <div className="icon">
                      <i className="flaticon-home" />
                    </div>
                    <div className="desc">
                      <h4>Office Address</h4>
                      <p>19/A, Cirikon City hall Tower New York, NYC</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-10">
                  <div className="info-box">
                    <div className="icon">
                      <i className="flaticon-phone" />
                    </div>
                    <div className="desc">
                      <h4>Phone Number</h4>
                      <p>+ 97656 8675 7864 7 <br /> + 876 766 8675 765 6</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-10">
                  <div className="info-box">
                    <div className="icon">
                      <i className="flaticon-message" />
                    </div>
                    <div className="desc">
                      <h4>Email Address</h4>
                      <p>info@webmail.com <br /> jobs.webmail@mail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Mapts */}
            <div className="contact-maps mb-30">
              <iframe src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" title="title" />
            </div>
            {/* Contact Form */}
            <div className="contact-form">
              <form action="#">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-group mb-30">
                      <span className="icon"><i className="far fa-user" /></span>
                      <input type="text" placeholder="Your full name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group mb-30">
                      <span className="icon"><i className="far fa-envelope" /></span>
                      <input type="email" placeholder="Enter email address" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group mb-30">
                      <span className="icon"><i className="far fa-phone" /></span>
                      <input type="text" placeholder="Add phone number" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group mb-30">
                      <span className="icon"><i className="far fa-book" /></span>
                      <input type="text" placeholder="Select Subject" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group textarea mb-30">
                      <span className="icon"><i className="far fa-pen" /></span>
                      <textarea type="text" placeholder="Enter messages" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="main-btn btn-filled">Get Free Quote</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/*====== CONTACT PART END ======*/}
        <Footer />
      </div>

    );
  }
}

export default Contact;
