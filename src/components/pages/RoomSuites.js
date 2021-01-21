import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import RoomTitleBlock from '../sections/room-suites/main-text-block';
import RoomSuiteGrid from '../sections/room-suites/room-suites-grid';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';
import API from '../../utils/http';

const bannerImage = require('./../../assets/img/banner/rooms.jpg');

const roomsData = [
  {
    title: "Superior Room",
    link: "",
    linkText: "View More",
    description: "Guests can hide themselves away in these comfortable rooms located in the main building set to the rear of the hotel.",
    image: require('./../../assets/img/room-suites/superior.jpg')
  },
  {
    title: "Deluxe Ocean View Room",
    link: "",
    linkText: "View More",
    description: "The deluxe ocean view rooms come with a private balcony providing seafront views of the crystal-clear turquoise sea.",
    image: require('./../../assets/img/room-suites/deluxe.jpg')
  },
]

const suitesData = [
  {
    title: "Family Suite Garden View",
    link: "",
    linkText: "View More",
    description: "The high ceilings create an old-world charm. In addition to that, the dark wood furnishing and traditional wooden louvered windows complete the creole atmosphere.",
    image: require('./../../assets/img/room-suites/family.jpg')
  },
  {
    title: "Junior Suite Ocean View",
    link: "",
    linkText: "View More",
    description: "Similar to the deluxe ocean view rooms, the Junior Suite Ocean view rooms are at ground level resting amongst verdant tropical fauna with a private balcony.",
    image: require('./../../assets/img/room-suites/junior.jpg')
  },
  {
    title: "Hilltop Executive Suites",
    link: "",
    linkText: "View More",
    description: "Located on the higher elevation of the property, the hilltop suites offer panoramic views of the bay and ocean from the terrace.",
    image: require('./../../assets/img/room-suites/hilltop.jpg')
  },
  {
    title: "Executive suites Partial Ocean View",
    link: "",
    linkText: "View More",
    description: "Along with the warm natural palette, uniquely creole décor adds to the unmatched luxury of these rooms.",
    image: require('./../../assets/img/room-suites/partial.jpg')
  },
  {
    title: "Executive Suites Ocean Front – Modern",
    link: "",
    linkText: "View More",
    description: "Front-Modern meets traditional creole in these suites situated at sea level so all that stands between the room and the Indian ocean is an immaculate lawn.",
    image: require('./../../assets/img/room-suites/executive.jpg')
  },
]

const breadcrumbItems = [
  {
    text: 'Fishermans Cove',
    link: '/',
    isActive: false,
  },
  {
    text: 'Rooms & Suites',
    link: '/room-suites',
    isActive: true,
  },
]

class RoomSuites extends Component {
  state = {
    roomsData: [],
    suitesData: [],
  }

  async componentDidMount() {
    try {
      const response = await API.get('/all_rooms', {
        headers:{
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      const roomsData = response.data.filter(x=> x.room_type==1);
      const suitesData = response.data.filter(x=> x.room_type==2);
      this.setState({ roomsData, suitesData });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="bg-white">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop} key={'room-suites'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Inherited Paradise"} image={bannerImage} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== TITLE START ======*/}
        <RoomTitleBlock />
        {/*====== TITLE END ======*/}
        {/*====== ROOM GRID START ======*/}
        <RoomSuiteGrid title={"Rooms"} data={this.state.roomsData} />
        {/*====== ROOM GRID END ======*/}
        {/*====== SUITES GRID START ======*/}
        <RoomSuiteGrid title={"Suites"} data={this.state.suitesData} />
        {/*====== SUITES GRID END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default RoomSuites;
