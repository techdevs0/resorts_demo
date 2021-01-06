import React, { Component } from 'react'
import Headerfour from '../layouts/Headerfour';
import Footer from '../layouts/Footer';
import Roomsidebar from '../layouts/Roomsidebar';
import { Link } from 'react-router-dom';

class Roomdetails extends Component {
  render() {
    return (
      <div>
        <Headerfour />
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
        {/*====== ROOM-DETAILS START ======*/}
        <section className="room-details pt-120 pb-90">
          <div className="container">
            <div className="row">
              {/* details */}
              <div className="col-lg-8">
                <div className="deatils-box">
                  <div className="title-wrap">
                    <div className="title">
                      <div className="room-cat">double bed</div>
                      <h2>Luxury Double Bed</h2>
                    </div>
                    <div className="price">
                      $345<span>/Night</span>
                    </div>
                  </div>
                  <div className="thumb">
                    <img src="assets/img/room/details.jpg" alt="" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                    dolore magnam aliquam quaerat voluptatem.
                  </p>
                  <div className="room-fearures clearfix mt-60 mb-60">
                    <h3 className="subtitle">Amenities</h3>
                    <ul className="room-fearures-list">
                      <li><i className="fal fa-bath" /> Air conditioner</li>
                      <li><i className="fal fa-wifi" />High speed WiFi</li>
                      <li><i className="fal fa-key" />Strong Locker</li>
                      <li><i className="fal fa-cut" />Breakfast</li>
                      <li><i className="fal fa-guitar" />Kitchen</li>
                      <li><i className="fal fa-lock" />Smart Security</li>
                      <li><i className="fal fa-broom" />Cleaning</li>
                      <li><i className="fal fa-shower" />Shower</li>
                      <li><i className="fal fa-headphones-alt" />24/7 Online Support</li>
                      <li><i className="fal fa-shopping-basket" />Grocery</li>
                      <li><i className="fal fa-bed" />Single bed</li>
                      <li><i className="fal fa-users" />Expert Team</li>
                      <li><i className="fal fa-shopping-cart" />shop near</li>
                      <li><i className="fal fa-bus" />Towels</li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                    dolore magnam aliquam quaerat voluptatem.
                  </p>
                  <div className="testimonials mt-60 mb-20">
                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <div className="testimonial-box">
                          <div className="client-img">
                            <img src="assets/img/testimonial/01.png" alt="" />
                            <span className="check"><i className="fal fa-check" /></span>
                          </div>
                          <h3>Rosalina D. William</h3>
                          <span className="clinet-post">Founder, qux co.</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor
                            incididunt ut labore et dolore.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="testimonial-box">
                          <div className="client-img">
                            <img src="assets/img/testimonial/02.png" alt="" />
                            <span className="check"><i className="fal fa-check" /></span>
                          </div>
                          <h3>Donald H. Hilixer</h3>
                          <span className="clinet-post">Founder, hilix</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor
                            incididunt ut labore et dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="room-rules clearfix mb-60">
                    <h3 className="subtitle">House Rules</h3>
                    <ul className="room-rules-list">
                      <li>No smoking, parties or events.</li>
                      <li>Check-in time from 2 PM, check-out by 10 AM.</li>
                      <li>Time to time car parking</li>
                      <li>Download Our minimal app</li>
                      <li>Browse regular our website</li>
                    </ul>
                  </div>
                  <div className="cancellation-box clearfix mb-60">
                    <h3 className="subtitle">Cancellation</h3>
                    <p>
                      Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus
                      mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu
                      dolor. <strong>Cancel up</strong> to <strong>14 days</strong> to get a full refund.
                    </p>
                  </div>
                  <div className="room-map mb-60" id="roomMap">
                    <iframe src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" title="title" /> 
                  </div>
                  <div className="related-room">
                    <h3 className="subtitle">Related Rooms</h3>
                    <div className="row room-gird-loop">
                      <div className="col-lg-6 col-sm-6">
                        <div className="room-box mb-30">
                          <div className="room-img-wrap">
                            <div className="room-img" style={{backgroundImage: 'url(assets/img/room/13.jpg)'}}>
                            </div>
                          </div>
                          <div className="room-desc">
                            <ul className="icons">
                              <li><i className="fal fa-bed" /></li>
                              <li><i className="fal fa-wifi" /></li>
                              <li><i className="fal fa-car" /></li>
                              <li><i className="fal fa-coffee" /></li>
                              <li><i className="fal fa-concierge-bell" /></li>
                              <li><i className="fal fa-compress-arrows-alt" /></li>
                              <li><i className="fal fa-swimmer" /></li>
                            </ul>
                            <h4 className="title"><Link to="#">Minimal Duplex Room</Link></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod
                              tempor.</p>
                            <span className="price">$345/Night</span>
                            <Link to="/room-details" className="book-btn">Booking Now</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="room-box mb-30">
                          <div className="room-img-wrap">
                            <div className="room-img" style={{backgroundImage: 'url(assets/img/room/14.jpg)'}}>
                            </div>
                          </div>
                          <div className="room-desc">
                            <ul className="icons">
                              <li><i className="fal fa-bed" /></li>
                              <li><i className="fal fa-wifi" /></li>
                              <li><i className="fal fa-car" /></li>
                              <li><i className="fal fa-coffee" /></li>
                              <li><i className="fal fa-concierge-bell" /></li>
                              <li><i className="fal fa-compress-arrows-alt" /></li>
                              <li><i className="fal fa-swimmer" /></li>
                            </ul>
                            <h4 className="title"><Link to="#">Minimal Duplex Room</Link></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod
                              tempor.</p>
                            <span className="price">$345/Night</span>
                            <Link to="/room-details" className="book-btn">Booking Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* form */}
              <div className="col-lg-4">
                <Roomsidebar />
              </div>
            </div>
          </div>
        </section>
        {/*====== ROOM-DETAILS END ======*/}
        <Footer />
      </div>

    );
  }
}

export default Roomdetails;
