import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
  render() {
    return (
      <section className="breadcrumb-area" style={{backgroundImage: 'url(assets/img/bg/04.jpg)'}}>
        <div className="container">
          <div className="breadcrumb-text">
            <span>The ultimate luxury</span>
            <h2 className="page-title">Place Details</h2>
            <ul className="breadcrumb-nav">
              <li><Link to="/">Home</Link></li>
              <li className="active">Places</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Breadcrumb;
