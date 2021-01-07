import React, { Component } from 'react'
import Footer from '../layouts/Footertwo';
import Breadcrumb from '../sections/about/Breadcrumb';
import Aboutpage from '../sections/about/About';
import Corefeature from '../sections/about/Corefeature';
import Counter from '../sections/about/Counter';
import News from '../sections/about/News';
import Headertwo from '../layouts/Headertwo';

class About extends Component {
  render() {
    return (
      <div>
        <Headertwo />
        {/*====== BREADCRUMB PART START ======*/}
        <Breadcrumb/>
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== ABOUT PART START ======*/}
        <Aboutpage/>
        {/*====== ABOUT PART END ======*/}
        {/*====== CORE FEATURES START ======*/}
        <Corefeature/>
        {/*====== CORE FEATURES END ======*/}
        {/*====== COUNTER UP START ======*/}
        <Counter/>
        {/*====== COUNTER UP END ======*/}
        {/*====== LATEST NEWS START ======*/}
        <News/>
        {/*====== LATEST NEWS END ======*/}
        <Footer />
      </div>
    );
  }
}

export default About;
