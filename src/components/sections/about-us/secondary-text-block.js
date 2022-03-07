import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'

class AboutSecondaryTextBlock extends Component {
  render() {
    return (
      <>
        <h2 className="section-heading text-muted">Escape and Enjoy in your own little paradise</h2>
        <section className="text-block pt-100">
          <div className="container">
            <ReactWOW animation="fadeInLeft" data-wow-delay=".3s">
              <div className="row align-items-center1 justify-content-space-between bg-div">
                <div className="col-lg-6">
                  <div className="text-img text-center text-lg-left mb-3 image-wrapper">
                    <img src={require('../../../assets/img/about/dine.jpg')} alt="" />
                  </div>
                </div>
                <ReactWOW animation="fadeInRight" data-wow-delay=".5s">
                  <div className="col-lg-6 col-md-8 col-sm-10">
                    <div className="block-text h-100 d-flex flex-column justify-content-between align-items-start">
                      <div className="section-title mb-10">
                        <h1>Dine Elegantly <br /> With Us</h1>
                      </div>
                      <p className="text-justify my-1">The two of the best restaurants in Seychelles allow you to savor scrumptious flavors and aromas while sipping exotic cocktails to views of the Indian Ocean’s most spectacular sunset, offering countless experiences with outstanding services throughout your discovery. Enjoy the most toothsome mix of authentic Creole and International cuisine.  Paris Seychelles Restaurant allows you to dine under the stars with a picturesque setting while Le Cardinal  Restaurant offers a new perspective to the mornings with unmatched ambiance. </p>
                      <Link to="/fine-dining-seychelles" className="main-btn btn-filled mt-40" style={{ background: '#183254', borderColor: '#183254' }}>Learn More</Link>
                    </div>
                  </div>
                </ReactWOW>
              </div>
            </ReactWOW>
          </div>
        </section>
      </>
    );
  }
}

export default AboutSecondaryTextBlock;
