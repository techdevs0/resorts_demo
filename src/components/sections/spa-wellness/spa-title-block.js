import React from 'react';

const SpaWellnessTitleBlock = (props) => {
  return (
    <div className="projects-block">
      <div className="container">
        <div className="d-flex flex-wrap title-flex">
          <div className="projects-item">
            <h2 className=" mr-sm-4">Sesel Spa</h2>
            <h6>Feel the joy</h6>
            <p className="text-justify mr-sm-4">
            Enjoy a rejuvenating experience at Sesel Spa located at our Sister Property - STORY Seychelles. There are numerous resorts with spa treatments in Seychelles. However, our extraordinary service is what makes us stand out. Explore the healing elements in nature and discover the true essence of being at one with the elements. Named as a tribute to its destination (Sesel is the Creole name for Seychelles), this blissful space features a total of seven treatment rooms including five single rooms and two couple suites. Vichy Hydrotherapy adds value in addition to the suites and spa. We also have a salon for nails, hair, and other beauty therapies.
            </p>
            <p className="download-para">
              
            </p>
            <a href="https://www.hresortseychelles.com/spa-and-wellness/" className="main-btn btn-filled">Learn More</a>
          </div>
          <div className="projects-item img-wrapper">
            <img src={require('./../../../assets/img/banner/home.jpg')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaWellnessTitleBlock;