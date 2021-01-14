import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import SpaWellnessTitleBlock from '../sections/spa-wellness/spa-title-block';
import SpaWellnessRecommendations from '../sections/spa-wellness/spa-offers';

const roomsData = [
  {
    title: "Paris Sychelles Restaurant",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/room-suites/room1.jpg'),
  },
  {
    title: "Lecardinal Restaurant",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/room-suites/room1.jpg'),
  },
  {
    title: "Superior Room",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/room-suites/room1.jpg'),
  },
]

class SpaWellness extends Component {
  render() {
    return (
      <div className="bg-white spa-wrapper">
        <Headertwo />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Spa & Wellness"} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/*====== PROJECTS SLIDER START ======*/}
        <SpaWellnessTitleBlock />
        {/*====== PROJECTS SLIDER END ======*/}
        {/*====== RECOOMENDATIONS START ======*/}
        <SpaWellnessRecommendations title={"Offers"} data={roomsData} />
        {/*====== RECOOMENDATIONS END ======*/}
        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default SpaWellness;
