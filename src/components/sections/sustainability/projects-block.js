import React from 'react';

const SustainProjectsBlock = (props) => {
  return (
    <div className="projects-block py-4">
      <div className="container">
        <div className="d-flex flex-wrap title-flex">
          <div className="projects-item">
            {/* <h3 className=" mr-sm-4">Sustainability Projects</h3> */}
            <h6>PROTECT WILDLIFE – FLORA & FAUNA</h6>
            <p className="text-justify mr-sm-4">
             Fisherman’s Cove is a part of the Marine Conservation Society of Seychelles and also a part of projects like Beach Clean Up, and restoration project. Moreover, the use of water-saving faucets to reduce water consumption
            </p>
           
           
          </div>
          <div className="projects-item img-wrapper">
            <img src={require('./../../../assets/img/banner/home.jpg')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainProjectsBlock;