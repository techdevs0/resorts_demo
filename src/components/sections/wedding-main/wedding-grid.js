import React from 'react';
import RoomGridItem from './wedding-grid-item';

const WeddingGrid = (props) => {
  return (
    <div className='container'>
      <h2 className="section-heading text-muted">{props.title}</h2>
      <div className='wedding-grid-wrapper'>
        {
          props.data?.map(x => (
            <RoomGridItem title={x.post_name} image={x.thumbnail} link={x.link || ""} linkText={x.linkText || ""} description={x.post_content} />
          ))
        }
      </div>
    </div>
  );
}

export default WeddingGrid;