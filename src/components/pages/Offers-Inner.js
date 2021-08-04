import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import OffersInnerMainBlock from '../sections/offers-inner/offers-inner-block';
import BreadCrumb from '../layouts/BreadCrumb';
const bannerImage = require('./../../assets/img/banner/Leisure-inner.jpg');


const breadcrumbItems=[
  {
    text: 'Fishermans Cove Resort',
    link:'/',
    isActive: false,
  },
  {
    text: 'Offers',
    link:'/offers',
    isActive: true,
  },
  // {
  //   text: 'Spa for Two',
  //   link:'/offer',
  //   isActive: true,
  // },
]

class OffersInner extends Component {
 
  componentDidMount() {

    console.log('hello');
 
  }
 
  render() {
    return (
      
      <div className="bg-white offers-inner-wrapper">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'offers-inner'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Spa for Two"} image={bannerImage}/>
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== INTRO START ======*/}
        <OffersInnerMainBlock />
        {/*====== INTRO END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default OffersInner;
