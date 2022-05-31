import React, { Component } from 'react'
import CovidIntroBlock from '../sections/covid-policy/intro-block';
import API from '../../utils/http';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';


const pageId = 45;
class CovidPolicy extends Component {
  state = {
    pageSections: [],
    banner: null,
    intro: null,
    meta: {}
  }

  async componentDidMount() {
    // const covidPolicyID = 45;
    // // let id = this.props.match.params.id;
    // let id = covidPolicyID;
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
        text: `${constants?.site_content?.covidPolicy_page?.bread_crumb?.title2[activeLang]}`,
        link: '/covid-policy',
        isActive: true,
      },
    ]
    return (
      <div className="bg-white covid-policy-wrapper">
        <SEOTags meta={this.state.meta} />
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >
          {/*====== INTRO START ======*/}
          <CovidIntroBlock data={this.state.intro} />
          {/*====== INTRO END ======*/}

        </PageLayout>
      </div>
    );
  }
}

export default CovidPolicy;
