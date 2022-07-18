import React from 'react';
import RoomGridItem from './leisure-grid-item';

const LeisureGrid = (props) => {
  return (
    <div className='container'>
      <div className='leisure-grid-wrapper'>
        {
          Object.entries(props.actData)?.map(([key, x]) => (
            <RoomGridItem title={x.section_name} image={x.section_avatar?.avatar} />
          ))
        }
      </div>
    </div>
  );
}

export default LeisureGrid;