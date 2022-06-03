import React, { Component } from 'react'
import CancellationIntroBlock from '../sections/cancellation-policy/intro-block';
import API from '../../langapi/http';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';


const pageId = `6297083858c56f617f04bf42`;
class CancellationPolicy extends Component {
  state = {
    banner: null,
    intro: null,
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
    } catch (error) {
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
        text: `${constants?.site_content?.cancellationPolicy_page?.bread_crumb?.title2[activeLang]}`,
        link: '/cancellation-policy',
        isActive: true,
      },
    ]
    return (
      <div className="bg-white cancellation-policy-wrapper">
        <SEOTags meta={this.state.meta} />
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >
          {/*/!*====== INTRO START ======*!/*/}
          <CancellationIntroBlock data={this.state.intro} />
          {/*====== INTRO END ======*/}

        </PageLayout>
      </div>
    );
  }
}

export default CancellationPolicy;
