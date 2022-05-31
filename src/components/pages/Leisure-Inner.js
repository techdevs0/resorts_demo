import React, { Component } from 'react'
import LeisureContentBlocks from '../sections/leisure-inner/content-blocks';
import FAQSection from '../sections/common/FAQSection';
import PageLayout from '../layouts/PageLayout';
import API from '../../utils/http';
import Helmet from "react-helmet";
import { constants } from '../../utils/constants';


const pageId = 41;

class LeisureInner extends Component {

  state = {
    lesiureData: [],
    activities: {},
    intro: {},
    banner: {},
    meta: {}
  }

  componentDidMount() {
    API.get(`/all_sections/${pageId}`).then(response => {
      this.setState({
        banner: response.data?.find(x => x.section_slug === "banner"),
        activities: {
          lounge: response.data?.find(x => x.section_slug === "lounge"),
          snorkeling: response.data?.find(x => x.section_slug === "snorkeling"),
          kayaking: response.data?.find(x => x.section_slug === "kayaking"),
          marine: response.data?.find(x => x.section_slug === "marine"),
          others: response.data?.find(x => x.section_slug === "others"),
        }
      });
    })
      // .then(() => {
      //   API.get(`/all_sections/${pageId}`).then(response => {

      //     this.setState({
      //       intro: response.data?.find(x => x.section_slug === "intro"),
      //       banner: response.data?.find(x => x.section_slug === "banner"),
      //     });
      //   })
      // })
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
        text: `${constants?.site_content?.leisure_page?.bread_crumb?.title2[activeLang]}`,
        link: '/whats-on',
        isActive: false,
      },
      {
        text: `${constants?.site_content?.leisureInner_page?.bread_crumb?.title3[activeLang]}`,
        link: '/leisure-inner',
        isActive: true,
      },
    ];

    const faqList = [
      {
        question: `${constants?.site_content?.leisureInner_page?.faq_sec?.faq1?.question[activeLang]}`,
        answer: `${constants?.site_content?.leisureInner_page?.faq_sec?.faq1?.answer[activeLang]}`,
        category: 'dining'
      },
      {
        question: `${constants?.site_content?.leisureInner_page?.faq_sec?.faq2?.question[activeLang]}`,
        answer: `${constants?.site_content?.leisureInner_page?.faq_sec?.faq2?.answer[activeLang]}`,
        category: 'policy'
      },
      {
        question: `${constants?.site_content?.leisureInner_page?.faq_sec?.faq3?.question[activeLang]}`,
        answer: `${constants?.site_content?.leisureInner_page?.faq_sec?.faq3?.answer[activeLang]}`,
        category: 'policy'
      },
    ]
    return (
      <div className="bg-white leisure-inner-wrapper">

        {/*<SEOTags meta={this.state.meta} />*/}
        <Helmet>
          <title>
            {constants?.site_content?.leisureInner_page?.bread_crumb?.title3[activeLang]} | Fishermans Cove Resort
            {/*Best Beach Resorts in Seychelles | Fishermans Cove Resort*/}
          </title>
          <meta
            name="description"
            content="Situated at Beau Vallon Beach, Fishermans Cove Resort is one of the best resorts in Seychelles offering countless unforgettable experiences throughout your discovery"
          />
        </Helmet>
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >

          {/*====== INTRO START ======*/}
          <LeisureContentBlocks activities={this.state.activities}
            activeLang={activeLang}
          />
          {/*====== INTRO END ======*/}

          <FAQSection
            faqData={faqList}
            activeLang={activeLang}
          />

        </PageLayout>
      </div>
    );
  }
}

export default LeisureInner;
