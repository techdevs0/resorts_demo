import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const RoomGridItem = (props) => {
  return (
    <div className="room-grid-item-wrapper" onClick={()=>props.history.push('/rooms-inner'+props.id)}>
      <div className="grid-item">
        <div className="room-title" style={{ backgroundImage: `url(${props.image})`, backgroundPosition:'center', backgroundSize:'cover' }}>
          <h3>{props.title}</h3>
          <a href={props.link}>{props.linkText}</a>
          <div className="slide-hover-overlay"></div>
        </div>
        <div className="room-description">
          <p>{props.description}</p>
          <button className="main-btn btn-filled">Check Availability</button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(RoomGridItem);