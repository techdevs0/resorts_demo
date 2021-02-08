import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import SeychellesIntroBlock from '../sections/about-seychelles/intro-block';
import SeychellesPillarsBlock from '../sections/about-seychelles/pillars-block';
import BreadCrumb from '../layouts/BreadCrumb';
const bannerImage = require('./../../assets/img/banner/About-Seychelles.jpg');
const breadcrumbItems=[
  {
    text: 'Fishermans Cove Resort',
    link:'/',
    isActive: false,
  },
  {
    text: 'About Seychelles',
    link:'/about-seychelles',
    isActive: true,
  },
]

class AboutSeychelles extends Component {
  render() {
    return (
      <div className="bg-white seychelles-wrapper">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'seychelles'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"About Seychelles"} image={bannerImage}/>
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== INTRO START ======*/}
        <SeychellesIntroBlock />
        {/*====== INTRO END ======*/}
        {/*====== PILLARS START ======*/}
        <SeychellesPillarsBlock/>
        {/*====== PILLARS END ======*/}
        {/*====== PROJECTS SLIDER START ======*/}
        {/* <SeychellesProjectsBlock /> */}
        {/*====== PROJECTS SLIDER END ======*/}
        {/* <SeychellesEngeryBlock /> */}
        {/*====== PROJECTS SLIDER END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default AboutSeychelles;
