import React, { Component } from 'react';

const AboutTitleBlock = (props) => {
  return (
    <div className="about-title-block">
      <div className="container">
        <h2 className="text-center">Inherited Paradise</h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="about-title-item">
            <p className="mr-sm-4 mb-2">
              Located in Bel Ombre on the island of Mahe, the origin of Seychelles hospitality, Fisherman’s Cove Resort is the first hotel that opened in Seychelles providing the best location immersed in a lush tropical paradise. Whether walking on one of the most beautiful beaches in Seychelles, pampering yourself at the spa, or savoring the extraordinary nuances of Creole cuisine, a stay at the resort creates memories for a lifetime.
            </p>
            <p className="mr-sm-4">
              Renowned for beautiful views and unmatched facilities including two fine dining restaurants and bars, Fisherman’s Cove is among the top resorts in Seychelles. You can expect luxurious service as well as never-ending recreational activities that can keep you hitched. From just enjoying the views from private balconies to scuba diving and snorkeling or even playing a round of golf, the opportunities are endless. You can expect nothing less than a luxurious stay at this inherited paradise.
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