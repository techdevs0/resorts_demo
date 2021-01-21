import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// import Slider from "react-slick";

const room1 = require('../../../assets/img/hotel/01.jpg');
const room2 = require('../../../assets/img/hotel/02.jpg');
const room3 = require('../../../assets/img/hotel/03.jpg');
const room4 = require('../../../assets/img/hotel/04.jpg');

const rooms = [
    {
        title: "Junior Suite King",
        image: room1,
        accomodation: {
            left: 4,
            sleeps: 2,
            size: 'King',
            area: 55,
        },
        additional_details_list: [
            "King bed & Lounge area",
            "Bathroom with bath, shower & toiletries",
            "Air conditioning & Free WiFi",
            "Balcony overlooking the resort gardens",
            "Tea/coffee facilities & Minibar"
        ],
        rate: 1087.81,
        original: 1200.05,
        room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Garden Junior Suite King",
        image: room2,
        accomodation: {
            left: 4,
            sleeps: 2,
            size: 'King',
            area: 55,
        },
        additional_details_list: [
            "King bed & Lounge area",
            "King bed & Lounge area",
            "Bathroom with bath, shower & toiletries",
            "King bed & Lounge area",
            "Air conditioning & Free WiFi",
        ],
        rate: 500.27,
        original: 347.02,
        room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Garden Junior Suite Twin",
        image: room3,
        accomodation: {
            left: 4,
            sleeps: 2,
            size: 'King',
            area: 55,
        },
        additional_details_list: [
            "King bed & Lounge area",
            "King bed & Lounge area",
            "Bathroom with bath, shower & toiletries",
            "King bed & Lounge area",
            "Air conditioning & Free WiFi",
        ],
        rate: 1305.37,
        original: 1500.78,
        room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Grand Beach Villa With King Bed",
        image: room4,
        accomodation: {
            left: 4,
            sleeps: 2,
            size: 'King',
            area: 55,
        },
        additional_details_list: [
            "King bed & Lounge area",
            "King bed & Lounge area",
            "Bathroom with bath, shower & toiletries",
            "King bed & Lounge area",
            "Air conditioning & Free WiFi",
        ],
        rate: 439.06,
        original: 600.95,
        room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },

]

const RoomSlider = (props) => {
    return (
        <div className="room-slider-wrapper">
            <h2 className="section-heading text-muted">Breathtaking Tropical Paradise</h2>
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
                                <h1>{x.post_name}</h1>
                                {/* <ul>
                                    {x.additional_details_list.map((li,index) => (
                                        <li key={index}>{li}</li>
                                    ))}
                                </ul> */}
                                <div dangerouslySetInnerHTML={{__html: x.short_description}}>

                                </div>
                                <button className="main-btn btn-eden my-4" onClick={() => window.location = "https://be.synxis.com/?_ga=2.102065793.1000121752.1606552834-1702853238.1606552834&adult=1&arrive=2020-11-28&chain=27304&child=0&currency=AED&depart=2020-11-29&hotel=75043&level=hotel&locale=en-US&promo=HSPA&rooms=1"}>BOOK NOW</button>
                            </div>
                        </div>
                    ))
                }
            {/* </Slider> */}
            </Carousel>
        </div>
    );
}

export default RoomSlider;