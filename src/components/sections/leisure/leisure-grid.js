import React from 'react';
import RoomGridItem from './leisure-grid-item';

const LeisureGrid = (props) => {
  return (
    <div className='container'>
      {/*{*/}
      {/*  props.title && <h1 className="leisure-grid-title">{props.title}</h1>*/}
      {/*}*/}
      <div className='leisure-grid-wrapper'>
          {
              Object.entries(props.actData)?.map(([key, x]) => (
                <RoomGridItem title={x.section_name} image={x.section_avatar}/>
          ))
        }
      </div>
    </div>
  );
}

export default LeisureGrid;