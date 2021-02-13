import React from 'react';
import RoomGridItem from './leisure-grid-item';

const LeisureGrid = (props) => {
  return (
    <div className='container'>
      {
        props.title && <h1 className="leisure-grid-title">{props.title}</h1>
      }
      <div className='leisure-grid-wrapper'>
        {
          props.data?.map(x => (
            <RoomGridItem title={x.title} image={x.image} link={x.link} linkText={x.linkText} description={x.description} />
          ))
        }
      </div>
    </div>
  );
}

export default LeisureGrid;