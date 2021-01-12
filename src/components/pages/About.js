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

class Wedding extends Component {
  render() {
    return (
      <div className="bg-white">
        <Headertwo />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"About Us"} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/*====== TITLE START ======*/}
        <AboutTitleBlock />
        {/*====== TITLE END ======*/}
        {/*====== SERVICES START ======*/}
        <AboutServices data={roomsData} />
        {/*====== SERVICES END ======*/}
        {/*====== SECONDARY START ======*/}
        <AboutSecondaryTextBlock/>
        {/*====== SECONDARY END ======*/}
        {/*====== ABOUT SLIDER START ======*/}
        <AboutOfferSlider data={roomsData} title={"Explore Fisherman's Cove Premium Offerings"} />
        {/*====== ABOUT SLIDER END ======*/}

        <div className="availability-field">
          <p>
            Be the first to know our newsletter:
          </p>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default Wedding;
