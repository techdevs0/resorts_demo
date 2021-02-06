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
import API from '../../utils/http';

class Hometwo extends Component {
  state = {
    premiumOffers: [],
    roomsData:[]
  }

  async componentDidMount() {
    try {
      const response = await API.get('/premium_offers');
      console.log(response.data);
      this.setState({ premiumOffers: response.data })

      const roomsResponse = await API.get('/rooms', {
        headers:{
          'Content-Type': 'application/json'
        }
      });
      console.log(roomsResponse.data);
      const roomsData = roomsResponse.data;
      this.setState({ roomsData });

    } catch (error) {
      console.log(error)
    }
  }
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
        <RoomSlider data={this.state.roomsData}/>
        {/*====== ROOM SLIDER END ======*/}
        {/*====== TEXT BLOCK START ======*/}
        <Textblock/>
        {/*====== TEXT BLOCK END ======*/}
        {/*====== SERVICES TABS START ======*/}
        <ServiceTabs data={this.state.premiumOffers} />
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
