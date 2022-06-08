import React, { Component } from 'react'
import LeisureTitleBlock from '../sections/leisure/main-text-block';
import LeisureGrid from '../sections/leisure/leisure-grid';
import LeisureAwards from '../sections/leisure/leisure-awards';
import PageLayout from "../layouts/PageLayout";
import API from "../../langapi/http";
import SEOTags from "../sections/common/SEOTags";
import { constants } from '../../utils/constants';

const pageId = `629704001b6e34298e398993`;

class Leisure extends Component {
  state = {
    activitiesData: {},
    awardData: {},
    banner: null,
    meta: {}
  }

  async componentDidMount() {
    try {
      const activeLang = localStorage.getItem('lang');

      API.get(`/all-sections/${pageId}/${activeLang}`).then(response => {
        this.setState({
          banner: response?.data?.data[0]?.banner,
          activitiesData: {
            activities: response.data?.data[0].activities,
            Fishing: response.data?.data[0].Fishing,
            Unlock: response.data?.data[0].Unlock,
            Water: response.data?.data[0].Water,
          },
          awardData: {
            awards: response.data?.data[0].awards,
            excellence: response.data?.data[0].excellence
          },
          meta: response?.data?.data[0]?.meta
        });
      })
        .catch(err => {
          console.log(err)
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
        text: `${constants?.site_content?.leisure_page?.bread_crumb?.title2[activeLang]}`,
        link: '/whats-on',
        isActive: true,
      },
    ]
    return (
      <div className="bg-white">
        <SEOTags meta={this.state.meta} />
        {
          this.state.banner ?
            <PageLayout
              header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
              banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
              breadCrumb={{ items: breadcrumbItems }}
              activeLang={activeLang}
            >
              {/*/!*====== TITLE START ======*!/*/}
              <LeisureTitleBlock
                activeLang={activeLang}
              />
              {/*====== TITLE END ======*/}
              {/*====== ROOM GRID START ======*/}
              <LeisureGrid
                actData={this.state.activitiesData}
              // data={roomsData}
              />
              {/*====== ROOM GRID END ======*/}
              {/* ===== LEISURE AWARDS START */}
              <LeisureAwards
                award={this.state.awardData}
                activeLang={activeLang}
              />
              {/* ===== LEISURE AWARDS END */}
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

export default Leisure;