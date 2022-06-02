import React, { Component } from 'react'
import AboutTitleBlock from '../sections/about-us/main-text-block';
import AboutServices from '../sections/about-us/about-services';
import AboutSecondaryTextBlock from '../sections/about-us/secondary-text-block';
import AboutOfferSlider from '../sections/about-us/about-offer-slider';
import API from '../../langapi/http';
import PageLayout from '../layouts/PageLayout';
import SEOTags from "../sections/common/SEOTags";
import { constants } from "../../utils/constants";


const pageId = `6297070d0da7c94b690c6cc3`;

class AboutUs extends Component {
  state = {
    premiumOffers: [],
    sections: null,
    banner: null,
    meta: {}
  }

  componentDidMount() {
    try {
      const activeLang = localStorage.getItem('lang');

      API.get(`/premium?lang=${activeLang}`).then(response => {
        this.setState({ premiumOffers: response.data?.data })
      })
        .then(() => {
          API.get(`/all-sections/${pageId}/${activeLang}`).then(response => {
            this.setState({
              banner: response?.data?.data[0]?.banner,
              sections: response?.data?.data[0],
              meta: response?.data?.data[0]?.meta
            });
          })
        })
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
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
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
