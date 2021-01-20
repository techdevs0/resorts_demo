import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import OtherRecommendations from '../sections/rooms-inner/dining-inner-grid-item';
import Subscribe from '../sections/common/Subscribe';
import RoomsInnerTitleBlock from '../sections/rooms-inner/main-text-block';
import RoomAmenities from '../sections/rooms-inner/room-amentities';
import RoomVR360 from '../sections/rooms-inner/room-360';
import BookingFormVertical from '../sections/rooms-inner/BookingFormVertical';
import BreadCrumb from '../layouts/BreadCrumb';

const roomsData = [
  {
    title: "Paris Sychelles Restaurant",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/junior.jpg')
  },
  {
    title: "Lecardinal Restaurant",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/partial.jpg')
  },
  {
    title: "Superior Room",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/deluxe.jpg')
  },
]


const breadcrumbItems=[
  {
    text: 'Fishermans Cove',
    link:'/',
    isActive: false,
  },
  {
    text: 'Rooms & Suites',
    link:'/room-suites',
    isActive: false,
  },
  {
    text: 'Paris Seychelles Restaurant',
    link:'/rooms-inner',
    isActive: true,
  },
]

class RoomsInner extends Component {
  render() {
    return (
      <div className="bg-white rooms-inner-wrapper">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'rooms-inner'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Paris Seychelles Restaurant"} />
        {/*====== BANNER PART ENDS ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {/*====== TITLE START ======*/}
              <RoomsInnerTitleBlock title={"Paris Seychelles Restaurant"} />
              {/*====== TITLE END ======*/}
              {/*====== ROOM GRID START ======*/}
              <RoomAmenities />
              {/*====== ROOM GRID END ======*/}
              {/*====== ROOM 360 GRID START ======*/}
              <RoomVR360 />
              {/*====== ROOM 360 GRID END ======*/}
            </div>
            <div className="col-md-4">
              <BookingFormVertical />
            </div>
          </div>
          {/*====== OTHERS GRID START ======*/}
          <OtherRecommendations title={"Other Restaurants & Bars"} data={roomsData} />
          {/*====== OTHERS GRID END ======*/}
        </div>
        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default RoomsInner;
