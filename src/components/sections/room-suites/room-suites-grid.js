import React from 'react';
import RoomGridItem from './room-grid-item';

const RoomSuiteGrid = (props) => {
  return (
    <div className='container'>
      <h1 className="section-heading text-muted">{props.title}</h1>
      <div className='room-suite-grid-wrapper'>
        {
          props.data?.map(x => (
            <RoomGridItem key={x.id} id={x.id} title={x.post_name} image={x.thumbnail} link={x.link} linkText={x.linkText} description={x.short_description} url={x.post_url} />
          ))
        }
      </div>
    </div>
  );
}

export default RoomSuiteGrid;