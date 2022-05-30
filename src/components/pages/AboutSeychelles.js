import React, { Component } from 'react'
import SeychellesIntroBlock from '../sections/about-seychelles/intro-block';
import SeychellesPillarsBlock from '../sections/about-seychelles/pillars-block';
import API from "../../utils/http";
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';

const pageId = 43;

class AboutSeychelles extends Component {
  state = {
    premiumOffers: [],
    sections: null,
    banner: null,
    meta: {}
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
    const activeLang = localStorage.getItem('lang');

    const breadcrumbItems = [
      {
        text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
        link: '/',
        isActive: false,
      },
      {
        text: `${constants?.site_content?.aboutSeychelles_page?.bread_crumb?.title2[activeLang]}`,
        link: '/about-seychelles',
        isActive: true,
      },
    ]
    return (
      <div className="bg-white seychelles-wrapper">
        <SEOTags meta={this.state.meta} />
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >
          {/*/!*====== INTRO START ======*!/*/}
          <SeychellesIntroBlock data={this.state.sections?.intro}
            activeLang={activeLang}
          />
          {/*====== INTRO END ======*/}
          {/*====== PILLARS START ======*/}
          <SeychellesPillarsBlock
            activeLang={activeLang}
          />
        </PageLayout>
      </div>
    );
  }
}

export default AboutSeychelles;
