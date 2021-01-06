import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
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
        
        {/*====== FOOTER PART START ======*/}
        <footer>
          <div className="footer-subscibe-area pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="subscribe-text text-center">
                    <div className="footer-logo mb-45">
                      <img src="assets/img/logo-2.png" alt="" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doing
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi.
                    </p>
                    <form action="#" className="subscribe-form mt-50">
                      <input type="email" placeholder="Enter your email address" />
                      <button type="submit">subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area pt-20 pb-20">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-5 order-2 order-md-1">
                  <p className="copyright-text">copyright by@metropolitanthemes</p>
                </div>
                <div className="col-md-7 order-1 order-md-2">
                  <div className="social-links">
                    <Link to="#"><i className="fab fa-facebook-f" /></Link>
                    <Link to="#"><i className="fab fa-twitter" /></Link>
                    <Link to="#"><i className="fab fa-behance" /></Link>
                    <Link to="#"><i className="fab fa-linkedin" /></Link>
                    <Link to="#"><i className="fab fa-youtube" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*====== FOOTER PART END ======*/}
      </div>
    );
  }
}

export default Footer;
