import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';
import CovidIntroBlock from '../sections/covid-policy/intro-block';
import API from '../../utils/http';
import Helmet from "react-helmet";
const bannerImage = require('./../../assets/img/banner/sunset.jpg');

const breadcrumbItems=[
  {
    text: 'Fishermans Cove Resort',
    link:'/',
    isActive: false,
  },
  {
    text: 'Covid Policy',
    link:'/covid-policy',
    isActive: true,
  },
]

class CovidPolicy extends Component {
  state = {
    pageSections: []
  }

  async componentDidMount() {
    const covidPolicyID = 45;
    // let id = this.props.match.params.id;
    let id = covidPolicyID;
    try {
      const sectionsResonse = await API.get('/all_sections/' + id);
      this.setState({ pageSections: sectionsResonse?.data });

    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div className="bg-white covid-policy-wrapper">
          <Helmet>
              <title>
                  Covid Policy | Fishermans Cove Resort
              </title>
              <meta
                  name="description"
                  content="Situated at Beau Vallon Beach, Fishermans Cove Resort is one of the best resorts in Seychelles offering countless unforgettable experiences throughout your discovery"
              />
          </Helmet>
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'covid-policy'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"COVID Policy"} image={bannerImage}/>
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== INTRO START ======*/}
        <CovidIntroBlock  data={this.state.pageSections.find(x => x.section_slug === "intro")}  />
        {/*====== INTRO END ======*/}
        {/*====== PILLARS START ======*/}
        {/* <CovidTravelSafetyBlock/> */}
        {/*====== PILLARS END ======*/}
        {/*====== PROJECTS SLIDER START ======*/}
        {/* <CovidFlexibilityBlock /> */}
        {/*====== PROJECTS SLIDER END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default CovidPolicy;
