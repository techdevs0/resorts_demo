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
          <div className="description-item">
            <h3>Paris in Seychelles</h3>
            <p>
              The luxurious guest rooms and suites are set amidst lush tropical gardens complimented by a peaceful environment. This tropical escape sets the scene for explorers, couples, and families to an inherited paradise. Guest rooms and suites have private balconies, open plan bathrooms, air conditioning, free Wi-Fi, and tea or coffee making facilities. Executive suites provide luxurious king-size bedrooms that feature all the essential amenities. The deluxe ocean view rooms come with a private balcony affording seafront views of the crystal-clear turquoise sea. Suites feature a separate sitting area for relaxation, complimented with soft and muted shades of décor that allows guests to unwind and calm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomsInnerTitleBlock;