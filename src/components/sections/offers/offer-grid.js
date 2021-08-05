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
            <RoomGridItem key={x.id} id={x.id} route={x.route} title={x.post_name} thumbnail={x.thumbnail} banner={x.banner_img} link={x.link} linkText={x.linkText} description={x.short_description} />
          ))
        }
      </div>
    </div>
  );
}

export default OfferGrid;