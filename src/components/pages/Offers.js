import React, { Component } from "react";
import Headertwo from "../layouts/Headertwo";
import Footertwo from "../layouts/Footertwo";
import Mainbanner from "../sections/homepage-two/Banner";
import Bookingform from "../sections/homepage-two/Bookingform";
import BottomNavigator from "../sections/homepage-two/BottomNavigator";
import Subscribe from "../sections/common/Subscribe";
import OfferTitleBlock from "../sections/offers/main-text-block";
import OfferGrid from "../sections/offers/offer-grid";
import BreadCrumb from "../layouts/BreadCrumb";
import API from "../../utils/http";
import Helmet from "react-helmet";
import { constants } from "../../utils/constants";

const bannerImage = require("./../../assets/img/offers/stay.jpg");


class Offers extends Component {
  state = {
    offers: [],
  };
  async componentDidMount() {
    try {
      const response = await API.get("/offers");
      // debugger;
      this.setState({ offers: response.data || [] });
    } catch (error) {
      console.log(error);
    }

  }
  render() {
    const activeLang = localStorage.getItem('lang');

    const breadcrumbItems = [
      {
        text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
        link: "/",
        isActive: false,
      },
      {
        text: `${constants?.site_content?.offers_page?.bread_crumb?.title2[activeLang]}`,
        link: "/offers",
        isActive: true,
      },
    ];
    return (
      <div className="bg-white">
        {/* <SEOTags meta={this.state.meta} /> */}
        <Helmet>
          <title>
            Fishermans Cove offers The Best Resort Deals for Seychelles
          </title>
          <meta
            name="description"
            content="Fishermans Cove Resort is a veritable paradise that offers countless amazing experiences throughout the journey with some of the best resort deals in Seychelles."
          />
        </Helmet>
        <Headertwo
          isMobile={this.props.isMobile}
          isTop={this.props.isTop}
          key={"offers"}
        />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={constants?.site_content?.offers_page?.bread_crumb?.title2[activeLang]} image={bannerImage}
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
        {/*====== TITLE START ======*/}
        <OfferTitleBlock
          activeLang={activeLang}
        />
        {/*====== TITLE END ======*/}
        {/*====== ROOM GRID START ======*/}
        <OfferGrid title={null} data={this.state.offers} />
        {/*====== ROOM GRID END ======*/}
        <Subscribe
          activeLang={activeLang}
        />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default Offers;
