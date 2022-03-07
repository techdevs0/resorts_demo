import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import AboutTitleBlock from '../sections/about-us/main-text-block';
import AboutServices from '../sections/about-us/about-services';
import AboutSecondaryTextBlock from '../sections/about-us/secondary-text-block';
import AboutOfferSlider from '../sections/about-us/about-offer-slider';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';
import API from '../../utils/http';
import PageLayout from '../layouts/PageLayout';
import { Helmet } from "react-helmet";
import SEOTags from "../sections/common/SEOTags";

const bannerImage = require('./../../assets/img/banner/about.jpg');

const roomsData = [
  {
    title: "Coral Cove",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/about/coral.jpg'),
  },
  {
    title: "Snorkeling",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/about/snorkeling.jpg'),
  },
  {
    title: "Unlock the sea",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/about/sea.jpg'),
  },
  {
    title: "Island Hopping",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/about/island.jpg'),
  },
]
const breadcrumbItems = [
  {
    text: 'Fishermans Cove Resort',
    link: '/',
    isActive: false,
  },
  {
    text: 'About Us',
    link: '/about',
    isActive: true,
  },
]
const pageId = 40;

class AboutUs extends Component {
  state = {
    premiumOffers: [],
    sections: null,
    banner: null,
    meta:{}
  }

  componentDidMount() {
    try {
      API.get('/premium_offers').then(response=>{
        this.setState({ premiumOffers: response.data })
      })
          .then(() => {
            API.get(`/all_sections/${pageId}`).then(response => {
              this.setState({
                banner: response.data?.find(x => x.section_slug === "banner"),
                sections: {
                  intro: response.data?.find(x => x.section_slug === "intro"),
                  dine: response.data?.find(x => x.section_slug === "dine"),
                }
              });
            })
          })
          .then(() => {
            API.get(`/meta/${pageId}`).then(response => {
              this.setState({ meta: response.data });
              // console.log(response.data);
            })
          })
        // .then(() => {
        //   API.get(`/all_sections/${pageId}`).then(response => {
  
        //     this.setState({
        //       intro: response.data?.find(x => x.section_slug === "intro"),
        //       banner: response.data?.find(x => x.section_slug === "banner"),
        //     });
        //   })
        // })
    }
    catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="bg-white about-us-wrapper">
        <SEOTags meta={this.state.meta} />

        {/*<Helmet>*/}
        {/*  <title>*/}
        {/*    About | Fishermans Cove Resort*/}
        {/*    /!*Best Beach Resorts in Seychelles | Fishermans Cove Resort*!/*/}
        {/*  </title>*/}
        {/*  <meta*/}
        {/*      name="description"*/}
        {/*      content="Situated at Beau Vallon Beach, Fishermans Cove Resort is one of the best resorts in Seychelles offering countless unforgettable experiences throughout your discovery"*/}
        {/*  />*/}
        {/*</Helmet>*/}
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image:  this.state.banner?.section_avatar }}
          breadCrumb={{ items: breadcrumbItems }}
        >
          {/* <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop} key={'about'} /> */}
          {/*====== BANNER PART START ======*/}
          {/* <Mainbanner title={"About Us"} image={bannerImage} /> */}
          {/*====== BANNER PART ENDS ======*/}
          {/*====== BOOKING FORM START ======*/}
          {/* <Bookingform /> */}
          {/*====== BOOKING FORM END ======*/}
          {/* BREADCRUMBS START */}
          {/* <BreadCrumb items={breadcrumbItems} /> */}
          {/* BREADCRUMBS END */}
          {/*====== TITLE START ======*/}
          <AboutTitleBlock data={this.state.sections?.intro} />
          {/*====== TITLE END ======*/}
          {/*====== SERVICES START ======*/}
          <AboutServices data={roomsData} />
          {/*====== SERVICES END ======*/}
          {/*====== SECONDARY START ======*/}
          <AboutSecondaryTextBlock data={this.state.sections?.dine} />
          {/*====== SECONDARY END ======*/}
          {/*====== ABOUT SLIDER START ======*/}
          <AboutOfferSlider data={this.state.premiumOffers} title={"Explore Fishermans Cove Resort Premium Offerings"} />
          {/*====== ABOUT SLIDER END ======*/}

          {/* <Subscribe />

        <Footertwo />

        <BottomNavigator /> */}
        </PageLayout>
      </div>
    );
  }
}

export default AboutUs;
