import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import SeychellesIntroBlock from '../sections/about-seychelles/intro-block';
import SeychellesPillarsBlock from '../sections/about-seychelles/pillars-block';
import BreadCrumb from '../layouts/BreadCrumb';
import Helmet from "react-helmet";
import API from "../../utils/http";
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
const bannerImage = require('./../../assets/img/banner/About-Seychelles.jpg');
const breadcrumbItems=[
  {
    text: 'Fishermans Cove Resort',
    link:'/',
    isActive: false,
  },
  {
    text: 'About Seychelles',
    link:'/about-seychelles',
    isActive: true,
  },
]
const pageId = 43;

class AboutSeychelles extends Component {
    state = {
        premiumOffers: [],
        sections: null,
        banner: null,
        meta:{}
    }
    componentDidMount() {
        try {
            API.get(`/all_sections/${pageId}`).then(response => {
                this.setState({
                    banner: response.data?.find(x => x.section_slug === "banner"),
                    sections: {
                        intro: response.data?.find(x => x.section_slug === "intro"),
                    }
                });
            })
                .then(() => {
                    API.get(`/meta/${pageId}`).then(response => {
                        this.setState({ meta: response.data });
                        console.log(response.data);
                    })
                })
        }
        catch (error) {
            console.log(error)
        }
    }
  render() {
    return (
      <div className="bg-white seychelles-wrapper">
          <SEOTags meta={this.state.meta} />

          {/*<Helmet>*/}
          {/*    <title>*/}
          {/*        About Seychelles | Fishermans Cove Resort*/}
          {/*        /!*Best Beach Resorts in Seychelles | Fishermans Cove Resort*!/*/}
          {/*    </title>*/}
          {/*    <meta*/}
          {/*        name="description"*/}
          {/*        content="Situated at Beau Vallon Beach, Fishermans Cove Resort is one of the best resorts in Seychelles offering countless unforgettable experiences throughout your discovery"*/}
          {/*    />*/}
          {/*</Helmet>*/}
          <PageLayout
              header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
              banner={{ title: this.state.banner?.section_name, image:  this.state.banner?.section_avatar }}
              breadCrumb={{ items: breadcrumbItems }}
          >
        {/*<Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'seychelles'} />*/}
        {/*/!*====== BANNER PART START ======*!/*/}
        {/*<Mainbanner title={"About Seychelles"} image={bannerImage}/>*/}
        {/*/!*====== BANNER PART ENDS ======*!/*/}
        {/*/!*====== BOOKING FORM START ======*!/*/}
        {/*<Bookingform />*/}
        {/*/!*====== BOOKING FORM END ======*!/*/}
        {/*/!* BREADCRUMBS START *!/*/}
        {/*<BreadCrumb items={breadcrumbItems} />*/}
        {/*/!* BREADCRUMBS END *!/*/}
        {/*/!*====== INTRO START ======*!/*/}
        <SeychellesIntroBlock data={this.state.sections?.intro} />
        {/*====== INTRO END ======*/}
        {/*====== PILLARS START ======*/}
        <SeychellesPillarsBlock/>
        {/*====== PILLARS END ======*/}
        {/*====== PROJECTS SLIDER START ======*/}
        {/* <SeychellesProjectsBlock /> */}
        {/*====== PROJECTS SLIDER END ======*/}
        {/* <SeychellesEngeryBlock /> */}
        {/*====== PROJECTS SLIDER END ======*/}

        {/*<Subscribe />*/}

        {/*<Footertwo />*/}

        {/*<BottomNavigator />*/}
          </PageLayout>
      </div>
    );
  }
}

export default AboutSeychelles;
