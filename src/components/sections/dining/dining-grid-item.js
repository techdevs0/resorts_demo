import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const DiningGridItem = (props) => {
  return (
    <div className="dining-grid-item-wrapper">
      <div className="grid-item" onClick={()=> props.history.push('dining-inner')}>
        <div className="dining-title" style={{ backgroundImage: `url(${props.image})` }}>
          <h4>{props.title}</h4>
          <div className="slide-hover-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(DiningGridItem);
