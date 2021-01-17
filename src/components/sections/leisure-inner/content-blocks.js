import React from 'react';


const LeisureContentBlocks = (props) => {
  return (
    <div className="content-blocks">
      <div className="container">
        <h2 className="text-center main-title">Other Resort Activities</h2>
        {
          props.activities?.map(x => (

            <div className="content-item">
              <div className="text-item">
                <h4>{x.title}</h4>
                <p>
                  {x.content}
                </p>
              </div>
              <div className="image-item">
                <img className="img-thumbnail" src={x.image} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default LeisureContentBlocks;