import React from 'react';

const SustainIntroBlock = (props) => {
  return (
    <div className="intro-block pb-4">
      <div className="container">
        <h2 className="text-center main-title">Sustainability</h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="intro-item">
            <h3 className=" mr-sm-4">What is sustainability for Fisherman's Cove ?</h3>
            <h6>OUR MISSION</h6>
            <p className="text-justify mr-sm-4">
              Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. 
          </p>
          <h6>OUR VISION</h6>
          <p className="text-justify mr-sm-4">
              Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet.
          </p>
          </div>
          <div className="intro-item img-wrapper">
            <img src={require('./../../../assets/img/banner/home.jpg')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainIntroBlock;