import React, { Component } from 'react';
import RoomGridItem from './offer-grid-item';

const OfferGrid = (props) => {
  return (
    <div className='container-fluid'>
      {
        props.title && <h1 className="offer-grid-title">{props.title}</h1>
      }
      <div className='offer-grid-wrapper'>
        {
          props.data?.map(x => (
            <RoomGridItem title={x.title} image={x.image} link={x.link} linkText={x.linkText} description={x.description} />
          ))
        }
      </div>
    </div>
  );
}

export default OfferGrid;