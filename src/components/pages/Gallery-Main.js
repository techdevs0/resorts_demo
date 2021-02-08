import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import GalleryTitleBlock from '../sections/gallery/main-text-block';
import GalleryGrid from '../sections/gallery/gallery-grid';
import BreadCrumb from '../layouts/BreadCrumb';
import API from '../../utils/http';
const bannerImage = require('./../../assets/img/banner/gallery-Banner.jpg');

const roomsData = [
  {
    title: "Save 25% on long stays",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/offers/stay.jpg')
  },
  {
    title: "book early and save more",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/offers/book.jpg')
  },
  {
    title: "Spa for Two",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/offers/spa.jpg')
  },
  {
    title: "Long Stay with snorkeling",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/offers/snorkeling.jpg')
  },
  {
    title: "Long stay with fishing",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/offers/fishing.jpg')
  },
  {
    title: "Full board Package",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/offers/package.jpg')
  },
  {
    title: "Honeymoon Offer",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/offers/honeymoon.jpg')
  },
]

const breadcrumbItems=[
  {
    text: 'Fishermans Cove Resort',
    link:'/',
    isActive: false,
  },
  {
    text: 'Gallery',
    link:'/gallery',
    isActive: true,
  },
]

class GalleryMain extends Component {
  state = {
    galleryData: [],
  }

  async componentDidMount() {
    try {
      const response = await API.get('/gallery');
      this.setState({ galleryData: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="bg-white">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'gallery'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Gallery"} image={bannerImage} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== TITLE START ======*/}
        <GalleryTitleBlock />
        {/*====== TITLE END ======*/}
        {/*====== GALLERY GRID START ======*/}
        <GalleryGrid title={null} data={this.state.galleryData} />
        {/*====== GALLERY GRID END ======*/}
        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default GalleryMain;
