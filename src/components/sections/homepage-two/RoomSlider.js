import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { withRouter } from 'react-router-dom';
import { constants } from '../../../utils/constants';
// import Slider from "react-slick";
const placeholderImage = require('./../../../assets/img/img-placeholder.png')

const LazyImage = src => {
    const [sourceLoaded, setSourceLoaded] = useState(null)

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => setSourceLoaded(src)
    }, [src])

    return sourceLoaded
}

const RoomSlider = (props) => {

    return (
        <div className="room-slider-wrapper">
            <h2 className="section-heading text-muted">
                {constants?.site_content?.home_page?.rooms_slider?.title[props?.activeLang]}
            </h2>
            {/* <p className="w-75 text-center mx-auto">Turn your staycation into a blissful escape with a Suite Stay and 120 minutes of relaxing spa time starting from AED 850. Rejuvenate at the award-winning Mandara Spa and choose from our range of body treatments.</p> */}
            <Carousel
                dynamicHeight={false}
                showStatus={false}
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                centerMode
                stopOnHover={false}
                centerSlidePercentage={70}
                className="room-carousel center"
                interval={6000}
            >
                {/* <Slider {...settings}> */}
                {
                    props.data?.map(x => (
                        <div>
                            <div className="room-image-wrapper">
                                <img src={x.thumbnail} alt="" />
                            </div>
                            <div className="slide-content py-3">
                                <h1 style={{ cursor: 'pointer' }} onClick={() => props.history.push("/rooms/" + x.route)}>{x.post_name}</h1>
                                {/* <ul>
                                    {x.additional_details_list.map((li,index) => (
                                        <li key={index}>{li}</li>
                                    ))}
                                </ul> */}
                                <div dangerouslySetInnerHTML={{ __html: x.short_description }}>

                                </div>
                                <button
                                    className="main-btn btn-eden my-4"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.gtag_report_conversion(x.post_url, true)
                                    }}
                                >
                                    {constants?.site_content?.home_page?.banner?.btn3[props?.activeLang]}
                                </button>
                            </div>
                        </div>
                    ))
                }
                {/* </Slider> */}
            </Carousel>
        </div>
    );
}

export default withRouter(RoomSlider);