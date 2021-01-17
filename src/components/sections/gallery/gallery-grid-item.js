import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const GalleryGridItem = (props) => {
  return (
    <div className="gallery-grid-item-wrapper">
      <div className="grid-item" onClick={()=> props.history.push('gallery-inner')}>
        <div className="gallery-title" style={{ backgroundImage: `url(${props.image})` }}>
          <h4>{props.title}</h4>
          <div className="slide-hover-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(GalleryGridItem);
