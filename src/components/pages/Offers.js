import React, { Component } from 'react'
import Footer from '../layouts/Footertwo';
import Breadcrumb from '../sections/offers/Breadcrumb';
import Offer from '../sections/offers/Offers';
import Featureroom from '../sections/offers/Featureroom';
import Headertwo from '../layouts/Headertwo';

class Offers extends Component {
  render() {
    return (
      <div>
        <Headertwo />
        {/*====== BREADCRUMB PART START ======*/}
        <Breadcrumb/>
        {/*====== BREADCRUMB PART END ======*/}
        <Offer/>
        {/*====== FEATURE ROOM START ======*/}
        <Featureroom/>
        {/*====== FEATURE ROOM END ======*/}
        <Footer />
      </div>

    );
  }
}

export default Offers;
