import React, { Component } from 'react';
import RoomGridItem from './gallery-grid-item';

const GalleryGrid = (props) => {
  return (
    <div className='container'>
      {
        props.title && <h1 className="gallery-grid-title">{props.title}</h1>
      }
      <div className='gallery-grid-wrapper'>
        {
          props.data?.map(x => (
            <RoomGridItem title={x.title} image={x.image} link={x.link} linkText={x.linkText} description={x.description} />
          ))
        }
      </div>
    </div>
  );
}

export default GalleryGrid;