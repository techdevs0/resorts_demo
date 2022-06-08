import React, { Component } from 'react'
import FAQIntroBlock from '../sections/faq/intro-block';
import API from '../../langapi/http';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';


const pageId = '6297124bb6801e339e7cb7c2';
class FAQ extends Component {
  state = {
    banner: null,
    meta: {},
    faqsData: []
  }

  async componentDidMount() {
    try {
      const activeLang = localStorage.getItem('lang');

      const response = await API.get(`/faqs?lang=${activeLang}`);
      this.setState({
        faqsData: response?.data?.data?.filter(
          (x) => x.page === "faq"
        ) || [],
      });

      API.get(`/all-sections/${pageId}/${activeLang}`).then(response => {
        this.setState({
          banner: response?.data?.data[0]?.banner,
          meta: response?.data?.data[0]?.meta
        });
      })
    } catch (error) {
      console.log(error);
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
        text: 'F.A.Qs',
        link: '/faqs',
        isActive: true,
      },
    ]
    return (
      <div>
        <SEOTags meta={this.state.meta} />
        {
          this.state.banner ?
            <PageLayout
              header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
              banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
              breadCrumb={{ items: breadcrumbItems }}
              activeLang={activeLang}
            >
              {/*  /!*====== INTRO START ======*!/*/}
              <div className="bg-white faq-wrapper">
                <FAQIntroBlock
                  faqList={this.state.faqsData}
                  activeLang={activeLang}
                />
                {/*====== INTRO END ======*/}
              </div>

            </PageLayout>
            :
            <div className={"preloader align-items-center justify-content-center"}>
              <div className="cssload-container">
                <div className="cssload-loading"><i /><i /><i /><i /></div>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default FAQ;
