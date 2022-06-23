import React, { Component } from "react";

//components
import Headertwo from "../layouts/Headertwo";
import Footertwo from "../layouts/Footertwo";
import Mainbanner from "../sections/homepage-two/Banner";
import Bookingform from "../sections/homepage-two/Bookingform";
import Textblock from "../sections/homepage-two/Textblock";
import RoomSlider from "../sections/homepage-two/RoomSlider";
import Experience from "../sections/homepage-two/Experience";
import GuestReviews from "../sections/homepage-two/GuestReviews";
import ServiceTabs from "../sections/homepage-two/ServicesTabs";
import BottomNavigator from "../sections/homepage-two/BottomNavigator";
import API from "../../langapi/http";
import bannerimg1 from "../../assets/img/banner/home.jpg";
import PopUp from "../popup/PopUp";
import Helmet from "react-helmet";

import { constants } from "../../utils/constants";

const pageId = 93;

class Hometwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      premiumOffers: [],
      roomsData: [],
      meta: {},
      offerPopup: true,
    };

    this.handleShowOffer = this.handleShowOffer.bind(this);
  }

  handleShowOffer() {
    this.setState({ offerPopup: !this.state.offerPopup });
  }

  componentDidMount() {
    try {
      const activeLang = localStorage.getItem('lang');

      API.get(`/premium?lang=${activeLang}`).then((response) => {
        this.setState({ premiumOffers: response.data?.data });
      })

      API.get(`/rooms?lang=${activeLang}`).then((response) => {
        const roomsData = response.data?.data;
        this.setState({
          roomsData: roomsData
        });
      });

    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const activeLang = localStorage.getItem('lang');

    return (
      <div>
        <Helmet>
          <title>
            Fishermans Cove Resort
          </title>
          <meta name="description" content="Fishermans Cove Resort" />

        </Helmet>
        <Headertwo
          isMobile={this.props.isMobile}
          isTop={this.props.isTop}
          key={"home"}
        />
        {/*====== BANNER PART START ======*/}
        {/* <LazyLoad> */}
        <Mainbanner
          isMain={true}
          title={constants?.site_content?.home_page?.banner?.title[activeLang]}
          image={bannerimg1}
          activeLang={activeLang}
        />
        {/* </LazyLoad> */}
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform
          activeLang={activeLang}
        />
        {/*====== BOOKING FORM END ======*/}
        {/*====== ROOM SLIDER START ======*/}
        <RoomSlider data={this.state.roomsData}
          activeLang={activeLang}
        />

        {/*====== ROOM SLIDER END ======*/}
        {/*====== TEXT BLOCK START ======*/}
        <Textblock
          activeLang={activeLang}
        />
        {/*====== TEXT BLOCK END ======*/}
        {/*====== SERVICES TABS START ======*/}
        <ServiceTabs data={this.state.premiumOffers}
          activeLang={activeLang}
        />
        {/*====== SERVICES TABS END ======*/}
        {/*====== TESTIMONIAL SLIDER START ======*/}
        <GuestReviews
          activeLang={activeLang}
        />
        {/*====== EXPERIENCE START ======*/}
        <Experience
          activeLang={activeLang}
        />
        {/*====== EXPERIENCE END ======*/}
        <div style={{ display: "none" }}>
          <h3>
            What are the best luxury resorts for stays in Seychelles Victoria?{" "}
          </h3>
          <p>
            There are a number of high-end and low-end hotels and resorts in
            Seychelles. Price varies largely depending on the comfort and
            amenities provided. Fishermans Cove Resort is one of the best
            resorts to stay while visiting Seychelles.
          </p>

          <h2>
            How much does it cost to stay at a romantic Resort in Seychelles
            Victoria?{" "}
          </h2>
          <p>
            The average prices for Seychelles hotels and resorts start from
            around 400$ and can go up to 1800$. Seychelles has some of the best
            hotels and beach resorts with varying prices.
          </p>

          <h2>
            Do any honeymoon resorts in Seychelles have a private swimming pool?{" "}
          </h2>
          <p>
            Most of the Seychelle five-star resorts have private swimming pools
            of different sizes.
          </p>

          <h2>Which Seychelles Luxury resorts have rooms with great views? </h2>
          <p>
            Seychelles is famous for its scenic beaches and lush plains so
            wherever you go in Seychelles, you are sure to get treated by
            breathtaking views. Fishermans Cove Resort allows you to get
            mesmerized by views of the Indian Ocean while enjoying a comfortable
            stay at the resort.
          </p>

          <h3>Which resorts in Seychelles are good for honeymoon travel?</h3>
          <p>
            Seychelles is one of the top honeymoon destinations and there are
            numerous resorts to choose from. Fishermans Cove Resort is one of
            the recommended ones because of romantic views and top of the line
            service.
          </p>
        </div>

        <PopUp show={this.state.offerPopup} onHide={this.handleShowOffer}
          activeLang={activeLang}
        />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default Hometwo;
