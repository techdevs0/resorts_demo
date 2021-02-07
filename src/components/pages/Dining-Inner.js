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
    title: "Superior Rooms",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/deluxe.jpg')
  },
]

// const breadcrumbItems=[
//   {
//     text: 'Fishermans Cove Resort',
//     link:'/',
//     isActive: false,
//   },
//   {
//     text: 'Dining',
//     link:'/dining',
//     isActive: true,
//   },
// ]
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

let breadcrumbItems = [
  {
    text: 'Fishermans Cove Resort',
    link: '/',
    isActive: false,
  },
  {
    text: 'Dining',
    link: '/dining',
    isActive: false,
  },
  {
    text: '',
    link: '/dining-inner',
    isActive: true,
  },
]
class DiningInner extends Component {
  state = {
    singleHotel: {},
    othersData: [],
    pageSections: []
  }

  async componentDidMount() {
    let id = this.props.match.params.id;
    try {
      const response = await API.get('/dining/' + id);
      let singleHotel = response?.data?.category_details[0];
      breadcrumbItems[breadcrumbItems.length - 1].text = singleHotel.post_name;
      breadcrumbItems[breadcrumbItems.length - 1].link = '/dining-inner/' + singleHotel.id;
      this.setState({ singleHotel });

      const sectionsResonse = await API.get('/all_sections/' + id);
      this.setState({ pageSections: sectionsResonse?.data });

      API.get('/dining').then(othersResponse => {
        this.setState({ othersData: othersResponse.data.filter(x => x.id !== this.state.singleHotel?.id) || [] });
      });

    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="bg-white dining-inner-wrapper">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop} key={'dining-inner'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={this.state.singleHotel?.post_name} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== TITLE START ======*/}
        <DiningInnerTitleBlock dining={this.state.singleHotel} introSection={this.state.pageSections?.find(x => x.section_slug === "intro")} />
        {/*====== TITLE END ======*/}
        {/*====== ROOM GRID START ======*/}
        <DiningInnerInfo timingSection={this.state.pageSections?.find(x => x.section_slug === "timings")} dressSection={this.state.pageSections?.find(x => x.section_slug === "dress")} />
        {/*====== ROOM GRID END ======*/}
        {/*====== SUITES GRID START ======*/}
        {/* <DiningOfferSlider title={"Offers"} data={offersData} /> */}
        {/*====== SUITES GRID END ======*/}
        {/*====== OTHERS GRID START ======*/}
        <OtherRecommendations title={"Other Restaurants & Bars"} data={this.state.othersData} />
        {/*====== OTHERS GRID END ======*/}
        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default DiningInner;
