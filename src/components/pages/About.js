import React, { Component } from 'react'
import AboutTitleBlock from '../sections/about-us/main-text-block';
import AboutServices from '../sections/about-us/about-services';
import AboutSecondaryTextBlock from '../sections/about-us/secondary-text-block';
import AboutOfferSlider from '../sections/about-us/about-offer-slider';
import API from '../../utils/http';
import PageLayout from '../layouts/PageLayout';
import SEOTags from "../sections/common/SEOTags";
import { constants } from "../../utils/constants";


const pageId = 40;

class AboutUs extends Component {
  state = {
    premiumOffers: [],
    sections: null,
    banner: null,
    meta: {}
  }

  componentDidMount() {
    try {
      API.get('/premium_offers').then(response => {
        this.setState({ premiumOffers: response.data })
      })
        .then(() => {
          API.get(`/all_sections/${pageId}`).then(response => {
            this.setState({
              banner: response.data?.find(x => x.section_slug === "banner"),
              sections: {
                intro: response.data?.find(x => x.section_slug === "intro"),
                dine: response.data?.find(x => x.section_slug === "dine"),
              }
            });
          })
        })
        .then(() => {
          API.get(`/meta/${pageId}`).then(response => {
            this.setState({ meta: response.data });
            // console.log(response.data);
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
    }
    catch (error) {
      console.log(error)
    }
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
        text: `${constants?.site_content?.about_page?.bread_crumb?.title2[activeLang]}`,
        link: '/about',
        isActive: true,
      },
    ];

    return (
      <div className="bg-white about-us-wrapper">
        <SEOTags meta={this.state.meta} />
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >
          <AboutTitleBlock data={this.state.sections?.intro}
          />
          {/*====== TITLE END ======*/}

          {/*====== SERVICES START ======*/}
          <AboutServices
            activeLang={activeLang}
          />
          {/*====== SERVICES END ======*/}
          {/*====== SECONDARY START ======*/}
          <AboutSecondaryTextBlock data={this.state.sections?.dine}
            activeLang={activeLang}
          />
          {/*====== SECONDARY END ======*/}
          {/*====== ABOUT SLIDER START ======*/}
          <AboutOfferSlider data={this.state.premiumOffers} title={constants?.site_content?.about_page?.about_offer?.title[activeLang]}
            activeLang={activeLang}
          />

        </PageLayout>
      </div>
    );
  }
}

export default AboutUs;
