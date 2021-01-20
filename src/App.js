import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Preloader from './components/layouts/Preloader';
import Hometwo from './components/pages/Hometwo';
import About from './components/pages/About';
import Gallery from './components/pages/Gallery';
import Menu from './components/pages/Menu';
import Offers from './components/pages/Offers';
import Restaurant from './components/pages/Restaurant';
import Blog from './components/pages/Blog';
import Blogdetails from './components/pages/Blogdetails';
import Places from './components/pages/Places';
import Placesdetails from './components/pages/Placesdetails';
import Roomgrid from './components/pages/Roomgrid';
import Roomlist from './components/pages/Roomlist';
import Roomdetails from './components/pages/Roomdetails';
import Contact from './components/pages/Contact';
import RoomSuites from './components/pages/RoomSuites';
import Dining from './components/pages/Dining';
import Wedding from './components/pages/Wedding';
import DiningInner from './components/pages/Dining-Inner';
import Leisure from './components/pages/Leisure';
import Sustainability from './components/pages/Sustainability';
import SpaWellness from './components/pages/SpaWellness';
import OffersInner from './components/pages/Offers-Inner';
import LeisureInner from './components/pages/Leisure-Inner';
import RoomsInner from './components/pages/Rooms-Inner';
import GalleryMain from './components/pages/Gallery-Main';
import ScrollToTop from './components/layouts/ScrollToTop';
import Headertwo from './components/layouts/Headertwo';
import { useState } from 'react';
import { useEffect } from 'react';
import AboutSeychelles from './components/pages/AboutSeychelles';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 1020);
    }, false);
    window.addEventListener('load', () => {
      setIsMobile(window.innerWidth < 1020);
    }, false);
    window.addEventListener('scroll', () => {
      setIsTop(window.scrollY > 150);
    }, false);
  })
  return (
    <Router>
      { <Preloader />}
      <ScrollToTop />
      {/* <Headertwo /> */}
      <Switch>
        <Route exact path='/' render={(props) => <Hometwo {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/room-suites' render={(props) => <RoomSuites {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/dining' render={(props) => <Dining {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/dining-inner' render={(props) => <DiningInner {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/offers-inner' render={(props) => <OffersInner {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/rooms-inner' render={(props) => <RoomsInner {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/weddings' render={(props) => <Wedding {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/whats-on' render={(props) => <Leisure {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/leisure-inner' render={(props) => <LeisureInner {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/sustainability' render={(props) => <Sustainability {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/about-seychelles' render={(props) => <AboutSeychelles {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/spa-wellness' render={(props) => <SpaWellness {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/about' render={(props) => <About {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/gallery' render={(props) => <GalleryMain {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/menu' render={(props) => <Menu {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/offers' render={(props) => <Offers {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/restaurant' component={Restaurant} />
        <Route path='/news' component={Blog} />
        <Route path='/news-details' component={Blogdetails} />
        <Route path='/places' component={Places} />
        <Route path='/places-details' component={Placesdetails} />
        <Route path='/room-grid' component={Roomgrid} />
        <Route path='/room-list' component={Roomlist} />
        <Route path='/room-details' component={Roomdetails} />
        <Route path='/contact' render={(props) => <Contact {...props} isMobile={isMobile} isTop={isTop} />} />
        <Route path='/' component={() => <div className="vh-100 d-flex align-items-center justify-content-center"><h1 className="display-3">Error 404! Page Not Found.</h1></div>} />
      </Switch>
    </Router>
  );
}

export default App;
