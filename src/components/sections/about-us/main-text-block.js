import React, { Component } from 'react';

const AboutTitleBlock = (props) => {
  return (
    <div className="about-title-block">
      <div className="container">
        <h2 className="text-center">Inherited Paradise</h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="about-title-item">
            <p className="mr-sm-4 mb-2">
              Located in Bel Ombre on the island of Mahe, the origin of Seychelles hospitality, Fishermans Cove Resort is the first hotel that opened in Seychelles providing the best location immersed in a lush tropical paradise. Whether walking on one of the most beautiful beaches in Seychelles, pampering yourself at the spa, or savoring the extraordinary nuances of Creole cuisine, a stay at the resort creates memories for a lifetime.
              <br />
              <br />
              Renowned for beautiful views and unmatched facilities including two fine dining restaurants and bars, Fishermans Cove is among the top resorts in Seychelles. You can expect luxurious service at the resort while enjoying never-ending recreational activities in Seychelles that can keep you hitched. From just enjoying the views from private balconies to scuba diving and snorkeling or even playing a round of golf, the opportunities are endless. You can expect nothing less than a congenial stay at this legendary establishment in Seychelles.
            </p>
          </div>
          <div className="about-title-item img-wrapper">
            <img src={require('./../../../assets/img/about/inherited.jpg')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTitleBlock;