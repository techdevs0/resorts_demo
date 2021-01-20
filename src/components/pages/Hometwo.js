import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import Textblock from '../sections/homepage-two/Textblock';
import RoomSlider from '../sections/homepage-two/RoomSlider';
import Experience from '../sections/homepage-two/Experience';
import GuestReviews from '../sections/homepage-two/GuestReviews';
import ServiceTabs from '../sections/homepage-two/ServicesTabs';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';

class Hometwo extends Component {
  render() {
    return (
      <div>
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'home'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner isMain={true} title={"The Perfect Destination for You"}/>
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform/>
        {/*====== BOOKING FORM END ======*/}
        {/*====== ROOM SLIDER START ======*/}
        <RoomSlider/>
        {/*====== ROOM SLIDER END ======*/}
        {/*====== TEXT BLOCK START ======*/}
        <Textblock/>
        {/*====== TEXT BLOCK END ======*/}
        {/*====== SERVICES TABS START ======*/}
        <ServiceTabs/>
        {/*====== SERVICES TABS END ======*/}
        {/*====== TESTIMONIAL SLIDER START ======*/}
        <GuestReviews/>
        {/*====== EXPERIENCE START ======*/}
        <Experience/>
        {/*====== EXPERIENCE END ======*/}
        <Footertwo />

        <BottomNavigator/>
      </div>
    );
  }
}

export default Hometwo;
