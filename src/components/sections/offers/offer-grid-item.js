import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const OfferGridItem = (props) => {
  return (
    <div className="offer-grid-item-wrapper">
      <div className="grid-item" onClick={()=> props.history.push('offer-inner')}>
        <div className="offer-title" style={{ backgroundImage: `url(${props.image})`, backgroundSize:'cover', backgroundPosition:'center' }}>
          <h4>{props.title}</h4>
          <div className="slide-hover-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(OfferGridItem);
