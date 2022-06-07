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
    faqsData: [],
    meta: {}
  }

  componentDidMount() {
    const activeLang = localStorage.getItem('lang');

    API.get(`/faqs?lang=${activeLang}`).then((faqresponse) => {
      this.setState({
        faqsData:
          faqresponse?.data?.data?.filter(
            (x) => x.page === "resort_activities"
          ) || [],
      });
    });

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
            faqData={this.state.faqsData}
            activeLang={activeLang}
          />

        </PageLayout>
      </div>
    );
  }
}

export default LeisureInner;
