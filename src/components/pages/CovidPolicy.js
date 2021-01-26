import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';
import PrivacyIntroBlock from '../sections/privacy-policy/intro-block';
import PrivacyAcceptanceBlock from '../sections/privacy-policy/acceptance-block';
import PrivacyInformationBlock from '../sections/privacy-policy/information-block';
import CovidIntroBlock from '../sections/covid-policy/intro-block';
import CovidTravelSafetyBlock from '../sections/covid-policy/travel-safety-block';
import CovidFlexibilityBlock from '../sections/covid-policy/flexibility-block';

const breadcrumbItems=[
  {
    text: 'Fishermans Cove Resort',
    link:'/',
    isActive: false,
  },
  {
    text: 'Privacy Policy',
    link:'/covid-policy',
    isActive: true,
  },
]

class CovidPolicy extends Component {
  render() {
    return (
      <div className="bg-white covid-policy-wrapper">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'covid-policy'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Covid Policy"} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== INTRO START ======*/}
        <CovidIntroBlock />
        {/*====== INTRO END ======*/}
        {/*====== PILLARS START ======*/}
        <CovidTravelSafetyBlock/>
        {/*====== PILLARS END ======*/}
        {/*====== PROJECTS SLIDER START ======*/}
        <CovidFlexibilityBlock />
        {/*====== PROJECTS SLIDER END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default CovidPolicy;
