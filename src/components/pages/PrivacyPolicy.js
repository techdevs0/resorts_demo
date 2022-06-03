import React, { Component } from 'react'
import PrivacyIntroBlock from '../sections/privacy-policy/intro-block';
import API from '../../langapi/http';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';
import CircularProgress from '@material-ui/core/CircularProgress';



const pageId = `629707cc98454867af5ac8d2`;

class PrivacyPolicy extends Component {

  state = {
    intro: null,
    banner: null,
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
        text: `${constants?.site_content?.privacyPolicy_page?.bread_crumb?.title2[activeLang]}`,
        link: '/privacy-policy',
        isActive: true,
      },
    ]
    return (
      <div className="bg-white privacy-policy-wrapper">
        <SEOTags meta={this.state.meta} />

        {
          this.state.banner ?
            <PageLayout
              header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
              banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
              breadCrumb={{ items: breadcrumbItems }}
              activeLang={activeLang}
            >

              {/*/!*====== INTRO START ======*!/*/}
              <PrivacyIntroBlock data={this.state.intro} />

            </PageLayout>
            :
            <div className='loadingDiv' style={{ display: 'flex', justifyContent: 'center', paddingTop: '40vh', paddingBottom: '50px', height: '100vh !important' }}>
              <CircularProgress style={{ color: "#183254" }} disableShrink />
            </div>

        }

      </div>
    );
  }
}

export default PrivacyPolicy;
