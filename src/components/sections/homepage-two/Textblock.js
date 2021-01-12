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
                                <div className="text-img text-center text-lg-left mb-small image-wrapper">
                                    <img src={require('../../../assets/img/text-block/hotel.jpg')} alt="" />
                                </div>
                            </div>
                            <ReactWOW animation="fadeInRight" data-wow-delay=".5s">
                                <div className="col-lg-6 col-md-8 col-sm-10">
                                    <div className="block-text h-100 d-flex flex-column justify-content-between align-items-start">
                                        <div className="section-title mb-20">

                                            <h1>About Fisherman's <br /> Cove Resort</h1>
                                        </div>
                                        <p className="text-justify my-1">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua.
                                        <br />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                            <br />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <Link to="/about" className="main-btn btn-filled mt-40" style={{ background: '#183254', borderColor: '#183254' }}>Learn More</Link>
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
