import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import AboutTitleBlock from '../sections/about-us/main-text-block';
import AboutServices from '../sections/about-us/about-services';
import AboutSecondaryTextBlock from '../sections/about-us/secondary-text-block';
import AboutOfferSlider from '../sections/about-us/about-offer-slider';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';

const bannerImage = require('./../../assets/img/banner/about.jpg');

const roomsData = [
  {
    title: "Coral Cove",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/about/coral.jpg'),
  },
  {
    title: "Snorkeling",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/about/snorkeling.jpg'),
  },
  {
    title: "Unlock the sea",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/about/sea.jpg'),
  },
  {
    title: "Island Hopping",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/about/island.jpg'),
  },
]
const breadcrumbItems=[
  {
    text: 'Fishermans Cove',
    link:'/',
    isActive: false,
  },
  {
    text: 'About Us',
    link:'/about',
    isActive: true,
  },
]

class AboutUs extends Component {
  render() {
    return (
      <div className="bg-white about-us-wrapper">
        <Headertwo />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"About Us"} image={bannerImage} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== TITLE START ======*/}
        <AboutTitleBlock />
        {/*====== TITLE END ======*/}
        {/*====== SERVICES START ======*/}
        <AboutServices data={roomsData} />
        {/*====== SERVICES END ======*/}
        {/*====== SECONDARY START ======*/}
        <AboutSecondaryTextBlock/>
        {/*====== SECONDARY END ======*/}
        {/*====== ABOUT SLIDER START ======*/}
        <AboutOfferSlider data={roomsData} title={"Explore Fisherman's Cove Premium Offerings"} />
        {/*====== ABOUT SLIDER END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default AboutUs;
