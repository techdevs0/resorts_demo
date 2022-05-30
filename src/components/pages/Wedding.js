import React, { Component } from 'react'
import WeddingTitleBlock from '../sections/wedding-main/main-text-block';
import WeddingGrid from '../sections/wedding-main/wedding-grid';
import WeddingFormDialog from '../sections/wedding-main/quote-form';
import FAQSection from '../sections/common/FAQSection';
import API from '../../utils/http';
import SEOTags from '../sections/common/SEOTags';
import PageLayout from '../layouts/PageLayout';
import { constants } from "../../utils/constants";

const pageId = 10;

class Wedding extends Component {
  state = {
    weddingData: [],
    intro: {},
    banner: null,
    faq: [],
    meta: {}
  }


  componentDidMount() {

    API.get('/wedding').then(response => {
      this.setState({ weddingData: response.data?.filter(x => x.post_type !== "page") });
    })
      .then(() => {
        API.get(`/meta/${pageId}`).then(response => {
          this.setState({ meta: response.data });
          console.log(response.data);
        })
      })
      .then(() => {
        API.get(`/all_sections/${pageId}`).then(response => {
          let faqRes = response?.data[4]?.section_content;
          faqRes = faqRes.replace(/'/g, '"')
          faqRes = JSON.parse(faqRes)
          console.log("response", faqRes)
          this.setState({
            intro: response.data?.find(x => x.section_slug === "intro"),
            banner: response.data?.find(x => x.section_slug === "banner"),
            faq: faqRes
          });
        })
      })
      .catch(err => {
        console.log(err)
      })

  }

  render() {
    // console.log("wedding response",this.state)
    const activeLang = localStorage.getItem('lang');

    const breadcrumbItems = [
      {
        text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
        link: '/',
        isActive: false,
      },
      {
        text: `${constants?.site_content?.weddings_page?.bread_crumb?.title2[activeLang]}`,
        link: '/seychelles-wedding-resort',
        isActive: true,
      },
    ];

    const faqList = [
      {
        question: `${constants?.site_content?.weddings_page?.faq_sec?.faq1?.question[activeLang]}`,
        answer: `${constants?.site_content?.weddings_page?.faq_sec?.faq1?.answer[activeLang]}`,
        category: 'dining'
      },
      {
        question: `${constants?.site_content?.weddings_page?.faq_sec?.faq2?.question[activeLang]}`,
        answer: `${constants?.site_content?.weddings_page?.faq_sec?.faq2?.answer[activeLang]}`,
        category: 'policy'
      },
      {
        question: `${constants?.site_content?.weddings_page?.faq_sec?.faq3?.question[activeLang]}`,
        answer: `${constants?.site_content?.weddings_page?.faq_sec?.faq3?.answer[activeLang]}`,
        category: 'policy'
      },

      {
        question: `${constants?.site_content?.weddings_page?.faq_sec?.faq4?.question[activeLang]}`,
        answer: `${constants?.site_content?.weddings_page?.faq_sec?.faq4?.answer[activeLang]}`,
        category: 'policy'
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
          {/*====== TITLE START ======*/}
          <WeddingTitleBlock intro={this.state.intro} />
          {/*====== TITLE END ======*/}
          {/*====== ROOM GRID START ======*/}
          <WeddingGrid title={constants?.site_content?.weddings_page?.wedding_grid?.title[activeLang]}
            data={this.state.weddingData} />
          {/*====== ROOM GRID END ======*/}
          <WeddingFormDialog
            activeLang={activeLang}
          />

          <FAQSection
            //faqData={this.state.faq}
            faqData={faqList}
            activeLang={activeLang}
          />
        </PageLayout>
      </div>
    );
  }
}

export default Wedding;
