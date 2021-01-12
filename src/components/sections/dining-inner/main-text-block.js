import React from 'react';

const DiningInnerTitleBlock = (props) => {
  return (
    <div className="dining-inner-title-block">
      <div className="container">
        <div className="title-image-wrapper">
          <img src={require('./../../../assets/img/room-suites/room1.jpg')} />
        </div>
        <h1>{props.title}</h1>
        <p>
          Offering countless experience with outstanding services. Lorem ipsum doler set amet. Offering countless experience with outstanding services. Lorem ipsum doler set amet. Offering countless experience with outstanding services. Lorem ipsum doler set amet. Offering countless experience with outstanding services. Lorem ipsum doler set amet. Offering countless experience with outstanding services. Lorem ipsum doler set amet.
      </p>
      </div>
    </div>
  );
}

export default DiningInnerTitleBlock;