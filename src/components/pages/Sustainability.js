import React, { Component } from 'react'
import SustainIntroBlock from '../sections/sustainability/intro-block';
import SustainPillarsBlock from '../sections/sustainability/pillars-block';
import SustainProjectsBlock from '../sections/sustainability/projects-block';
import SustainEngeryBlock from '../sections/sustainability/energy-conservation';
import API from "../../langapi/http";
import SEOTags from "../sections/common/SEOTags";
import { constants } from '../../utils/constants';
import PageLayout from "../layouts/PageLayout";


const pageId = `629706ed0da7c94b690c6cc2`;

class Sustainability extends Component {
  state = {
    lesiureData: [],
    activities: {},
    intro: {},
    banner: null,
    meta: {}
  }

  componentDidMount() {
    const activeLang = localStorage.getItem('lang');

    API.get(`/all-sections/${pageId}/${activeLang}`).then(response => {
      this.setState({
        banner: response?.data?.data[0]?.banner,
        meta: response?.data?.data[0]?.meta,
        activities: {
          intro: response?.data?.data[0]?.intro,
          projects: response?.data?.data[0]?.projects,
          pillars: response?.data?.data[0]?.pillars,
          energy: response?.data?.data[0]?.energy,
        }
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
        text: `${constants?.site_content?.sustainbility_page?.bread_crumb?.title2[activeLang]}`,
        link: '/sustainability',
        isActive: true,
      },
    ]
    return (
      <div className="bg-white sustainability-wrapper">
        <SEOTags meta={this.state.meta} />
        {
          this.state.banner ?
            <PageLayout
              header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
              banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
              breadCrumb={{ items: breadcrumbItems }}
              activeLang={activeLang}
            >
              {/*====== INTRO START ======*/}
              <SustainIntroBlock data={this.state.activities?.intro}
                activeLang={activeLang}
              />
              {/*====== INTRO END ======*/}
              {/*====== PILLARS START ======*/}
              <SustainPillarsBlock data={this.state.activities?.pillars} />
              {/*====== PILLARS END ======*/}
              {/*====== PROJECTS SLIDER START ======*/}
              <SustainProjectsBlock data={this.state.activities?.projects} />
              {/*====== PROJECTS SLIDER END ======*/}
              <SustainEngeryBlock data={this.state.activities?.energy} />
              {/*====== PROJECTS SLIDER END ======*/}

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

export default Sustainability;
