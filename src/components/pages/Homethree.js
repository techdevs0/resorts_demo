import React, { Component } from 'react'
import Headerthree from '../layouts/Headerthree';
import Footerthree from '../layouts/Footerthree';
import Mainbanner from '../sections/homepage-three/Banner';
import Bookingform from '../sections/homepage-three/Bookingform';
import About from '../sections/homepage-three/About';
import Roomslider from '../sections/homepage-three/Roomslider';
import Textblock from '../sections/homepage-three/Textblock';
import Corefeature from '../sections/homepage-three/Corefeature';
import Menuarea from '../sections/homepage-three/Menuarea';
import Counter from '../sections/homepage-three/Counter';
import News from '../sections/homepage-one/News';
 

class Homethree extends Component {
  render() {
    return (
      <div>
          <Headerthree />
          {/*====== BANNER PART START ======*/}
          <Mainbanner />
          {/*====== BANNER PART ENDS ======*/}
          {/*====== BOOKING FORM START ======*/}
          <Bookingform/>
          {/*====== BOOKING FORM END ======*/}
          {/*====== ABOUT SECTION START ======*/}
          <About/>
          {/*====== ABOUT SECTION END ======*/}
          {/*====== ROOM SLIDER START ======*/}
          <Roomslider/>
          {/*====== ROOM SLIDER END ======*/}
          {/*====== TEXT BLOCK START ======*/}
          <Textblock/>
          {/*====== TEXT BLOCK END ======*/}
          {/*====== CORE FEATURES START ======*/}
          <Corefeature/>
          {/*====== CORE FEATURES END ======*/}
          {/*====== MENU PART START ======*/}
          <Menuarea/>
          {/*====== MENU PART END ======*/}
          {/*====== COUNTER UP START ======*/}
          <Counter/>
          {/*====== COUNTER UP END ======*/}
          {/*====== LATEST NEWS START ======*/}
          <News/>
          {/*====== LATEST NEWS END ======*/}
          <Footerthree />
        </div>

    );
  }
}

export default Homethree;
