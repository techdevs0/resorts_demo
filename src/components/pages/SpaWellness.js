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
import Helmet from "react-helmet";

const bannerImage = require('./../../assets/img/banner/spa-banner.jpg');


const breadcrumbItems = [
  {
    text: 'Fishermans Cove Resort',
    link: '/',
    isActive: false,
  },
  {
    text: 'Spa & Wellness',
    link: '/spa-wellness',
    isActive: true,
  },
]
class SpaWellness extends Component {

  state = {
    premiumOffers: [],
    pageSections: []
  }

  async componentDidMount() {
    const spaWellnessID = 42;
    // let id = this.props.match.params.id;
    let id = spaWellnessID;
    try {
      const response = await API.get('/premium_offers');
      this.setState({ premiumOffers: response.data })

      const sectionsResonse = await API.get('/all_sections/' + id);
      this.setState({ pageSections: sectionsResonse?.data });

    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="bg-white spa-wrapper">
          <Helmet>
              <title>Spa Resort in Seychelles | Sesel Spa at Fishermans Cove Resort </title>
              <meta
                  name="description"
                  content="Explore the healing elements in nature at Fishermans Cove, a spa resort in Seychelles. This space features Hydrotherapy &amp; and other beauty therapies as well"
              />
          </Helmet>
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop} key={'spa-wellness'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Spa & Wellness"} image={bannerImage} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== PROJECTS SLIDER START ======*/}
        <SpaWellnessTitleBlock data={this.state.pageSections.find(x => x.section_slug === "intro")} />
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
