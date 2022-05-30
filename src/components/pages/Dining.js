import React, { Component } from 'react'
import DiningTitleBlock from '../sections/dining/main-text-block';
import DiningGrid from '../sections/dining/dining-grid';
import API from '../../utils/http';
import FAQSection from '../sections/common/FAQSection';
import PageLayout from "../layouts/PageLayout";
import SEOTags from "../sections/common/SEOTags";
import { constants } from "../../utils/constants";


const pageId = 119;
class Dining extends Component {
  state = {
    diningData: [],
    banner: null,
    intro: null,
    faq: [],
    meta: {}
  }

  componentDidMount() {

    API.get('/dining').then(response => {
      this.setState({ diningData: response.data });
    })
      .then(() => {
        API.get(`/meta/${pageId}`).then(response => {
          this.setState({ meta: response.data });
        })
      })
      .then(() => {
        API.get(`/all_sections/${pageId}`).then(response => {
          // debugger;
          let faqRes = response?.data[3]?.section_content;
          faqRes = faqRes.replace(/'/g, '"')
          faqRes = JSON.parse(faqRes)
          console.log("response", faqRes)
          this.setState({
            intro: response.data?.find(x => x.section_slug === "intro"),
            banner: response.data?.find(x => x.section_slug === "banner"),
            // faq: response.data?.find(x => x.section_slug === "faq"),
            faq: faqRes
          });
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    // console.log("Dining Response",this.state)
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
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar }}
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
          // faqList={faqList}
          />
        </PageLayout>
      </div>
    );
  }
}

export default Dining;
