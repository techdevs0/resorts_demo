import React, { Component } from 'react'
import Headerfour from '../layouts/Headerfour';
import Footer from '../layouts/Footer';
import Breadcrumb from '../sections/offers/Breadcrumb';
import Offer from '../sections/offers/Offers';
import Featureroom from '../sections/offers/Featureroom';

class Offers extends Component {
  render() {
    return (
      <div>
        <Headerfour />
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
