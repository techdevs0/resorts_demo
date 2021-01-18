import React, { Component } from 'react';

const WeddingGridItem = (props) => {
  return (
    <div className="wedding-grid-item-wrapper">
      <div className="grid-item">
        <div className="wedding-title" style={{ backgroundImage: `url(${props.image})` }}>
          <div className="slide-hover-overlay"></div>
        </div>
        <div className="wedding-description">
          <h4 className="mb-2">{props.title}</h4>
          <ul>
            {
              props.description?.map(x => (
                // <span className="d-block w-50 float-left text-left">• {x}</span>
                <li>{x}</li>
              ))
            }
          </ul>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
}

export default WeddingGridItem;