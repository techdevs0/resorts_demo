import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import RoomTitleBlock from '../sections/room-suites/main-text-block';
import RoomSuiteGrid from '../sections/room-suites/room-suites-grid';
import Subscribe from '../sections/common/Subscribe';

const roomsData = [
  {
    title: "Superior Room",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/room1.jpg')
  },
  {
    title: "Superior Room",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/room1.jpg')
  },
]

const suitesData = [
  {
    title: "Family Suite Garden View",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/suite1.jpg')
  },
  {
    title: "Family Suite Garden View",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/suite1.jpg')
  },
  {
    title: "Family Suite Garden View",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/suite1.jpg')
  },
  {
    title: "Family Suite Garden View",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/suite1.jpg')
  },
  {
    title: "Family Suite Garden View",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/suite1.jpg')
  },
]

class RoomSuites extends Component {
  render() {
    return (
      <div className="bg-white">
        <Headertwo />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Inherited Paradise"} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/*====== TITLE START ======*/}
        <RoomTitleBlock />
        {/*====== TITLE END ======*/}
        {/*====== ROOM GRID START ======*/}
        <RoomSuiteGrid title={"Rooms"} data={roomsData} />
        {/*====== ROOM GRID END ======*/}
        {/*====== SUITES GRID START ======*/}
        <RoomSuiteGrid title={"Suites"} data={suitesData} />
        {/*====== SUITES GRID END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default RoomSuites;
