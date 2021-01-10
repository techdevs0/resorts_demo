import React, { Component } from 'react';

const DiningGridItem = (props) => {
  return (
    <div className="dining-grid-item-wrapper">
      <div className="grid-item">
        <div className="dining-title" style={{ background: `url(${props.image})` }}>
          <h3>{props.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default DiningGridItem;