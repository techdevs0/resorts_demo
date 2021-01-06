import React, { Component } from 'react'
import Headerfour from '../layouts/Headerfour';
import Footer from '../layouts/Footer';
import Breadcrumb from '../sections/restaurant/Breadcrumb';
import Restauranttab from '../sections/restaurant/Restaurant';
import Menuarea from '../sections/restaurant/Menu';

class Restaurant extends Component {
  render() {
    return (
      <div>
        <Headerfour />
        {/*====== BREADCRUMB PART START ======*/}
        <Breadcrumb/>
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== RESTAURANT PART START ======*/}
        <Restauranttab/>
        {/*====== RESTAURANT PART END ======*/}
        {/*====== MENU AREA START ======*/}
        <Menuarea/>
        {/*====== MENU AREA END ======*/}
        <Footer />
      </div>

    );
  }
}

export default Restaurant;
