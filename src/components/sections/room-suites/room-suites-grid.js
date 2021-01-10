import React, { Component } from 'react';
import RoomGridItem from './room-grid-item';

const RoomSuiteGrid = (props) => {
  return (
    <div className='container'>
      <h1 className="room-suite-grid-title">{props.title}</h1>
      <div className='room-suite-grid-wrapper'>
        {
          props.data?.map(x => (
            <RoomGridItem title={x.title} image={x.image} link={x.link} linkText={x.linkText} description={x.description} />
          ))
        }
      </div>
    </div>
  );
}

export default RoomSuiteGrid;