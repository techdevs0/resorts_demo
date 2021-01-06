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
        <section className="text-block bg-black with-pattern pt-115 pb-115">
            <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-10 order-2 order-lg-1">
                <div className="block-text">
                    <div className="section-title mb-20">
                    <span className="title-tag">intro video</span>
                    <h2>Meet With Our
                        Luxury Place.</h2>
                    </div>
                    <p className="pr-50">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat you have to understand this.
                    </p>
                    <Link to="/room-details" className="main-btn btn-filled mt-40">Book now</Link>
                </div>
                </div>
                <ReactWOW animation="fadeInRight" data-wow-delay=".3s">
                <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                <div className="video-wrap video-wrap-two mb-small" style={{backgroundImage: 'url(assets/img/text-block/03.jpg)'}}>
                    <div className="popup-video"onClick={this.onOpenModal}><i className="fas fa-play" /></div>
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
            <div className="pattern-wrap">
            <div className="pattern" />
            </div>
        </section>
        
    );
  }
}

export default Textblock;
