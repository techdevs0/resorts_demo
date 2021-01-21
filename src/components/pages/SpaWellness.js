import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import SpaWellnessTitleBlock from '../sections/spa-wellness/spa-title-block';
import SpaWellnessRecommendations from '../sections/spa-wellness/spa-offers';
import BreadCrumb from '../layouts/BreadCrumb';
import API from '../../utils/http';

const roomsData = [
  {
    title: "Paris Sychelles Restaurant",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/room-suites/room1.jpg'),
  },
  {
    title: "Lecardinal Restaurant",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/room-suites/room1.jpg'),
  },
  {
    title: "Superior Room",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/room-suites/room1.jpg'),
  },
]

const breadcrumbItems=[
  {
    text: 'Fishermans Cove',
    link:'/',
    isActive: false,
  },
  {
    text: 'Spa & Wellness',
    link:'/spa-wellness',
    isActive: true,
  },
]
class SpaWellness extends Component {

  state = {
    premiumOffers: [],
  }

  async componentDidMount() {
    try {
      const response = await API.get('/premium_offers');
      console.log(response.data);
      this.setState({ premiumOffers: response.data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="bg-white spa-wrapper">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'spa-wellness'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Spa & Wellness"} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== PROJECTS SLIDER START ======*/}
        <SpaWellnessTitleBlock />
        {/*====== PROJECTS SLIDER END ======*/}
        {/*====== RECOOMENDATIONS START ======*/}
        <SpaWellnessRecommendations title={"Offers"} data={this.state.premiumOffers} />
        {/*====== RECOOMENDATIONS END ======*/}
        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default SpaWellness;
