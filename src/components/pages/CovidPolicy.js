import React, { Component } from 'react'
import CovidIntroBlock from '../sections/covid-policy/intro-block';
import API from '../../langapi/http';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';


const pageId = `62970800fa087469e42bfec3`;
class CovidPolicy extends Component {
  state = {
    banner: null,
    intro: null,
    meta: {}
  }

  async componentDidMount() {
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
        text: `${constants?.site_content?.covidPolicy_page?.bread_crumb?.title2[activeLang]}`,
        link: '/covid-policy',
        isActive: true,
      },
    ]
    return (
      <div className="bg-white covid-policy-wrapper">
        <SEOTags meta={this.state.meta} />
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >
          {/*====== INTRO START ======*/}
          <CovidIntroBlock data={this.state.intro} />
          {/*====== INTRO END ======*/}

        </PageLayout>
      </div>
    );
  }
}

export default CovidPolicy;
