import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import SustainIntroBlock from '../sections/sustainability/intro-block';
import SustainPillarsBlock from '../sections/sustainability/pillars-block';
import SustainProjectsBlock from '../sections/sustainability/projects-block';
import SustainEngeryBlock from '../sections/sustainability/energy-conservation';
import BreadCrumb from '../layouts/BreadCrumb';

const breadcrumbItems=[
  {
    text: 'Fishermans Cove',
    link:'/',
    isActive: false,
  },
  {
    text: 'Sustainability',
    link:'/sustainability',
    isActive: true,
  },
]

class Sustainability extends Component {
  render() {
    return (
      <div className="bg-white sustainability-wrapper">
        <Headertwo />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Sustainability"} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== INTRO START ======*/}
        <SustainIntroBlock />
        {/*====== INTRO END ======*/}
        {/*====== PILLARS START ======*/}
        <SustainPillarsBlock/>
        {/*====== PILLARS END ======*/}
        {/*====== PROJECTS SLIDER START ======*/}
        <SustainProjectsBlock />
        {/*====== PROJECTS SLIDER END ======*/}

        <SustainEngeryBlock />
        {/*====== PROJECTS SLIDER END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default Sustainability;
