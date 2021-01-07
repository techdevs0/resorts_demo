import React, { Component } from 'react'
import Footer from '../layouts/Footertwo';
import Breadcrumb from '../sections/menu/Breadcrumb';
import Menuarea from '../sections/menu/Menu';
import Roomgallery from '../sections/menu/Roomgallery';
import Headertwo from '../layouts/Headertwo';

class Menu extends Component {
  render() {
    return (
      <div>
        <Headertwo />
        {/*====== BREADCRUMB PART START ======*/}
        <Breadcrumb/>
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== MENU AREA START ======*/}
        <Menuarea/>
        {/*====== MENU AREA END ======*/}
        {/*====== ROOM Gallery CTA START ======*/}
        <Roomgallery/>
        {/*====== ROOM Gallery CTA END ======*/}
        <Footer />
      </div>

    );
  }
}

export default Menu;
