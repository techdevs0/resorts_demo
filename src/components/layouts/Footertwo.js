import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../../utils/constants';
import Subscribe from '../sections/common/Subscribe';

class Footertwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redText: false
    };
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const className = this.state.isTop ? 'active' : '';
    const activeLang = localStorage.getItem('lang');

    return (
      <div>
        {/*====== Back to Top ======*/}
        <Link to="#" className={`back-to-top ${className}`} id="backToTop" onClick={() => this.scrollToTop()}>
          <i className="fal fa-angle-double-up" />
        </Link>
        {/*====== FOOTER START ======*/}
        <footer className={`footer-two ${window.location.pathname === "/" || window.location.pathname === "/en" || window.location.pathname === "/fr" || window.location.pathname === "/de" || window.location.pathname === "/ru" ? "" : " mt-5"}`}>
          <div className="footer-widget-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 footerLinks">
                  <div className="widget nav-widget">
                    <div>
                      <img
                        src={require("./../../assets/img/logo/resort-logo.png")}
                        style={{ filter: "brightness(0) invert(1)" }}
                        alt="fishermans cove logo"
                      />
                      <h1>
                        About us
                      </h1>
                      <p>
                        Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.
                      </p>
                      <div className="social-icons pt-3">
                        <a href="https://www.facebook.com/fishermanscoveresort/" target='_blank'><i className="fab fa-facebook-f" /></a>
                        <a href="https://twitter.com/fisherman_cove" target='_blank'><i className="fab fa-twitter" /></a>
                        <a href="https://www.instagram.com/fishermanscove.resort/" target='_blank'><i className="fab fa-instagram" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 footerLinks">
                  <div className="widget nav-widget">
                    <div>
                      <h1>
                        Quick Links
                      </h1>
                      <ul>

                        {
                          this.props.footerLinks?.find((x) => x.type === "footer")?.second?.links?.map(x => (
                            <li><Link to={`/${activeLang}/${x.slug}`}>{x.text}</Link></li>

                          ))
                        }

                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="widget site-info-widget">
                    <Subscribe
                      activeLang={activeLang}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area py-2">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-8">
                  <p className="copyright-text copyright-two text-center">
                    {/* {constants?.site_content?.footer_content?.copyright_by[activeLang]} */}
                    Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made by <Link to="#">Resorts Demo</Link>
                  </p>
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
