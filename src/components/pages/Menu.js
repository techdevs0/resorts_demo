import React, { Component } from 'react'
import Headerfour from '../layouts/Headerfour';
import Footer from '../layouts/Footer';
import Breadcrumb from '../sections/menu/Breadcrumb';
import Menuarea from '../sections/menu/Menu';
import Roomgallery from '../sections/menu/Roomgallery';

class Menu extends Component {
  render() {
    return (
      <div>
        <Headerfour />
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
