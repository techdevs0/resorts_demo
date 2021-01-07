import React, { Component } from 'react'
import Footer from '../layouts/Footertwo';
import Breadcrumb from '../sections/places-details/Breadcrumb'
import Placesdetail from '../sections/places-details/Placesdetails'
import Placesbox from '../sections/places-details/Placesbox'
import Headertwo from '../layouts/Headertwo';

class Placesdetails extends Component {
  render() {
    return (
      <div>
        <Headertwo />
        {/*====== BREADCRUMB PART START ======*/}
        <Breadcrumb/>
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== PLACES CONTENT START ======*/}
        <section className="places-wrapper pt-120 pb-120">
          <div className="container">
            <Placesdetail/>
            {/* Places Boxes */}
            <Placesbox/>
          </div>
        </section>
        {/*====== PLACES CONTENT END ======*/}
        <Footer />
      </div>

    );
  }
}

export default Placesdetails;
