import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactWOW from 'react-wow'

class Textblock extends Component {
    state = {
    open: false,
    };
    onOpenModal = () => {
    this.setState({ open: true });
    };
    
    onCloseModal = () => {
    this.setState({ open: false });
    };
    render() {
    const { open } = this.state;
    
    return (
        <section className="text-block with-bg pt-115 pb-115" style={{backgroundImage: 'url(assets/img/bg/02.jpg)'}}>
            <div className="container">
            <div className="row align-items-center justify-content-center justify-content-lg-between">
                <ReactWOW animation="fadeInLeft" data-wow-delay=".3s">
                <div className="col-lg-5 col-md-8 col-sm-10">
                <div className="block-text mb-small">
                    <div className="section-title mb-20">
                    <span className="title-tag">Take a tour</span>
                    <h2>Discover Our Underground.</h2>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Link to="/contact" className="main-btn btn-filled mt-40">Book now</Link>
                </div>
                </div>
                </ReactWOW>
                <ReactWOW animation="fadeInRight" data-wow-delay=".5s">
                <div className="col-lg-6 col-md-10">
                <div className="video-wrap" style={{backgroundImage: 'url(assets/img/text-block/01.jpg)'}}>
                    <div onClick={this.onOpenModal} className="popup-video"><i className="fas fa-play" /></div>
                    <Modal open={open} onClose={this.onCloseModal} center classNames={{
                    modal: 'video-modal',
                    }}>
                    <iframe src="https://www.youtube.com/embed/EEJFMdfraVY" title="title"></iframe>
                    </Modal>
                </div>
                </div>
                </ReactWOW>
            </div>
            </div>
        </section> 
        
    );
  }
}

export default Textblock;
