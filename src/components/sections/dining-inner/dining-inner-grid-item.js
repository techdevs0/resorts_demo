import React, { Component } from 'react';

const OtherRecommendations = (props) => {
  return (
    <div className="dining-recommendations-wrapper">
      <h2 className="section-heading text-muted">{props.title}</h2>
      <div className="container-fluid">
        <div className="row">
          {
            props.data?.map((x, i) => (
              <div className="col-12 col-md-4">
                <div className="grid-item">
                  <div className="dining-title" style={{ backgroundImage: `url(${x.image})` }}>
                    <h4>{x.title}</h4>
                    <div className="slide-hover-overlay"></div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default OtherRecommendations;