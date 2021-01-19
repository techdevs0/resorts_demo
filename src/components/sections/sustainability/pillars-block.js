import React from 'react';

const SustainPillarsBlock = (props) => {
  return (
    <div className="pillars-block py-4">
      <div className="container">
        <div className="d-flex flex-wrap title-flex">
          <div className="pillars-item img-wrapper">
            <img src={require('./../../../assets/img/sustain/pillars.jpg')} />
          </div>
          <div className="pillars-item">
            <h3 className="ml-sm-4">Our 5 pillars in sustainability</h3>
            <p className="text-justify ml-sm-4">
              This Eco-project is based on 5 interconnected pillars. It is impossible to think about nature, wildlife and an Eco-friendly life separately. These elements are all intertwined, like a group of Hawksbill Sea Turtles swimming through a marine current.
            </p>
            <h6 className="ml-sm-4">5 Pillars</h6>
            <p className="text-justify ml-sm-4">
              • REDUCE, REUSE, RECYCLE <br />
              • PROTECT WILDLIFE – FLORA &amp; FAUNA <br />
              • REDUCE WATER CONSUMPTION <br />
              • ENERGY CONSERVATION <br />
              • LOCAL CARE &amp; FAIR TRAD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainPillarsBlock;