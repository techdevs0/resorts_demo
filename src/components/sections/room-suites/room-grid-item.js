import React, { Component } from 'react';

const RoomGridItem = (props) => {
  return (
    <div className="room-grid-item-wrapper">
      <div className="grid-item">
        <div className="room-title" style={{ background: `url(${props.image})` }}>
          <h3>{props.title}</h3>
          <a href={props.link}>{props.linkText}</a>
        </div>
        <div className="room-description">
          <p>{props.description}</p>
          <button className="main-btn btn-filled">Check Availability</button>
        </div>
      </div>
    </div>
  );
}

export default RoomGridItem;