import React, { Component } from 'react'
import Footer from '../layouts/Footertwo';
import Breadcrumb from '../sections/restaurant/Breadcrumb';
import Restauranttab from '../sections/restaurant/Restaurant';
import Menuarea from '../sections/restaurant/Menu';
import Headertwo from '../layouts/Headertwo';

class Restaurant extends Component {
  render() {
    return (
      <div>
        <Headertwo />
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
