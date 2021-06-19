import React, { Component } from 'react';
import RoomGridItem from './offer-grid-item';

const OfferGrid = (props) => {
  return (
    <div className='container'>
      {
        props.title && <h1 className="offer-grid-title">{props.title}</h1>
      }
      <div className='offer-grid-wrapper'>
        {
          props.data?.map(x => (
            <RoomGridItem title={x.post_name} image={x.banner_img} link={x.link} linkText={x.linkText} description={x.short_description} />
          ))
        }
      </div>
    </div>
  );
}

export default OfferGrid;