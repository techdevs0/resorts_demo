import React, { Component } from 'react'
import SeychellesIntroBlock from '../sections/about-seychelles/intro-block';
import SeychellesPillarsBlock from '../sections/about-seychelles/pillars-block';
import API from "../../langapi/http";
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';

const pageId = `629707a57f20d344c2209512`;

class AboutSeychelles extends Component {
  state = {
    intro: null,
    banner: null,
    meta: {}
  }
  componentDidMount() {
    try {
      const activeLang = localStorage.getItem('lang');

      API.get(`/all-sections/${pageId}/${activeLang}`).then(response => {
        this.setState({
          banner: response?.data?.data[0]?.banner,
          intro: response?.data?.data[0]?.intro,
          meta: response?.data?.data[0]?.meta
        });
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
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >
          {/*/!*====== INTRO START ======*!/*/}
          <SeychellesIntroBlock data={this.state.intro}
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
