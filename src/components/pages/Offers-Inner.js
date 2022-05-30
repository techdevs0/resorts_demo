import React, { Component } from 'react'
import API from '../../utils/http';
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import OffersInnerMainBlock from '../sections/offers-inner/offers-inner-block';
import BreadCrumb from '../layouts/BreadCrumb';
import Helmet from "react-helmet";


const breadcrumbItems = [
  {
    text: 'Fishermans Cove Resort',
    link: '/',
    isActive: false,
  },
  {
    text: 'Offers',
    link: '/offers',
    isActive: true,
  },
  {
    text: 'Spa for Two',
    link: '/offers-inner',
    isActive: true,
  },
]

class OffersInner extends Component {
  state = {
    offerData: [],
  };
  async componentDidMount() {
    let id = this.props.match.params.id;
    try {
      const response = await API.get("/offers/" + id);

      let offerData = response?.data?.offer_details;
      offerData.uploads = response?.data?.uploads;
      offerData.post_metas = response.data.metas;

      breadcrumbItems[breadcrumbItems.length - 1].text = offerData.post_name;
      breadcrumbItems[breadcrumbItems.length - 1].link =
        "/offer/" + offerData.route;
      this.setState({ offerData });

    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const activeLang = localStorage.getItem('lang');
    return (
      <div className="bg-white offers-inner-wrapper">
        <Helmet>
          <title>
            Stay and Save With Fishermans Cove Resort + Dinner for Two |
            Fishermans Cove Resort
          </title>
          <meta
            name="description"
            content="Make your ordinary vacation, extra ordinary with 10% off at Fishermans Cove Resort. Book your stay now and get a complimentary dinner for two at Le Cardinal Restaurant."
          />
        </Helmet>
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop} key={'offers-inner'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={this.state.offerData.banner_text} image={this.state.offerData.banner_img}
          activeLang={activeLang}
        />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform
          activeLang={activeLang}
        />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems}
          activeLang={activeLang}
        />
        {/* BREADCRUMBS END */}
        {/*====== INTRO START ======*/}
        <OffersInnerMainBlock offerData={this.state.offerData}
          activeLang={activeLang}
        />
        {/*====== INTRO END ======*/}

        <Subscribe
          activeLang={activeLang}
        />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default OffersInner;
