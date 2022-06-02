import React, { Component } from 'react'
import LeisureContentBlocks from '../sections/leisure-inner/content-blocks';
import FAQSection from '../sections/common/FAQSection';
import PageLayout from '../layouts/PageLayout';
import API from '../../langapi/http';
import { constants } from '../../utils/constants';
import SEOTags from "../sections/common/SEOTags";


const pageId = `62970741f09c76219b3f3602`;

class LeisureInner extends Component {

  state = {
    activities: {},
    intro: {},
    banner: {},
    meta: {}
  }

  componentDidMount() {
    const activeLang = localStorage.getItem('lang');

    API.get(`/all-sections/${pageId}/${activeLang}`).then(response => {
      this.setState({
        banner: response?.data?.data[0]?.banner,
        meta: response?.data?.data[0]?.meta,
        activities: {
          lounge: response?.data?.data[0]?.lounge,
          snorkeling: response?.data?.data[0]?.snorkeling,
          kayaking: response?.data?.data[0]?.kayaking,
          marine: response?.data?.data[0]?.marine,
          others: response?.data?.data[0]?.others,
        }
      });
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

        <SEOTags meta={this.state.meta} />

        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
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
