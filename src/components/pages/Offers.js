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

const bannerImage = require("./../../assets/img/offers/stay.jpg");

const roomsData = [
  {
    title: "Spa for Two",
    link: "",
    linkText: "View More",
    description:
      "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require("./../../assets/img/offers/spa.jpg"),
  },
  {
    title: "Long Stay with snorkeling",
    link: "",
    linkText: "View More",
    description:
      "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require("./../../assets/img/offers/snorkeling.jpg"),
  },
  {
    title: "Long stay with fishing",
    link: "",
    linkText: "View More",
    description:
      "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require("./../../assets/img/offers/fishing.jpg"),
  },
  {
    title: "Full board Package",
    link: "",
    linkText: "View More",
    description:
      "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require("./../../assets/img/offers/package.jpg"),
  },
  {
    title: "Save 25% on long stays",
    link: "",
    linkText: "View More",
    description:
      "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require("./../../assets/img/offers/stay.jpg"),
  },
  {
    title: "book early and save more",
    link: "",
    linkText: "View More",
    description:
      "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require("./../../assets/img/offers/book.jpg"),
  },
  {
    title: "Honeymoon Offer",
    link: "",
    linkText: "View More",
    description:
      "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require("./../../assets/img/offers/honeymoon.jpg"),
  },
];

const breadcrumbItems = [
  {
    text: "Fishermans Cove Resort",
    link: "/",
    isActive: false,
  },
  {
    text: "Offers",
    link: "/offers",
    isActive: true,
  },
];

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
        <Mainbanner title={"Offers"} image={bannerImage}
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
        <OfferTitleBlock />
        {/*====== TITLE END ======*/}
        {/*====== ROOM GRID START ======*/}
        <OfferGrid title={null} data={this.state.offers} />
        {/*====== ROOM GRID END ======*/}
        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default Offers;
