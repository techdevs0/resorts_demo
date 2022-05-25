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
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
const bannerImage = require('./../../assets/img/banner/sunset.jpg');

const breadcrumbItems = [
  {
    text: 'Fishermans Cove Resort',
    link: '/',
    isActive: false,
  },
  {
    text: 'Covid Policy',
    link: '/covid-policy',
    isActive: true,
  },
]

const pageId = 45;
class CovidPolicy extends Component {
  state = {
    pageSections: [],
    banner: null,
    intro: null,
    meta: {}
  }

  async componentDidMount() {
    // const covidPolicyID = 45;
    // // let id = this.props.match.params.id;
    // let id = covidPolicyID;
    try {
      // const sectionsResonse = await API.get('/all_sections/' + id);
      // this.setState({ pageSections: sectionsResonse?.data });
      API.get(`/all_sections/${pageId}`).then(response => {
        this.setState({
          banner: response.data?.find(x => x.section_slug === "banner"),
          intro: response.data?.find(x => x.section_slug === "intro"),
        });
      })
        .then(() => {
          API.get(`/meta/${pageId}`).then(response => {
            this.setState({ meta: response.data });
            console.log(response.data);
          })
        })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const activeLang = localStorage.getItem('lang');
    return (
      <div className="bg-white covid-policy-wrapper">
        <SEOTags meta={this.state.meta} />

        {/*<Helmet>*/}
        {/*    <title>*/}
        {/*        Covid Policy | Fishermans Cove Resort*/}
        {/*    </title>*/}
        {/*    <meta*/}
        {/*        name="description"*/}
        {/*        content="Situated at Beau Vallon Beach, Fishermans Cove Resort is one of the best resorts in Seychelles offering countless unforgettable experiences throughout your discovery"*/}
        {/*    />*/}
        {/*</Helmet>*/}
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >
          {/*<Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'covid-policy'} />*/}
          {/*/!*====== BANNER PART START ======*!/*/}
          {/*<Mainbanner title={"COVID Policy"} image={bannerImage}/>*/}
          {/*/!*====== BANNER PART ENDS ======*!/*/}
          {/*/!*====== BOOKING FORM START ======*!/*/}
          {/*<Bookingform />*/}
          {/*/!*====== BOOKING FORM END ======*!/*/}
          {/*/!* BREADCRUMBS START *!/*/}
          {/*<BreadCrumb items={breadcrumbItems} />*/}
          {/* BREADCRUMBS END */}
          {/*====== INTRO START ======*/}
          <CovidIntroBlock data={this.state.intro} />
          {/*====== INTRO END ======*/}
          {/*====== PILLARS START ======*/}
          {/* <CovidTravelSafetyBlock/> */}
          {/*====== PILLARS END ======*/}
          {/*====== PROJECTS SLIDER START ======*/}
          {/* <CovidFlexibilityBlock /> */}
          {/*====== PROJECTS SLIDER END ======*/}

          {/*<Subscribe />*/}

          {/*<Footertwo />*/}

          {/*<BottomNavigator />*/}
        </PageLayout>
      </div>
    );
  }
}

export default CovidPolicy;
