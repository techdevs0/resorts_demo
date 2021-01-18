import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footertwo extends Component {
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
          <div className="footer-widget-area pt-30 pb-30">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-6 order-1">
                  {/* Site Info Widget */}
                  <div className="widget site-info-widget mb-50">
                    <div className="footer-logo mb-1">
                      <img src="assets/img/logo-fisher.png" alt="fishermancove footer logo" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed doing eius mod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitat ion ullamco laboris nisi.
                    </p>
                    <div className="social-links mt-40 d-none">
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
                      <h4 className="widget-title">Services</h4>
                      <ul>
                        <li><Link to="#">Spa &amp; Fitness</Link></li>
                        <li><Link to="#">Leisure Activities </Link></li>
                        <li><Link to="#">Restarunts</Link></li>
                        <li><Link to="#">Conference Room</Link></li>
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Weddings In Sey </Link></li>
                        <li><Link to="#">Reservations</Link></li>
                        <li><Link to="#">Terms of Use</Link></li>
      
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-sm-6 order-2 order-lg-3">
                  {/* Contact Widget */}
                  <div className="widget contact-widget mb-50">
                    <h4 className="widget-title">Contact Us</h4>
                    <div className="contact-lists">
                      <div className="contact-box">
                        {/* <div className="icon">
                          <i className="flaticon-call" />
                        </div> */}
                        <div className="desc">
                          <h6 className="title">Phone Number</h6>
                          +987 876 765 76 577
                        </div>
                      </div>
                      <div className="contact-box">
                        {/* <div className="icon">
                          <i className="flaticon-message" />
                        </div> */}
                        <div className="desc">
                          <h6 className="title">Email Address</h6>
                          <Link to="#">info@webmail.com</Link>
                        </div>
                      </div>
                      <div className="contact-box">
                        {/* <div className="icon">
                          <i className="flaticon-location-pin" />
                        </div> */}
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
            <div className="footer-bottom-wrapper py-1">
              <div className="container d-flex flex-wrap justify-content-between align-items-center">
                <div className="py-2 footer-logos">
                  <a href="https://www.story-rabat.com/"><img className="px-2" src={require('./../../assets/img/footer/story-rabat-footer.png')} alt="sotry-rabat footer" /></a>
                  <a href="#"><img className="px-2" src={require('./../../assets/img/footer/story-hospitality-footer.png')} alt="story-rabat hospitality footer" /></a>
                  <a href="#"><img className="px-2" src={require('./../../assets/img/footer/cue-hotel-footer.png')} alt="cue hotel footer" /></a>
                  <a href="https://www.hhoteldubai.com/"> <img className="px-2 hhotel-dubai-footer" src={require('./../../assets/img/footer/hhotel-footer.png')} alt="hhotel footer" /></a>
                  <a href="/"><img className="px-2" src={require('./../../assets/img/footer/logo-fisher.png')} alt="fishermanscove footer" /></a>
                </div>
                <div className="social-icons py-2">
                  <Link to="#"><i className="fab fa-facebook-f" /></Link>
                  <Link to="#"><i className="fab fa-twitter" /></Link>
                  <Link to="#"><i className="fab fa-instagram" /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area py-3">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-5 order-2 order-md-1">
                  <p className="copyright-text copyright-two">Copyright By @<Link to="#">Fishermans Cove Resort</Link> - {new Date().getFullYear()}</p>
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

export default Footertwo;
