import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';
import PrivacyIntroBlock from '../sections/privacy-policy/intro-block';
import API from '../../utils/http';
const bannerImage = require('./../../assets/img/banner/sunset.jpg');

const breadcrumbItems=[
  {
    text: 'Fishermans Cove Resort',
    link:'/',
    isActive: false,
  },
  {
    text: 'Privacy Policy',
    link:'/privacy-policy',
    isActive: true,
  },
]

class PrivacyPolicy extends Component {

  state = {
    pageSections: []
  }

  async componentDidMount() {
    const privacyPolicyID = 44;
    // let id = this.props.match.params.id;
    let id = privacyPolicyID;
    try {
      const sectionsResonse = await API.get('/all_sections/' + id);
      this.setState({ pageSections: sectionsResonse?.data });

    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="bg-white privacy-policy-wrapper">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'privacy-policy'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Privacy Policy"} image={bannerImage} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== INTRO START ======*/}
        <PrivacyIntroBlock data={this.state.pageSections.find(x => x.section_slug === "intro")}  />
        {/*====== INTRO END ======*/}
        {/*====== PILLARS START ======*/}
        {/* <PrivacyAcceptanceBlock/> */}
        {/*====== PILLARS END ======*/}
        {/*====== PROJECTS SLIDER START ======*/}
        {/* <PrivacyInformationBlock /> */}
        {/*====== PROJECTS SLIDER END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default PrivacyPolicy;
