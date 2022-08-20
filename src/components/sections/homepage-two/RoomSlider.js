import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { constants } from '../../../utils/constants';
import Slider from "react-slick";

const RoomSlider = (props) => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 5000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="room-slider-wrapper">
            <h2 className="section-heading text-muted">
                {constants?.site_content?.home_page?.rooms_slider?.title[props?.activeLang]}
            </h2>
            <Slider {...settings} >
                {
                    props.data?.map(x => (
                        <div className="room-carousel">
                            <div className="room-image-wrapper">
                                <img src={x.thumbnailPreview} alt="room image" loading="lazy" />
                            </div>
                            <div className="slide-content">
                                <h1>{x.post_name}</h1>
                                <div dangerouslySetInnerHTML={{ __html: x.short_description }}>
                                </div>
                                <button
                                    className="main-btn btn-eden my-4"
                                    onClick={() => props.history.push(`/${props?.activeLang}/rooms/${x.slug}`)}
                                >
                                    {constants?.site_content?.home_page?.banner?.btn3[props?.activeLang]}
                                </button>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default withRouter(RoomSlider);