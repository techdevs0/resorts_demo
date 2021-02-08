import React from 'react';
import { Link } from 'react-router-dom';

const SpaWellnessTitleBlock = (props) => {
  return (
    <div className="projects-block">
      <div className="container">
        <div className="d-flex flex-wrap title-flex">
          <div className="projects-item">
            <h2 className=" mr-sm-4">{props.data?.section_name}</h2>
            {/* <h6>Feel the joy</h6>
            <p className="text-justify mr-sm-4">
              Enjoy a rejuvenating experience at Sesel Spa located at our Sister Property - STORY Seychelles. There are numerous resorts with spa treatments in Seychelles. However, our extraordinary service is what makes us stand out. Explore the healing elements in nature and discover the true essence of being at one with the elements. Named as a tribute to its destination (Sesel is the Creole name for Seychelles), this blissful space features a total of seven treatment rooms including five single rooms and two couple suites. Vichy Hydrotherapy adds value in addition to the suites and spa. We also have a salon for nails, hair, and other beauty therapies.
            </p>
            <br />
            <p >You can avail the spa facilities at our sister resort, STORY Seychelles <br /> right next door. </p> */}
            <div dangerouslySetInnerHTML={{__html: props.data?.section_content}}>

            </div>
            <Link to="/files/Spa-Pricelist-2020-November.pdf" download target="_blank">
              <button className="main-btn btn-eden">Download SPA Menu</button>
            </Link>
          </div>
          <div className="projects-item img-wrapper">
            <img src={require('./../../../assets/img/spa/spa.jpg')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaWellnessTitleBlock;