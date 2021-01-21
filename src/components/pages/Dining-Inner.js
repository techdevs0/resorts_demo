import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import DiningOfferSlider from '../sections/dining/dining-offer-sldier';
import DiningInnerTitleBlock from '../sections/dining-inner/main-text-block';
import DiningInnerInfo from '../sections/dining-inner/dining-grid';
import OtherRecommendations from '../sections/dining-inner/dining-inner-grid-item';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';
import API from '../../utils/http';

const roomsData = [
  {
    title: "Paris Sychelles Restaurant",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/junior.jpg')
  },
  {
    title: "Lecardinal Restaurant",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/partial.jpg')
  },
  {
    title: "Superior Room",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/deluxe.jpg')
  },
]

const offersData = [
  {
    title: "Family Suite Garden View",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/banner/home.jpg')
  },
  {
    title: "Family Suite Garden View",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/banner/about.jpg')
  },
  {
    title: "Family Suite Garden View",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/banner/dining.jpg')
  },
  {
    title: "Family Suite Garden View",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/banner/rooms.jpg')
  },
]

const breadcrumbItems = [
  {
    text: 'Fishermans Cove',
    link: '/',
    isActive: false,
  },
  {
    text: 'Dining',
    link: '/dining',
    isActive: false,
  },
  {
    text: 'Paris Seychelles Restaurant',
    link: '/dining-inner',
    isActive: true,
  },
]
class DiningInner extends Component {
  state = {
    singleHotel: {},
  }

  async componentDidMount() {
    let id = this.props.match.params.id;
    try {
      const response = await API.get('/single_post/'+id);
      console.log(response.data);
      this.setState({ singleHotel: response.data });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="bg-white dining-inner-wrapper">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'dining-inner'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Paris Seychelles Restaurant"} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== TITLE START ======*/}
        <DiningInnerTitleBlock dining={this.state.singleHotel} />
        {/*====== TITLE END ======*/}
        {/*====== ROOM GRID START ======*/}
        <DiningInnerInfo />
        {/*====== ROOM GRID END ======*/}
        {/*====== SUITES GRID START ======*/}
        <DiningOfferSlider title={"Offers"} data={offersData} />
        {/*====== SUITES GRID END ======*/}
        {/*====== OTHERS GRID START ======*/}
        <OtherRecommendations title={"Other Restaurants & Bars"} data={roomsData} />
        {/*====== OTHERS GRID END ======*/}
        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default DiningInner;
