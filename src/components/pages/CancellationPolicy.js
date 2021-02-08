import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';
import CancellationIntroBlock from '../sections/cancellation-policy/intro-block';
import API from '../../utils/http';
const bannerImage = require('./../../assets/img/banner/sunset.jpg');

const breadcrumbItems=[
  {
    text: 'Fishermans Cove Resort',
    link:'/',
    isActive: false,
  },
  {
    text: 'Cancellation Policy',
    link:'/cancellation-policy',
    isActive: true,
  },
]

class CancellationPolicy extends Component {
  state = {
    pageSections: []
  }

  async componentDidMount() {
    const cancellationPolicyID = 46;
    // let id = this.props.match.params.id;
    let id = cancellationPolicyID;
    try {
      const sectionsResonse = await API.get('/all_sections/' + id);
      this.setState({ pageSections: sectionsResonse?.data });

    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div className="bg-white cancellation-policy-wrapper">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'cancellation-policy'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Cancellation Policy"} image={bannerImage} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== INTRO START ======*/}
        <CancellationIntroBlock  data={this.state.pageSections.find(x => x.section_slug === "intro")}   />
        {/*====== INTRO END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default CancellationPolicy;
