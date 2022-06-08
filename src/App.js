import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Preloader from './components/layouts/Preloader';
import ScrollToTop from './components/layouts/ScrollToTop';
import Error404 from './components/pages/Error404';
import API from './langapi/http';

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
const TermsofUse = lazy(() => import('./components/pages/TermsofUse'));
const CancellationPolicy = lazy(() => import('./components/pages/CancellationPolicy'));
const CovidPolicy = lazy(() => import('./components/pages/CovidPolicy'));
const FAQ = lazy(() => import('./components/pages/FAQ'));
const Blog = lazy(() => import('./components/pages/Blog'));
const Blogdetails = lazy(() => import('./components/pages/Blogdetails'));

function App() {

  //language 

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    let lang = 'en';
    if (pathArray[1] && (pathArray[1] == 'en' || pathArray[1] == 'fr' || pathArray[1] == 'de')) {
      console.log('homelanguage', pathArray[1]);
      lang = pathArray[1];
    }
    localStorage.setItem("lang", lang);
  }, []);

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
    const activeLang = localStorage.getItem('lang');

    API.get(`/pages?lang=${activeLang}`).then(res => {
      if (res.status === 200) {
        const data = res?.data?.data;
        setAppRoutes(data);
      }
    })
  }, [])

  const mapRoute = (slug) => {

    // console.log("route", slug);

    switch (slug) {
      case "wedding":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <Wedding {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <Wedding {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <Wedding {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      case "fine-dining-seychelles":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <Dining {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <Dining {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <Dining {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      // case "dining":
      //   return (
      //     [
      //       <Route path={`/en/${slug}/:id`} exact render={(props) => <DiningInner {...props} isMobile={isMobile} isTop={isTop} />} />,
      //       <Route path={`/fr/${slug}/:id`} exact render={(props) => <DiningInner {...props} isMobile={isMobile} isTop={isTop} />} />,
      //       <Route path={`/de/${slug}/:id`} exact render={(props) => <DiningInner {...props} isMobile={isMobile} isTop={isTop} />} />
      //     ]
      //   )
      case "rooms-suites-seychelles":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <RoomSuites {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <RoomSuites {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <RoomSuites {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      // case "rooms":
      //   return (
      //     [
      //       <Route path={`/en/${slug}/:id`} exact render={(props) => <RoomsInner {...props} isMobile={isMobile} isTop={isTop} />} />,
      //       <Route path={`/fr/${slug}/:id`} exact render={(props) => <RoomsInner {...props} isMobile={isMobile} isTop={isTop} />} />,
      //       <Route path={`/de/${slug}/:id`} exact render={(props) => <RoomsInner {...props} isMobile={isMobile} isTop={isTop} />} />
      //     ]
      //   )
      case "sustainability":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <Sustainability {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <Sustainability {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <Sustainability {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      case "about-us":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <About {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <About {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <About {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      case "contact":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <Contact {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <Contact {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <Contact {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      case "leisure-inner":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <LeisureInner {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <LeisureInner {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <LeisureInner {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      case "whats-on":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <Leisure {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <Leisure {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <Leisure {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      case "spa-wellness":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <SpaWellness {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <SpaWellness {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <SpaWellness {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      case "about-seychelles":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <AboutSeychelles {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <AboutSeychelles {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <AboutSeychelles {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      case "offers":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <Offers {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <Offers {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <Offers {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      case "privacy-policy":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <PrivacyPolicy {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <PrivacyPolicy {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <PrivacyPolicy {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      case "terms-of-use":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <TermsofUse {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <TermsofUse {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <TermsofUse {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      case "covid-policy":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <CovidPolicy {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <CovidPolicy {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <CovidPolicy {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      case "cancellation-policy":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <CancellationPolicy {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <CancellationPolicy {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <CancellationPolicy {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      // case "offer":
      //   return (
      //     [
      //       <Route path={`/en/${slug}/:id`} exact render={(props) => <OffersInner {...props} isMobile={isMobile} isTop={isTop} />} />,
      //       <Route path={`/fr/${slug}/:id`} exact render={(props) => <OffersInner {...props} isMobile={isMobile} isTop={isTop} />} />,
      //       <Route path={`/de/${slug}/:id`} exact render={(props) => <OffersInner {...props} isMobile={isMobile} isTop={isTop} />} />
      //     ]
      //   )

      case "faqs":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <FAQ {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <FAQ {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <FAQ {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      case "blog":
        return (
          [
            <Route path={`/en/${slug}`} exact render={(props) => <Blog {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/fr/${slug}`} exact render={(props) => <Blog {...props} isMobile={isMobile} isTop={isTop} />} />,
            <Route path={`/de/${slug}`} exact render={(props) => <Blog {...props} isMobile={isMobile} isTop={isTop} />} />
          ]
        )
      // case "blog-inner":
      //   return (
      //     [
      //       <Route path={`/en/${slug}/:id`} exact render={(props) => <Blogdetails {...props} isMobile={isMobile} isTop={isTop} />} />,
      //       <Route path={`/fr/${slug}/:id`} exact render={(props) => <Blogdetails {...props} isMobile={isMobile} isTop={isTop} />} />,
      //       <Route path={`/de/${slug}/:id`} exact render={(props) => <Blogdetails {...props} isMobile={isMobile} isTop={isTop} />} />
      //     ]
      //   )
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
          <Route exact path='/en' render={(props) => <Hometwo {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route exact path='/fr' render={(props) => <Hometwo {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route exact path='/de' render={(props) => <Hometwo {...props} isMobile={isMobile} isTop={isTop} />} />

          <Route path={`/en/dining/:id`} exact render={(props) => <DiningInner {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path={`/fr/dining/:id`} exact render={(props) => <DiningInner {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path={`/de/dining/:id`} exact render={(props) => <DiningInner {...props} isMobile={isMobile} isTop={isTop} />} />

          <Route path={`/en/rooms/:id`} exact render={(props) => <RoomsInner {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path={`/fr/rooms/:id`} exact render={(props) => <RoomsInner {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path={`/de/rooms/:id`} exact render={(props) => <RoomsInner {...props} isMobile={isMobile} isTop={isTop} />} />

          <Route path={`/en/offer/:id`} exact render={(props) => <OffersInner {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path={`/fr/offer/:id`} exact render={(props) => <OffersInner {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path={`/de/offer/:id`} exact render={(props) => <OffersInner {...props} isMobile={isMobile} isTop={isTop} />} />

          <Route path={`/en/blogs/:id`} exact render={(props) => <Blogdetails {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path={`/fr/blogs/:id`} exact render={(props) => <Blogdetails {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path={`/de/blogs/:id`} exact render={(props) => <Blogdetails {...props} isMobile={isMobile} isTop={isTop} />} />

          <Route path='/en/gallery' render={(props) => <GalleryMain {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/fr/gallery' render={(props) => <GalleryMain {...props} isMobile={isMobile} isTop={isTop} />} />
          <Route path='/de/gallery' render={(props) => <GalleryMain {...props} isMobile={isMobile} isTop={isTop} />} />
          {

            appRoutes?.map(x => (
              mapRoute(x.slug)
            ))

          }


          {/* <Route path='/' component={(props) => <Error404 {...props} isMobile={isMobile} isTop={isTop} />} /> */}

        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
