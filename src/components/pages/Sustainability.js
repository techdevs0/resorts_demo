import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import SustainIntroBlock from '../sections/sustainability/intro-block';
import SustainPillarsBlock from '../sections/sustainability/pillars-block';
import SustainProjectsBlock from '../sections/sustainability/projects-block';
import SustainEngeryBlock from '../sections/sustainability/energy-conservation';
import BreadCrumb from '../layouts/BreadCrumb';
import API from '../../utils/http';
import SEOTags from "../sections/common/SEOTags";
import { constants } from '../../utils/constants';


const pageId = 39;

class Sustainability extends Component {
  state = {
    lesiureData: [],
    activities: {},
    intro: {},
    banner: {},
    meta: {}
  }

  componentDidMount() {
    API.get(`/all_sections/${pageId}`).then(response => {
      this.setState({
        banner: response.data?.find(x => x.section_slug === "banner"),
        activities: {
          intro: response.data?.find(x => x.section_slug === "intro"),
          projects: response.data?.find(x => x.section_slug === "projects"),
          pillars: response.data?.find(x => x.section_slug === "pillars"),
          energy: response.data?.find(x => x.section_slug === "energy"),
        }
      })
    })
      .then(() => {
        API.get(`/meta/${pageId}`).then(response => {
          this.setState({ meta: response.data });
          console.log(response.data);
        })
      })
      // .then(() => {
      //   API.get(`/all_sections/${pageId}`).then(response => {

      //     this.setState({
      //       intro: response.data?.find(x => x.section_slug === "intro"),
      //       banner: response.data?.find(x => x.section_slug === "banner"),
      //     });
      //   })
      // })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    const activeLang = localStorage.getItem('lang');

    const breadcrumbItems = [
      {
        text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
        link: '/',
        isActive: false,
      },
      {
        text: `${constants?.site_content?.sustainbility_page?.bread_crumb?.title2[activeLang]}`,
        link: '/seychelles-eco-resort',
        isActive: true,
      },
    ]
    return (
      <div className="bg-white sustainability-wrapper">
        <SEOTags meta={this.state.meta} />

        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop} key={'sustainability'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={constants?.site_content?.sustainbility_page?.bread_crumb?.title2[activeLang]} image={this.state.banner?.section_avatar}
          activeLang={activeLang}
        />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform
          activeLang={activeLang}
        />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems}
          activeLang={activeLang}
        />
        {/* BREADCRUMBS END */}
        {/*====== INTRO START ======*/}
        <SustainIntroBlock data={this.state.activities?.intro}
          activeLang={activeLang}
        />
        {/*====== INTRO END ======*/}
        {/*====== PILLARS START ======*/}
        <SustainPillarsBlock data={this.state.activities?.pillars} />
        {/*====== PILLARS END ======*/}
        {/*====== PROJECTS SLIDER START ======*/}
        <SustainProjectsBlock data={this.state.activities?.projects} />
        {/*====== PROJECTS SLIDER END ======*/}
        <SustainEngeryBlock data={this.state.activities?.energy} />
        {/*====== PROJECTS SLIDER END ======*/}

        <Subscribe
          activeLang={activeLang}
        />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default Sustainability;
