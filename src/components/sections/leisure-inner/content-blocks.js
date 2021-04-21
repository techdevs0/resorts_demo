import React from 'react';


const LeisureContentBlocks = (props) => {
  return (
    <div className="content-blocks">
      <div className="container">
        <h2 className="text-center main-title">Other Resort Activities</h2>
        {
          Object.entries(props.activities)?.map(([key, x]) => (
            <div className="content-item">
              <div className="text-item">
                <h4>{x.section_name}</h4>
                <div dangerouslySetInnerHTML={{ __html: x.section_content }}></div>
              </div>
              <div className="image-item">
                <img className="img-thumbnail" src={x.section_avatar} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default LeisureContentBlocks;