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
          props.data?.map((x, index) => (
            <RoomGridItem key={index} id={x._id} route={x.slug} title={x.post_name} thumbnail={x.thumbnailPreview} banner={x.banner_img} link={x.link} linkText={x.linkText} description={x.short_description} />
          ))
        }
      </div>
    </div>
  );
}

export default OfferGrid;