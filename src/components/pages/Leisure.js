import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import LeisureTitleBlock from '../sections/leisure/main-text-block';
import LeisureGrid from '../sections/leisure/leisure-grid';
import LeisureAwards from '../sections/leisure/leisure-awards';
import BreadCrumb from '../layouts/BreadCrumb';

const bannerImage = require('./../../assets/img/banner/Leisure-banner.jpg');

const roomsData = [
  {
    title: "Diving In Seychelles",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/leisure/divin.jpg')
  },
  {
    title: "Fishing In Seychelles",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/leisure/fishing.jpg')
  },
  {
    title: "Unlock the Sea",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/leisure/unlock-sea.jpg')
  },
  {
    title: "Water Activities",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/leisure/water.jpg')
  },
]

const breadcrumbItems=[
  {
    text: 'Fishermans Cove Resort',
    link:'/',
    isActive: false,
  },
  {
    text: 'Leisure Activities',
    link:'/whats-on',
    isActive: true,
  },
]

class Leisure extends Component {
  render() {
    return (
      <div className="bg-white">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'leisure'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Leisure Activities"} image={bannerImage} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/*====== BANNER PART ENDS ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== TITLE START ======*/}
        <LeisureTitleBlock />
        {/*====== TITLE END ======*/}
        {/*====== ROOM GRID START ======*/}
        <LeisureGrid title={null} data={roomsData} />
        {/*====== ROOM GRID END ======*/}
        {/* ===== LEISURE AWARDS START */}
        <LeisureAwards />
        {/* ===== LEISURE AWARDS END */}
        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default Leisure;