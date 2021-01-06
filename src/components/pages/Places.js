import React, { Component } from 'react'
import Headerfour from '../layouts/Headerfour';
import Footer from '../layouts/Footer';
import Breadcrumb from '../sections/places/Breadcrumb';
import Placesmap from '../sections/places/Placesmap';
import Placesbox from '../sections/places/Placesbox';

class Places extends Component {
  render() {
    return (
      <div>
        <Headerfour />
        {/*====== BREADCRUMB PART START ======*/}
        <Breadcrumb/>
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== PLACES CONTENT START ======*/}
        
        <section className="places-wrapper pt-120 pb-120">
          <div className="container">
            {/* Places Maps */}
            <Placesmap/>
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

export default Places;
