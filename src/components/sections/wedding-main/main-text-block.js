import React, { Component } from 'react';

const WeddingTitleBlock = (props) => {
  return (
    <div className="wedding-title-block">
      <div className="container">
        <h2 className="text-center text-muted">Wedding in Seychelles</h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="wedding-title-item">
            <p className="text-justify mr-sm-4">
              Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet.
              Complimented by a peaceful environment. Lorem ipsum doler set amet.
              Complimented by a peaceful environment. Lorem ipsum doler set amet.
              Complimented by a peaceful environment. Lorem ipsum doler set amet.
              Complimented by a peaceful environment. Lorem ipsum doler set amet.
              Complimented by a peaceful environment. Lorem ipsum doler set amet.
          </p>
          <p className="text-justify mr-sm-4">
              Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet.
              Complimented by a peaceful environment. Lorem ipsum doler set amet.
          </p>
          </div>
          <div className="wedding-title-item img-wrapper">
            <img src={require('./../../../assets/img/banner/home.jpg')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeddingTitleBlock;