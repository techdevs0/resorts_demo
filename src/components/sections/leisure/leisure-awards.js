import React from 'react';

const LeisureAwards = (props) => {
  return ( 
    <div className="leisure-awards-wrapper">
      <div className="container">
        <h2 className="section-heading">Awards and Certifications</h2>
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="award-image-wrapper">
              <img src={require('./../../../assets/img/leisure/sustain.png')} alt="sustain" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="award-image-wrapper">
              <img src={require('./../../../assets/img/leisure/excellence.png')} alt="excellence" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="award-image-wrapper">
              <img src={require('./../../../assets/img/leisure/leading.png')} alt="leading" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="award-image-wrapper">
              <img src={require('./../../../assets/img/leisure/leading.png')} alt="leading" />
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default LeisureAwards;