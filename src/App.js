import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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

function App() {
  return (
      <Router>
        { <Preloader />}
        <Switch>
          <Route exact path='/' component={Hometwo} />
          <Route path='/home-two' component={Hometwo} />
          <Route path='/room-suites' component={RoomSuites} />
          <Route path='/dining' component={Dining} />
          <Route path='/weddings' component={Wedding} />
          <Route path='/about' component={About} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/menu' component={Menu} />
          <Route path='/offers' component={Offers} />
          <Route path='/restaurant' component={Restaurant} />
          <Route path='/news' component={Blog} />
          <Route path='/news-details' component={Blogdetails} />
          <Route path='/places' component={Places} />
          <Route path='/places-details' component={Placesdetails} />
          <Route path='/room-grid' component={Roomgrid} />
          <Route path='/room-list' component={Roomlist} />
          <Route path='/room-details' component={Roomdetails} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
  );
}

export default App;
