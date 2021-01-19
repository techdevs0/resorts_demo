import React, { Component } from 'react';
import RoomGridItem from './wedding-grid-item';

const WeddingGrid = (props) => {
  return (
    <div className='container'>
      <h2 className="section-heading text-muted">{props.title}</h2>
      <div className='wedding-grid-wrapper'>
        {
          props.data?.map(x => (
            <RoomGridItem title={x.title} image={x.image} link={x.link} linkText={x.linkText} description={x.description} />
          ))
        }
      </div>
    </div>
  );
}

export default WeddingGrid;