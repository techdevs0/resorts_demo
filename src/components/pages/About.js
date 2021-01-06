import React, { Component } from 'react'
import Headerfour from '../layouts/Headerfour';
import Footer from '../layouts/Footer';
import Breadcrumb from '../sections/about/Breadcrumb';
import Aboutpage from '../sections/about/About';
import Corefeature from '../sections/about/Corefeature';
import Counter from '../sections/about/Counter';
import News from '../sections/about/News';

class About extends Component {
  render() {
    return (
      <div>
        <Headerfour />
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
