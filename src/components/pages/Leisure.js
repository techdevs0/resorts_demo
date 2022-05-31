import React, { Component } from 'react'
import LeisureTitleBlock from '../sections/leisure/main-text-block';
import LeisureGrid from '../sections/leisure/leisure-grid';
import LeisureAwards from '../sections/leisure/leisure-awards';
import PageLayout from "../layouts/PageLayout";
import API from "../../utils/http";
import SEOTags from "../sections/common/SEOTags";
import { constants } from '../../utils/constants';

const pageId = 8;

class Leisure extends Component {
  state = {
    // activitiesData: [],
    activitiesData: {},
    awardData: {},
    banner: null,
    meta: {}
  }

  async componentDidMount() {
    try {
      // const response = await API.get('/offers');
      // debugger;

      // this.setState({ premiumOffers: response.data })

      API.get(`/all_sections/${pageId}`).then(response => {
        this.setState({
          banner: response.data?.find(x => x.section_slug === "banner"),
          activitiesData: {
            activities: response.data?.find(x => x.section_slug === "activities"),
            Fishing: response.data?.find(x => x.section_slug === "Fishing"),
            Unlock: response.data?.find(x => x.section_slug === "Unlock"),
            Water: response.data?.find(x => x.section_slug === "Water"),
          },
          awardData: {
            awards: response.data?.find(x => x.section_slug === "awards"),
            excellence: response.data?.find(x => x.section_slug === "excellence")
          },
          // sections: {
          //   intro: response.data?.find(x => x.section_slug === "intro"),
          //   dine: response.data?.find(x => x.section_slug === "dine"),
          // }
        });
      })
        .then(() => {
          API.get(`/meta/${pageId}`).then(response => {
            this.setState({ meta: response.data });
            console.log(response.data);
          })
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

        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar }}
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
      </div>
    );
  }
}

export default Leisure;