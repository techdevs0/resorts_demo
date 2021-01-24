import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';
import CancellationIntroBlock from '../sections/cancellation-policy/intro-block';

const breadcrumbItems=[
  {
    text: 'Fishermans Cove',
    link:'/',
    isActive: false,
  },
  {
    text: 'Cancellation Policy',
    link:'/cancellation-policy',
    isActive: true,
  },
]

class CancellationPolicy extends Component {
  render() {
    return (
      <div className="bg-white cancellation-policy-wrapper">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'cancellation-policy'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Cancellation Policy"} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== INTRO START ======*/}
        <CancellationIntroBlock />
        {/*====== INTRO END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default CancellationPolicy;
