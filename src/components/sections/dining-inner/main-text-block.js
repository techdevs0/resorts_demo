import React from 'react';

const DiningInnerTitleBlock = (props) => {
  return (
    <div className="dining-inner-title-block">
      <div className="container">
        <div className="title-image-wrapper">
          <img src={props.dining.thumbnail} />
        </div>
        <h2>{props.dining.post_name}</h2>
        <p dangerouslySetInnerHTML={{__html: props.introSection?.section_content}}>
          
      </p>
      </div>
    </div>
  );
}

export default DiningInnerTitleBlock;