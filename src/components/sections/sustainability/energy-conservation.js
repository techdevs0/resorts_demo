import React from 'react';

const SustainEngeryBlock = (props) => {
  return (
    <div className="pillars-block py-4">
      <div className="container">
        <div className="d-flex flex-wrap title-flex">
          <div className="pillars-item img-wrapper">
            <img src={require('./../../../assets/img/sustain/pillars.jpg')} />
          </div>
          <div className="pillars-item">
            <h3 className="ml-sm-4">ENERGY CONSERVATION</h3>
            <p className="text-justify ml-sm-4">Usage of Light timers and LED lights to conserve energy are a few of the concrete steps taken by Fisherman’s Cove. These actions highlight that we are determined and are moving towards the goal of a sustainable future</p>
            <p className="download-para ml-sm-4">
              Download the sustainability project brochure for more information.
            </p>
            <button className="main-btn btn-eden ml-sm-4">Download</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SustainEngeryBlock;