import React, { Component } from 'react'
import CancellationIntroBlock from '../sections/cancellation-policy/intro-block';
import API from '../../utils/http';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';

const pageId = 46;
class CancellationPolicy extends Component {
  state = {
    pageSections: [],
    banner: null,
    intro: null,
    meta: {}
  }

  componentDidMount() {
    // const cancellationPolicyID = 46;
    // // let id = this.props.match.params.id;
    // let id = cancellationPolicyID;
    try {
      // const sectionsResonse = await API.get('/all_sections/' + id);
      // this.setState({ pageSections: sectionsResonse?.data });
      API.get(`/all_sections/${pageId}`).then(response => {
        this.setState({
          banner: response.data?.find(x => x.section_slug === "banner"),
          intro: response.data?.find(x => x.section_slug === "intro"),
        });
      })
        .then(() => {
          API.get(`/meta/${pageId}`).then(response => {
            this.setState({ meta: response.data });
            console.log(response.data);
          })
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
        text: `${constants?.site_content?.cancellationPolicy_page?.bread_crumb?.title2[activeLang]}`,
        link: '/cancellation-policy',
        isActive: true,
      },
    ]
    return (
      <div className="bg-white cancellation-policy-wrapper">
        <SEOTags meta={this.state.meta} />
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >
          {/*/!*====== INTRO START ======*!/*/}
          <CancellationIntroBlock data={this.state.intro} />
          {/*====== INTRO END ======*/}

        </PageLayout>
      </div>
    );
  }
}

export default CancellationPolicy;
