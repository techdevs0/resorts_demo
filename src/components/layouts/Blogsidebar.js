import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Blogsidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        {/* About Author Widget */}
        <div className="widget about-author-widget mb-40">
          <h5 className="widget-title">About Me</h5>
          <div className="author-box">
            <img src="assets/img/author.png" alt="" />
            <h6>Rosalina D. Willaimson</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore.</p>
            <ul className="social-icon">
              <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
              <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
              <li><Link to="#"><i className="fab fa-behance" /></Link></li>
              <li><Link to="#"><i className="fab fa-linkedin" /></Link></li>
              <li><Link to="#"><i className="fab fa-youtube" /></Link></li>
            </ul>
          </div>
        </div>
        {/* Search Widget */}
        <div className="widget search-widget mb-40">
          <h5 className="widget-title">Search Objects</h5>
          <form action="#">
            <input type="text" placeholder="Search your keyword..." />
            <button type="submit"><i className="far fa-search" /></button>
          </form>
        </div>
        {/* Popular Post Widget */}
        <div className="widget popular-feeds mb-40">
          <h5 className="widget-title">Popular Feeds</h5>
          <div className="popular-feed-loop">
            <div className="single-popular-feed">
              <div className="feed-img">
                <img src="assets/img/recent-post-wid/04.png" alt="" />
              </div>
              <div className="feed-desc">
                <h6><Link to="/news-details">Lorem ipsum dolor sit cing elit, sed do.</Link></h6>
                <span className="time"><i className="far fa-calendar-alt" /> 24th March 2020</span>
              </div>
            </div>
            <div className="single-popular-feed">
              <div className="feed-img">
                <img src="assets/img/recent-post-wid/05.png" alt="" />
              </div>
              <div className="feed-desc">
                <h6><Link to="/news-details">Lorem ipsum dolor sit cing elit, sed do.</Link></h6>
                <span className="time"><i className="far fa-calendar-alt" /> 24th March 2020</span>
              </div>
            </div>
            <div className="single-popular-feed">
              <div className="feed-img">
                <img src="assets/img/recent-post-wid/06.png" alt="" />
              </div>
              <div className="feed-desc">
                <h6><Link to="/news-details">Lorem ipsum dolor sit cing elit, sed do.</Link></h6>
                <span className="time"><i className="far fa-calendar-alt" /> 24th March 2020</span>
              </div>
            </div>
          </div>
        </div>
        {/* Categories Widget */}
        <div className="widget categories-widget mb-40">
          <h5 className="widget-title">Categories</h5>
          <ul>
            <li>
              <Link to="/news-details">Business<span>26</span></Link>
            </li>
            <li>
              <Link to="/news-details">Consultant<span>26</span></Link>
            </li>
            <li>
              <Link to="/news-details">Creative<span>26</span></Link>
            </li>
            <li>
              <Link to="/news-details">UI/UX<span>26</span></Link>
            </li>
            <li>
              <Link to="/news-details">Technology<span>26</span></Link>
            </li>
          </ul>
        </div>
        {/* Social Icon Widget */}
        <div className="widget socail-widget mb-40">
          <h5 className="widget-title">Never Miss News</h5>
          <ul>
            <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
            <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
            <li><Link to="#"><i className="fab fa-behance" /></Link></li>
            <li><Link to="#"><i className="fab fa-linkedin" /></Link></li>
            <li><Link to="#"><i className="fab fa-pinterest" /></Link></li>
          </ul>
        </div>
        {/* Twitter Feeds Widget */}
        <div className="widget twitter-feed-widget mb-40">
          <h5 className="widget-title">Twitter Feeds</h5>
          <div className="twitter-looop">
            <div className="single-twitter">
              <Link to="#">
                Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @
                ThemeForest https://t.co/2r1POjOjgVC… https://t.co/rDAnPyClu1
              </Link>
              <span className="date">November 25, 2018</span>
            </div>
            <div className="single-twitter">
              <Link to="#">
                Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @
                ThemeForest https://t.co/2r1POjOjgVC… https://t.co/rDAnPyClu1
              </Link>
              <span className="date">November 25, 2018</span>
            </div>
            <div className="single-twitter">
              <Link to="#">
                Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @
                ThemeForest https://t.co/2r1POjOjgVC… https://t.co/rDAnPyClu1
              </Link>
              <span className="date">November 25, 2018</span>
            </div>
          </div>
        </div>
        {/* Instagram Feeds Widget */}
        <div className="widget instagram-feed-widget mb-40">
          <h5 className="widget-title">Instagram Feeds</h5>
          <ul>
            <li><img src="assets/img/instagram-wid/01.jpg" alt="" /></li>
            <li><img src="assets/img/instagram-wid/02.jpg" alt="" /></li>
            <li><img src="assets/img/instagram-wid/03.jpg" alt="" /></li>
            <li><img src="assets/img/instagram-wid/04.jpg" alt="" /></li>
            <li><img src="assets/img/instagram-wid/05.jpg" alt="" /></li>
            <li><img src="assets/img/instagram-wid/06.jpg" alt="" /></li>
            <li><img src="assets/img/instagram-wid/07.jpg" alt="" /></li>
            <li><img src="assets/img/instagram-wid/08.jpg" alt="" /></li>
            <li><img src="assets/img/instagram-wid/09.jpg" alt="" /></li>
          </ul>
        </div>
        {/* Popular Tags Widget */}
        <div className="widget popular-tag-widget mb-40">
          <h5 className="widget-title">Popular Tags</h5>
          <ul>
            <li><Link to="/news-details">Popular</Link></li>
            <li><Link to="/news-details">design</Link></li>
            <li><Link to="/news-details">ux</Link></li>
            <li><Link to="/news-details">usability</Link></li>
            <li><Link to="/news-details">develop</Link></li>
            <li><Link to="/news-details">icon</Link></li>
            <li><Link to="/news-details">business</Link></li>
            <li><Link to="/news-details">consult</Link></li>
            <li><Link to="/news-details">kit</Link></li>
            <li><Link to="/news-details">keyboard</Link></li>
            <li><Link to="/news-details">mouse</Link></li>
            <li><Link to="/news-details">tech</Link></li>
          </ul>
        </div>
        {/* Banner Ad Widget */}
        <div className="widget banner-ad-widget">
          <img src="assets/img/banner-widget.jpg" alt="" />
        </div>
      </div>
    );
  }
}

export default Blogsidebar;
