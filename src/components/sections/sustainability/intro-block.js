import React from 'react';

const SustainIntroBlock = (props) => {
  return (
    <div className="intro-block pb-4">
      <div className="container">
        <h2 className="text-center main-title">Sustainability</h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="intro-item">
            {/* <h3 className=" mr-sm-4">What is sustainability for Fisherman's Cove ?</h3> */}
            <h6>OUR MISSION</h6>
            <p className="text-justify mr-sm-4">
            Fisherman’s Cove is built upon the principle of protecting the environment and moving forward towards a better and sustainable future.  </p>
          <h6>OUR VISION</h6>
          <p className="text-justify mr-sm-4">
          We are always striving to implement long-term strategies to rectify the harmful practices that can be detrimental to our environment.  Fisherman’s Cove is following a vision to manage and reduce the potential damages to the environment due to its business functions.
          <br />
It is a part of our core agenda to engage all the stakeholders to take concrete actions towards a better and sustainable future. 
  </p>
          </div>
          <div className="intro-item img-wrapper">
            <img className="img-thumbnail" src={require('./../../../assets/img/banner/home.jpg')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainIntroBlock;