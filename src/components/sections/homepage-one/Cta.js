import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'

class Cta extends Component {
  render() {
    return (
      
        <section className="cta-section pt-115 pb-160">
          <div className="container">
            <div className="cta-inner">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8 col-sm-9 col-10 order-2 order-lg-1">
                  <div className="cta-text">
                    <div className="section-title mb-20">
                      <span className="title-tag">call to action</span>
                      <h2>The Thin Escape</h2>
                    </div>
                    <p>Miranda has everything for your trip
                      &amp; every single things.</p>
                    <Link to="/contact" className="main-btn btn-filled">take a tour</Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-10 col-sm-11 col-10 order-1 order-lg-2">
                  {/* feature loop */}
                  <div className="cta-features">
                    {/* feature box */}
                    <ReactWOW animation="fadeInUp" data-wow-delay=".3s">
                    <div className="single-feature ">
                      <div className="icon">
                        <i className="flaticon-air-freight" />
                      </div>
                      <div className="cta-desc">
                        <h3><Link to="#">Easy &amp; Free Transport</Link></h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <span className="count">01</span>
                      </div>
                    </div>
                    </ReactWOW>
                    {/* feature box */}
                    <ReactWOW animation="fadeInUp" data-wow-delay=".4s">
                    <div className="single-feature">
                      <div className="icon">
                        <i className="flaticon-fast-food" />
                      </div>
                      <div className="cta-desc">
                        <h3><Link to="#">Clean &amp; Fresh Food</Link></h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <span className="count">02</span>
                      </div>
                    </div>
                    </ReactWOW>
                    {/* feature box */}
                    <ReactWOW animation="fadeInUp" data-wow-delay=".5s">
                    <div className="single-feature">
                      <div className="icon">
                        <i className="flaticon-swimming" />
                      </div>
                      <div className="cta-desc">
                        <h3><Link to="#">Play Ground &amp; Swiming Pool</Link></h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <span className="count">03</span>
                      </div>
                    </div>
                    </ReactWOW>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Cta;
