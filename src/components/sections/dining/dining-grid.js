import React, { Component } from 'react';
import RoomGridItem from './dining-grid-item';

const DiningGrid = (props) => {
  return (
    <div className='container-fluid'>
      <h1 className="dining-grid-title">{props.title}</h1>
      <div className='dining-grid-wrapper'>
        {
          props.data?.map(x => (
            <RoomGridItem title={x.title} image={x.image} link={x.link} linkText={x.linkText} description={x.description} />
          ))
        }
      </div>
    </div>
  );
}

export default DiningGrid;