import React, { Component } from 'react';

const WeddingGridItem = (props) => {
  return (
    <div className="wedding-grid-item-wrapper">
      <div className="grid-item">
        <div className="wedding-title" style={{ backgroundImage: `url(${props.image})` }}>
          <div className="slide-hover-overlay"></div>
        </div>
        <div className="wedding-description">
          <h3>{props.title}</h3>
          {
            props.description?.map(x => (
              <span className="d-block">{x}</span>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default WeddingGridItem;