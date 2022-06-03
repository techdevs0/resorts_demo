import React, { Component } from 'react'
import DiningTitleBlock from '../sections/dining/main-text-block';
import DiningGrid from '../sections/dining/dining-grid';
import API from '../../langapi/http';
import FAQSection from '../sections/common/FAQSection';
import PageLayout from "../layouts/PageLayout";
import SEOTags from "../sections/common/SEOTags";
import { constants } from "../../utils/constants";


const pageId = `62970a9b74ebe90925430da2`;
class Dining extends Component {
  state = {
    diningData: [],
    banner: null,
    intro: null,
    faq: [],
    meta: {}
  }

  componentDidMount() {
    const activeLang = localStorage.getItem('lang');

    API.get(`/dinings?lang=${activeLang}`).then(response => {
      this.setState({ diningData: response.data?.data });
    })
      .then(() => {
        API.get(`/all-sections/${pageId}/${activeLang}`).then(response => {
          this.setState({
            banner: response?.data?.data[0]?.banner,
            intro: response?.data?.data[0]?.intro,
            meta: response?.data?.data[0]?.meta,
            faq: response?.data?.data[0]?.faq?.section_content
          });
        })
      })
      .catch(err => {
        console.log(err)
      })
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
        text: `${constants?.site_content?.dinning_page?.bread_crumb?.title2[activeLang]}`,
        link: '/fine-dining-seychelles',
        isActive: true,
      },
    ]
    return (
      <div className="bg-white">
        <SEOTags meta={this.state.meta} />
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >
          {/*/!*====== TITLE START ======*!/*/}
          <DiningTitleBlock data={this.state.intro} />
          {/*====== TITLE END ======*/}
          {/*====== ROOM GRID START ======*/}
          <DiningGrid title={null} data={this.state.diningData} />
          {/*====== ROOM GRID END ======*/}
          <FAQSection
            faqData={this.state.faq}
            activeLang={activeLang}
          />
        </PageLayout>
      </div>
    );
  }
}

export default Dining;
