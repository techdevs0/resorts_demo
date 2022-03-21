import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Blogsidebar extends Component {
  render() {
    const { recentBlog } = this.props;
    return (
      <div className="sidebar">
        {/* Popular Post Widget */}
        <div className="widget popular-feeds mb-40">
          <h5 className="widget-title">Recent Blogs</h5>
          <div className="popular-feed-loop">

            {
              recentBlog.map((x, i) => (
                <div className="single-popular-feed" key={i}>
                  <div className="feed-img">
                    <img src={x?.img} alt="image" />
                  </div>
                  <div className="feed-desc">
                    <h6><Link to={`/blog-inner/${x?.slug}`}>
                      {x?.title}
                    </Link></h6>
                    <span className="time"><i className="far fa-calendar-alt" />
                      {new Date(x?.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))
            }




            {/* <div className="single-popular-feed">
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
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Blogsidebar;
