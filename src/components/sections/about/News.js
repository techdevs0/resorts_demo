import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import blogimg1 from '../../../assets/img/latest-post/01.jpg';
import blogimg2 from '../../../assets/img/latest-post/02.jpg';
import blogimg3 from '../../../assets/img/latest-post/03.jpg';

const aboutblogPosts = [
  {
    photo: blogimg1,
    title: 'Each of our 8 double rooms has its own distinct.',
    url: '/news-details',
    date: '23rd March 2019',
    author: 'Admin',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    photo: blogimg2,
    title: 'Each of our 8 double rooms has its own distinct.',
    url: '/news-details',
    date: '23rd March 2019',
    author: 'Admin',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    photo: blogimg3,
    title: 'Each of our 8 double rooms has its own distinct.',
    url: '/news-details',
    date: '23rd March 2019',
    author: 'Admin',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];

class News extends Component {
  render() {
    return (
      <section className="latest-news pt-115 pb-115">
          <div className="container">
            <div className="section-title text-center">
              <span className="title-tag">Blog</span>
              <h2>News Feeds</h2>
            </div>
            {/* Latest post loop */}
            <div className="row justify-content-center mt-50">
            {aboutblogPosts.map((item, i) => (
              <div key={i} className="col-lg-4 col-sm-6">
                <div className="latest-post-box mt-30">
                  <div className="post-img" style={{backgroundImage: "url("+ item.photo + ")"}} />
                  <div className="post-desc">
                    <ul className="post-meta">
                      <li>
                        <Link to={item.url}><i className="fal fa-calendar-alt" />{item.date}</Link>
                      </li>
                      <li>
                        <Link to={item.url}><i className="fal fa-user" />By {item.author}</Link>
                      </li>
                    </ul>
                    <h4><Link to={item.url}>{item.title}</Link></h4>
                    <p>
                    {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
        
    );
  }
}

export default News;
