import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'

class Textblock extends Component {
    render() {
        return (
            <section className="text-block pt-100">
                <div className="container">
                    <ReactWOW animation="fadeInLeft" data-wow-delay=".3s">
                        <div className="row align-items-center1 justify-content-space-between">
                            <div className="col-lg-6">
                                <div className="text-img text-center text-lg-left mb-3 image-wrapper">
                                    <img src={require('../../../assets/img/text-block/hotel.webp')} alt="" />
                                </div>
                            </div>
                            <ReactWOW animation="fadeInRight" data-wow-delay=".5s">
                                <div className="col-lg-6 col-md-8 col-sm-10">
                                    <div className="block-text h-100 d-flex flex-column justify-content-between align-items-start">
                                        <div className="section-title mb-10">
                                            <h1>Best Resort in Mahé Seychelles</h1>
                                        </div>
                                        <p className="text-justify my-1">
                                            Situated at Beau Vallon Beach with its 3km sparkling ivory sand, Fishermans Cove Resort is the promise of genuine tranquility and eternal enjoyment. The guest rooms and suites are set amidst lush tropical gardens, complemented by a peaceful environment. This tropical escape sets the scene for explorers, romantic couples, and families to an inherited paradise.
                                        <br />
                                            <br />
                                        Offering countless experiences with outstanding services throughout your discovery,
                                        Fishermans Cove Resort is one of the best resorts in Seychelles. Restaurants and Bars allow you
                                        to savor scrumptious flavors and aromas while sipping exotic cocktails and enjoying views
                                        of the Indian Ocean’s most spectacular sunset. It offers two restaurants and two bars
                                        giving guests ample options to choose from.
                                        </p>
                                        <Link to="/rooms-suites-seychelles" className="main-btn btn-nile mt-40">Learn More</Link>
                                    </div>
                                </div>
                            </ReactWOW>
                        </div>
                    </ReactWOW>
                </div>
            </section>

        );
    }
}

export default Textblock;
