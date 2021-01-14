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
import SustainIntroBlock from '../sections/sustainability/intro-block';
import SustainPillarsBlock from '../sections/sustainability/pillars-block';
import SustainProjectsBlock from '../sections/sustainability/projects-block';

const roomsData = [
  {
    title: "Paris Sychelles Restaurant",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/room-suites/room1.jpg'),
    description:[
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
    ]
  },
  {
    title: "Lecardinal Restaurant",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/room-suites/room1.jpg'),
    description:[
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
    ]
  },
  {
    title: "Superior Room",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/room-suites/room1.jpg'),
    description:[
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
    ]
  },
  {
    title: "Superior Room",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/room-suites/room1.jpg'),
    description:[
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
      "Guests can hide themseleves away in these comfortable rooms.",
      "Lorem ipsum doler set amet lorem ipsum doler set amet",
    ]
  },
]

class Sustainability extends Component {
  render() {
    return (
      <div className="bg-white sustainability-wrapper">
        <Headertwo />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Sustainability"} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/*====== INTRO START ======*/}
        <SustainIntroBlock />
        {/*====== INTRO END ======*/}
        {/*====== PILLARS START ======*/}
        <SustainPillarsBlock/>
        {/*====== PILLARS END ======*/}
        {/*====== PROJECTS SLIDER START ======*/}
        <SustainProjectsBlock />
        {/*====== PROJECTS SLIDER END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default Sustainability;
