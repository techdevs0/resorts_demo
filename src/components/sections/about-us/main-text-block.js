import React, { Component } from 'react';

const AboutTitleBlock = (props) => {
  return (
    <div className="about-title-block py-4">
      <div className="container">
        <h2 className="text-center my-4">Inherited Paradise</h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="about-title-item">
            <p className="text-justify mr-sm-4">
              Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet.
          </p>
          <p className="text-justify mr-sm-4">
              Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet.
          </p>
          </div>
          <div className="about-title-item img-wrapper">
            <img src={require('./../../../assets/img/banner/home.jpg')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTitleBlock;