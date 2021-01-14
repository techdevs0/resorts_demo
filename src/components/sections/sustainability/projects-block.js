import React from 'react';

const SustainProjectsBlock = (props) => {
  return (
    <div className="projects-block py-4">
      <div className="container">
        <div className="d-flex flex-wrap title-flex">
          <div className="projects-item">
            <h3 className=" mr-sm-4">Sustainability Projects</h3>
            <h6>REDUCE, REUSE, RECYCLE</h6>
            <p className="text-justify mr-sm-4">
              Use recycled products <br />
              Plastic Free <br />
              Encourage “Reuse and Recycle” of the paper <br />
              Composting <br />
              Segregation <br />
              Mobile App <br />
            </p>
            <h6>PROTECT WILDLIFE – FLORA &amp; FAUNA</h6>
            <p className="text-justify mr-sm-4">
              Our landscaping team maintains nearly 55% of the <br />
              70,000 sq.m area of the resort <br />
              Our lagoon is  maintained by a dedicated lagoon team and is
              home to wide variety of creatures <br />
              Grass Carps <br />
              Botanical Garden <br />
              Beach Clean Up <br />
              The coral restoration project
            </p>
            <p className="download-para">
              Download the sustainability project brochure for more information.
            </p>
            <button className="main-btn btn-filled">Download</button>
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