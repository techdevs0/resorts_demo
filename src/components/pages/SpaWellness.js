import React, { Component } from 'react'
import SpaWellnessTitleBlock from '../sections/spa-wellness/spa-title-block';
import SpaWellnessRecommendations from '../sections/spa-wellness/spa-offers';
import API from "../../langapi/http";
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';


const pageId = `629707716acdd721ac47ee52`;

class SpaWellness extends Component {

  state = {
    premiumOffers: [],
    intro: null,
    banner: null,
    meta: {}
  }

  componentDidMount() {
    try {
      const activeLang = localStorage.getItem('lang');

      API.get(`/premium?lang=${activeLang}`).then(response => {
        this.setState({ premiumOffers: response.data?.data });
      })
        .then(() => {
          API.get(`/all-sections/${pageId}/${activeLang}`).then(response => {
            this.setState({
              banner: response?.data?.data[0]?.banner,
              intro: response?.data?.data[0]?.intro,
              meta: response?.data?.data[0]?.meta
            }
            );
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
        text: `${constants?.site_content?.spawellness_page?.bread_crumb?.title2[activeLang]}`,
        link: '/spa-resort-seychelles',
        isActive: true,
      },
    ]

    return (
      <div className="bg-white spa-wrapper">
        <SEOTags meta={this.state.meta} />
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >
          {/*/!*====== PROJECTS SLIDER START ======*!/*/}
          <SpaWellnessTitleBlock data={this.state.intro}
            activeLang={activeLang}
          />
          {/*====== PROJECTS SLIDER END ======*/}
          {/*====== RECOOMENDATIONS START ======*/}
          <SpaWellnessRecommendations title={constants?.site_content?.spawellness_page?.offer_sec?.title[activeLang]}
            data={this.state.premiumOffers}
            activeLang={activeLang}
          />
          {/*====== RECOOMENDATIONS END ======*/}
        </PageLayout>
      </div>
    );
  }
}

export default SpaWellness;
