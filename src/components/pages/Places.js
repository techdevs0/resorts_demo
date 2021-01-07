import React, { Component } from 'react'
import Footer from '../layouts/Footertwo';
import Breadcrumb from '../sections/places/Breadcrumb';
import Placesmap from '../sections/places/Placesmap';
import Placesbox from '../sections/places/Placesbox';
import Headertwo from '../layouts/Headertwo';

class Places extends Component {
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
