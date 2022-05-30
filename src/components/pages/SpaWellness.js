import React, { Component } from 'react'
import SpaWellnessTitleBlock from '../sections/spa-wellness/spa-title-block';
import SpaWellnessRecommendations from '../sections/spa-wellness/spa-offers';
import API from '../../utils/http';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';

const pageId = 42;
class SpaWellness extends Component {

  state = {
    premiumOffers: [],
    // pageSections: [],
    intro: null,
    meta: {}
  }

  componentDidMount() {
    // const spaWellnessID = 42;
    // let id = this.props.match.params.id;
    // let id = spaWellnessID;
    try {
      // const response = await API.get('/premium_offers');
      // this.setState({premiumOffers: response.data})
      API.get('/premium_offers').then(response => {
        this.setState({ premiumOffers: response.data });
      })
        // const sectionsResonse = await API.get('/all_sections/' + id);
        // this.setState({pageSections: sectionsResonse?.data});
        //
        // const metaResponse = await API.get(`/meta/${id}`);
        // this.setState({meta: response.data});
        .then(() => {
          API.get(`/meta/${pageId}`).then(response => {
            this.setState({ meta: response.data });
            console.log(response.data);
          })
        })
        .then(() => {
          API.get(`/all_sections/${pageId}`).then(response => {
            this.setState({
              intro: response.data?.find(x => x.section_slug === "intro"),
              banner: response.data?.find(x => x.section_slug === "banner"),
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
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar }}
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
            data={this.state.premiumOffers} />
          {/*====== RECOOMENDATIONS END ======*/}
        </PageLayout>
      </div>
    );
  }
}

export default SpaWellness;
