import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import LeisureContentBlocks from '../sections/leisure-inner/content-blocks';
import BreadCrumb from '../layouts/BreadCrumb';

const activities = [
  {
    title: 'Lounge by the pool',
    content: `lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet`,
    image: require('./../../assets/img/leisure/lounge.jpg')
  },
  {
    title: 'Snorkeling',
    content: `lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet`,
    image: require('./../../assets/img/leisure/kayaking.jpg')
  },
  {
    title: 'Kayaking',
    content: `lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet`,
    image: require('./../../assets/img/leisure/lounge.jpg')
  },
  {
    title: 'Discover the marine life',
    content: `lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet`,
    image: require('./../../assets/img/leisure/kayaking.jpg')
  },
  {
    title: 'And so much more',
    content: `lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet
    lorem ipsum doler set amet, lorem ipsum doler set amet, lorem ipsum doler set amet`,
    image: require('./../../assets/img/leisure/lounge.jpg')
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
    isActive: false,
  },
  {
    text: 'Other Resort Activities',
    link:'/leisure-inner',
    isActive: true,
  },
]

class LeisureInner extends Component {
  render() {
    return (
      <div className="bg-white leisure-inner-wrapper">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'leisure-inner'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Other Resort Activities"} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/*====== BANNER PART ENDS ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== INTRO START ======*/}
        <LeisureContentBlocks activities={activities} />
        {/*====== INTRO END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default LeisureInner;
