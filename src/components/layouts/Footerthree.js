import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footerthree extends Component {
  constructor(props) {
    super(props);
    this.state = {
       redText: false
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({
          isTop: window.scrollY > 300
      });
  }, false);
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    const className = this.state.isTop ? 'active' : '';
    return (
      <div>
        {/*====== Back to Top ======*/}
        <Link to="#" className={`back-to-top ${className}`} id="backToTop" onClick={() => this.scrollToTop()}>
          <i className="fal fa-angle-double-up" />
        </Link>
        {/*====== FOOTER START ======*/}
        <footer className="footer-two">
          <div className="footer-widget-area light-theme pt-100 pb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-6 order-1">
                  {/* Site Info Widget */}
                  <div className="widget site-info-widget mb-50">
                    <div className="footer-logo mb-50">
                      <img src="assets/img/footer-logo.png" alt="" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed doing eius mod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitat ion ullamco laboris nisi.
                    </p>
                    <div className="social-links mt-40">
                      <Link to="#"><i className="fab fa-facebook-f" /></Link>
                      <Link to="#"><i className="fab fa-twitter" /></Link>
                      <Link to="#"><i className="fab fa-behance" /></Link>
                      <Link to="#"><i className="fab fa-linkedin" /></Link>
                      <Link to="#"><i className="fab fa-youtube" /></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-3 order-lg-2">
                  {/* Nav Widget */}
                  <div className="widget nav-widget mb-50">
                    <div>
                      <h4 className="widget-title">Services.</h4>
                      <ul>
                        <li><Link to="#">Resturent &amp; Bar</Link></li>
                        <li><Link to="#">Gaming Zone</Link></li>
                        <li><Link to="#">Swimming Pool</Link></li>
                        <li><Link to="#">Marrige Party</Link></li>
                        <li><Link to="#">Restaurant</Link></li>
                        <li><Link to="#">Party Planning</Link></li>
                        <li><Link to="#">Conference Room</Link></li>
                        <li><Link to="#">Tour Consultancy</Link></li>
                        <li><Link to="#">Coctail Party Houses</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 order-2 order-lg-3">
                  {/* Contact Widget */}
                  <div className="widget contact-widget mb-50">
                    <h4 className="widget-title">Contact Us.</h4>
                    <div className="contact-lists">
                      <div className="contact-box">
                        <div className="icon">
                          <i className="flaticon-call" />
                        </div>
                        <div className="desc">
                          <h6 className="title">Phone Number</h6>
                          +987 876 765 76 577
                        </div>
                      </div>
                      <div className="contact-box">
                        <div className="icon">
                          <i className="flaticon-message" />
                        </div>
                        <div className="desc">
                          <h6 className="title">Email Address</h6>
                          <Link to="#">info@webmail.com</Link>
                        </div>
                      </div>
                      <div className="contact-box">
                        <div className="icon">
                          <i className="flaticon-location-pin" />
                        </div>
                        <div className="desc">
                          <h6 className="title">Office Address</h6>
                          14/A, Miranda City, NYC
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area light-theme pt-30 pb-30">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-5 order-2 order-md-1">
                  <p className="copyright-text copyright-two">Copyright By@<Link to="#">Metropolitanthemes</Link> - 2020</p>
                </div>
                <div className="col-lg-6 col-md-7 order-1 order-md-2">
                  <div className="footer-menu text-center text-md-right">
                    <ul>
                      <li><Link to="#">Terms of use</Link></li>
                      <li><Link to="#">Privacy Environmental Policy</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*====== FOOTER END ======*/}
      </div>
    );
  }
}

export default Footerthree;
