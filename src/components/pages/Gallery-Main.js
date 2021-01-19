import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import GalleryTitleBlock from '../sections/gallery/main-text-block';
import GalleryGrid from '../sections/gallery/gallery-grid';

const roomsData = [
  {
    title: "Spa for Two",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/offers/spa.jpg')
  },
  {
    title: "Long Stay with snorkeling",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/offers/snorkeling.jpg')
  },
  {
    title: "Long stay with fishing",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/offers/fishing.jpg')
  },
  {
    title: "Full board Package",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/offers/package.jpg')
  },
  {
    title: "Save 25% on long stays",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/offers/stay.jpg')
  },
  {
    title: "book early and save more",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/offers/book.jpg')
  },
  {
    title: "Honeymoon Offer",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/offers/honeymoon.jpg')
  },
]

class GalleryMain extends Component {
  render() {
    return (
      <div className="bg-white">
        <Headertwo />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Gallery"} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/*====== TITLE START ======*/}
        <GalleryTitleBlock />
        {/*====== TITLE END ======*/}
        {/*====== GALLERY GRID START ======*/}
        <GalleryGrid title={null} data={roomsData} />
        {/*====== GALLERY GRID END ======*/}
        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default GalleryMain;
