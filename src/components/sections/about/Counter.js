import React, { Component } from 'react';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow'

class Counter extends Component {
  render() {
    return (
      
      <section className="counter-section pt-115">
      <div className="container">
        {/* Section Title */}
        <div className="section-title mb-80">
          <span className="title-tag">COUNTER</span>
          <h2>Some Fun Facts</h2>
        </div>
        {/* Counter */}
        <div className="row justify-content-center">
          <div className="col-lg-4 col-6">
            <div className="counter-box counter-box-two">
              <div className="icon">
                <i className="flaticon-user-1" />
              </div>
              <h4><CountUp end={8000} duration={5}/></h4>
              <span className="title">Happy Users</span>
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <div className="counter-box counter-box-two">
              <div className="icon">
                <i className="flaticon-like" />
              </div>
              <h4><CountUp end={10} duration={5}/>M</h4>
              <span className="title">Reviews &amp; Appriciate</span>
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <div className="counter-box counter-box-two">
              <div className="icon">
                <i className="flaticon-suitcase" />
              </div>
              <h4><CountUp end={100} duration={5}/></h4>
              <span className="title">Country Coverage</span>
            </div>
          </div>
        </div>
        {/* Gallery */}
        <div className="row">
        <ReactWOW animation="fadeInUp" data-wow-delay=".3s">
          <div className="col-sm-6">
            <div className="image mt-30">
              <img src="assets/img/gallery/09.jpg" alt="" />
            </div>
          </div>
          </ReactWOW>
          <ReactWOW animation="fadeInUp" data-wow-delay=".5s">
          <div className="col-sm-6">
            <div className="image mt-30">
              <img src="assets/img/gallery/10.jpg" alt="" />
            </div>
          </div>
          </ReactWOW>
        </div>
      </div>
    </section>
    );
  }
}

export default Counter;
