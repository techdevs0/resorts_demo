import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Preloader from './components/layouts/Preloader';
// import Hometwo from './components/pages/Hometwo';
// import About from './components/pages/About';
// import Gallery from './components/pages/Gallery';
// import Offers from './components/pages/Offers';

// ***** UNUSED ***** (ORIGINAL THEME PAGES)

// import Menu from './components/pages/Menu';
// import Restaurant from './components/pages/Restaurant';
// import Blog from './components/pages/Blog';
// import Blogdetails from './components/pages/Blogdetails';
// import Places from './components/pages/Places';
// import Placesdetails from './components/pages/Placesdetails';
// import Roomgrid from './components/pages/Roomgrid';
// import Roomlist from './components/pages/Roomlist';
// import Roomdetails from './components/pages/Roomdetails';


// ********** SITES PAGES IN USED WITH NORMAL IMPORTS

// import Contact from './components/pages/Contact';
// import RoomSuites from './components/pages/RoomSuites';
// import Dining from './components/pages/Dining';
// import Wedding from './components/pages/Wedding';
// import DiningInner from './components/pages/Dining-Inner';
// import Leisure from './components/pages/Leisure';
// import Sustainability from './components/pages/Sustainability';
// import SpaWellness from './components/pages/SpaWellness';
// import OffersInner from './components/pages/Offers-Inner';
// import LeisureInner from './components/pages/Leisure-Inner';
// import RoomsInner from './components/pages/Rooms-Inner';
// import GalleryMain from './components/pages/Gallery-Main';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import AboutSeychelles from './components/pages/AboutSeychelles';
// import PrivacyPolicy from './components/pages/PrivacyPolicy';
// import CancellationPolicy from './components/pages/CancellationPolicy';
// import CovidPolicy from './components/pages/CovidPolicy';
// import FAQ from './components/pages/FAQ';

import ScrollToTop from './components/layouts/ScrollToTop';
import Error404 from './components/pages/Error404';
import API from './utils/http';

// ********* lazy loading componentes *******
const Hometwo = lazy(() => import('./components/pages/Hometwo'));
const About = lazy(() => import('./components/pages/About'));
const RoomSuites = lazy(() => import('./components/pages/RoomSuites'));
const Offers = lazy(() => import('./components/pages/Offers'));
const Contact = lazy(() => import('./components/pages/Contact'));
const Dining = lazy(() => import('./components/pages/Dining'));
const Wedding = lazy(() => import('./components/pages/Wedding'));
const DiningInner = lazy(() => import('./components/pages/Dining-Inner'));
const Leisure = lazy(() => import('./components/pages/Leisure'));
const Sustainability = lazy(() => import('./components/pages/Sustainability'));
const SpaWellness = lazy(() => import('./components/pages/SpaWellness'));
const OffersInner = lazy(() => import('./components/pages/Offers-Inner'));
const LeisureInner = lazy(() => import('./components/pages/Leisure-Inner'));
const RoomsInner = lazy(() => import('./components/pages/Rooms-Inner'));
const GalleryMain = lazy(() => import('./components/pages/Gallery-Main'));
const AboutSeychelles = lazy(() => import('./components/pages/AboutSeychelles'));
const PrivacyPolicy = lazy(() => import('./components/pages/PrivacyPolicy'));
const CancellationPolicy = lazy(() => import('./components/pages/CancellationPolicy'));
const CovidPolicy = lazy(() => import('./components/pages/CovidPolicy'));
const FAQ = lazy(() => import('./components/pages/FAQ'));


function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const [appRoutes, setAppRoutes] = useState([]);

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

  useEffect(() => {

    API.get('/pages').then(res => {
      if (res.status === 200) {
        const { data } = res;
        setAppRoutes(data);
      }
    })
  }, [])

  const mapRoute = (route, inner_route) => {
    route = route.split('/')?.[1] || route;
    switch (inner_route) {
      case "wedding":
        return (
          <Route path={`/${route}`} exact render={(props) => <Wedding {...props} isMobile={isMobile} isTop={isTop} />} />
        )
      case "offers":
        return (
          <Route path={`/${route}`} exact render={(props) => <Offers {...props} isMobile={isMobile} isTop={isTop} />} />
        )
      case "dining":
        return (
          <Route path={`/${route}`} exact render={(props) => <Dining {...props} isMobile={isMobile} isTop={isTop} />} />
        )
      case "dining-inner":
        return (
          <Route path={`/${inner_route}/:id`} exact render={(props) => <DiningInner {...props} isMobile={isMobile} isTop={isTop} />} />
        )
      case "rooms-suites":
        return (
          <Route path={`/${inner_route}`} exact render={(props) => <RoomSuites {...props} isMobile={isMobile} isTop={isTop} />} />
        )
      case "rooms-inner":
        return (
          <Route path={`/${inner_route}/:id`} exact render={(props) => <RoomsInner {...props} isMobile={isMobile} isTop={isTop} />} />
        )
      case "sustainability":
        return (
          <Route path={`/${route}`} exact render={(props) => <Sustainability {...props} isMobile={isMobile} isTop={isTop} />} />
        )
      case "about-us":
        return (
          <Route path={`/${route}`} exact render={(props) => <About {...props} isMobile={isMobile} isTop={isTop} />} />
        )
      case "leisure-inner":
        return (
          <Route path={`/${route}`} exact render={(props) => <LeisureInner {...props} isMobile={isMobile} isTop={isTop} />} />
        )
      case "spa-wellness":
        return (
          <Route path={`/${route}`} exact render={(props) => <SpaWellness {...props} isMobile={isMobile} isTop={isTop} />} />
        )
      case "about-seychelles":
        return (
          <Route path={`/${route}`} exact render={(props) => <AboutSeychelles {...props} isMobile={isMobile} isTop={isTop} />} />
        )
      case "privacy-policy":
        return (
          <Route path={`/${route}`} exact render={(props) => <PrivacyPolicy {...props} isMobile={isMobile} isTop={isTop} />} />
        )
      case "covid-policy":
        return (
          <Route path={`/${route}`} exact render={(props) => <CovidPolicy {...props} isMobile={isMobile} isTop={isTop} />} />
        )
      case "cancellation-policy":
        return (
          <Route path={`/${route}`} exact render={(props) => <CancellationPolicy {...props} isMobile={isMobile} isTop={isTop} />} />
        )
      default:
        break;
        return (
          <Route path='/' component={(props) => <Error404 {...props} isMobile={isMobile} isTop={isTop} />} />
        )
    }
  }

  return (
    <Router>
      <Suspense fallback={<Preloader />}>

        {<Preloader />}
        <ScrollToTop />
        <Switch>
          <Route exact path='/' render={(props) => <Hometwo {...props} isMobile={isMobile} isTop={isTop} />} />

          {
            appRoutes?.map(x => (
              mapRoute(x.route, x.inner_route)
            ))
          }

          {/* NEW ROUTES  */}
          {/* <Route path='/room-suites' render={(props) => <RoomSuites {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/dining' render={(props) => <Dining {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/dining-inner/:id' render={(props) => <DiningInner key={props.match.params.id} {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/offers-inner' render={(props) => <OffersInner {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/rooms-inner/:id' render={(props) => <RoomsInner key={props.match.params.id}  {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/weddings' render={(props) => <Wedding {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/whats-on' render={(props) => <Leisure {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/leisure-inner' render={(props) => <LeisureInner {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/sustainability' render={(props) => <Sustainability {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/about-seychelles' render={(props) => <AboutSeychelles {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/spa-wellness' render={(props) => <SpaWellness {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/about' render={(props) => <About {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/gallery' render={(props) => <GalleryMain {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/offers' render={(props) => <Offers {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/contact' render={(props) => <Contact {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/privacy-policy' render={(props) => <PrivacyPolicy {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/cancellation-policy' render={(props) => <CancellationPolicy {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/covid-policy' render={(props) => <CovidPolicy {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/faq' render={(props) => <FAQ {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/' component={(props) => <Error404 {...props} isMobile={isMobile} isTop={isTop} />} /> */}
          
          {/* <Route path='/room-suites' exact render={(props) => <RoomSuites {...props} isMobile={isMobile} isTop={isTop} />} /> */}
          <Route path='/again-addeing' exact render={(props) => <RoomSuites {...props} isMobile={isMobile} isTop={isTop} />} />

          <Route path='/gallery' render={(props) => <GalleryMain {...props} isMobile={isMobile} isTop={isTop} />} />


          {/* OLD ROUTES */}
          {/* <Route path='/menu' render={(props) => <Menu {...props} isMobile={isMobile} isTop={isTop} />} /> */}
          {/* <Route path='/restaurant' component={Restaurant} /> */}
          {/* <Route path='/news' component={Blog} />
          <Route path='/news-details' component={Blogdetails} />
          <Route path='/places' component={Places} /> */}
          {/* <Route path='/places-details' component={Placesdetails} /> */}
          {/* <Route path='/room-grid' component={Roomgrid} /> */}
          {/* <Route path='/room-list' component={Roomlist} /> */}
          {/* <Route path='/room-details' component={Roomdetails} /> */}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
