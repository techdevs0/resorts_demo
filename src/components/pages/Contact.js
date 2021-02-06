import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import ContactTitleBlock from '../sections/contact-us/main-text-block';
import ContactUsForm from '../sections/contact-us/contact-form';
import ContactOfferSlider from '../sections/contact-us/contact-offer-slider';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';

const roomsData = [
  {
    title: "Paris Sychelles Restaurant",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/social/01.jpg'),
    description: [
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
    ]
  },
  {
    title: "Le Cardinal Restaurant",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/social/02.jpg'),
    description: [
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
    ]
  },
  {
    title: "Superior Rooms",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/social/03.jpg'),
    description: [
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
    ]
  },
  {
    title: "Superior Rooms",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/social/04.jpg'),
    description: [
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
    ]
  },
  {
    title: "Superior Rooms",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/social/05.jpg'),
    description: [
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
    ]
  },
]

const breadcrumbItems=[
  {
    text: 'Fishermans Cove Resort',
    link:'/',
    isActive: false,
  },
  {
    text: 'Contact Us',
    link:'/contact',
    isActive: true,
  },
]

class Wedding extends Component {
  render() {
    return (
      <div className="bg-white">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'contact'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Contact Us"} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== TITLE START ======*/}
        <ContactTitleBlock />
        {/*====== TITLE END ======*/}
        {/*====== CONTACT FORM START ======*/}
        <ContactUsForm />
        {/*====== CONTACT FORM END ======*/}
        {/*====== ABOUT SLIDER START ======*/}
        <ContactOfferSlider data={roomsData} title={"Fishermans Cove Resort on Social Media"} />
        {/*====== ABOUT SLIDER END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default Wedding;
