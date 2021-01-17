import React from 'react';
import { Carousel } from 'react-responsive-carousel';


const roomsData = [
  {
    title: "Paris Sychelles Restaurant",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../../assets/img/room-suites/room1.jpg')
  },
  {
    title: "Lecardinal Restaurant",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../../assets/img/room-suites/suite1.jpg')
  },
  {
    title: "Superior Room",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../../assets/img/room-suites/room1.jpg')
  },
]


const RoomsInnerTitleBlock = (props) => {
  return (
    <div className="rooms-inner-title-block">
      <div className="container">
        <div className="intro-block">
          <div className="slider-item">
            <Carousel
              dynamicHeight={false}
              showStatus={false}
              showArrows={false}
              showIndicators={false}
              showThumbs={true}
              infiniteLoop={true}
              autoPlay={true}
              emulateTouch={true}
              className="room-carousel"
            >
              {
                roomsData.map(x => (
                  <div>
                    <img src={x.image} alt="" />
                  </div>
                ))
              }
            </Carousel>
          </div>
          <div className="text-item">
            <h3>Seychelles Restaurant</h3>
            <p>
              Lorem ipsum doler set amet, lorem ipsum doler set amet.
              Lorem ipsum doler set amet, lorem ipsum doler set amet.
              Lorem ipsum doler set amet, lorem ipsum doler set amet.
              Lorem ipsum doler set amet, lorem ipsum doler set amet.
              Lorem ipsum doler set amet, lorem ipsum doler set amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomsInnerTitleBlock;