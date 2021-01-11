import React, { Component } from 'react';

const DiningGridItem = (props) => {
  return (
    <div className="dining-grid-item-wrapper">
      <div className="grid-item">
        <div className="dining-title" style={{ backgroundImage: `url(${props.image})` }}>
          <h4>{props.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default DiningGridItem;