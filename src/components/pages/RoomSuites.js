import React, { Component } from 'react'
import RoomTitleBlock from '../sections/room-suites/main-text-block';
import RoomSuiteGrid from '../sections/room-suites/room-suites-grid';
import API from '../../langapi/http';
import PageLayout from "../layouts/PageLayout";
import SEOTags from "../sections/common/SEOTags";
import { constants } from "../../utils/constants";

const pageId = `62970893199be664df7a3a32`;
class RoomSuites extends Component {
  state = {
    roomsData: [],
    suitesData: [],
    banner: null,
    intro: null,
    meta: {}
  }

  componentDidMount() {
    try {
      const activeLang = localStorage.getItem('lang');

      API.get(`/rooms?lang=${activeLang}`).then(response => {
        const roomsData = response.data?.data?.filter(x => x.room_type == 1);
        const suitesData = response.data?.data?.filter(x => x.room_type == 2);
        this.setState({ roomsData, suitesData });

      })
        .then(() => {
          API.get(`/all-sections/${pageId}/${activeLang}`).then(response => {
            this.setState({
              banner: response?.data?.data[0]?.banner,
              intro: response?.data?.data[0]?.intro,
              meta: response?.data?.data[0]?.meta
            });
          })
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
        text: `${constants?.site_content?.rooms_page?.bread_crumb?.title2[activeLang]}`,
        link: '/room-suites',
        isActive: true,
      },
    ]

    return (
      <div className="bg-white">
        <SEOTags meta={this.state.meta} />

        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >

          {/*/!*====== TITLE START ======*!/*/}
          <RoomTitleBlock data={this.state.intro} />
          {/*====== TITLE END ======*/}
          {/*====== ROOM GRID START ======*/}
          <RoomSuiteGrid title={constants?.site_content?.rooms_page?.room_grid?.title[activeLang]}
            data={this.state.roomsData}
            activeLang={activeLang}
          />
          {/*====== ROOM GRID END ======*/}
          {/*====== SUITES GRID START ======*/}
          <RoomSuiteGrid title={constants?.site_content?.rooms_page?.room_grid?.title2[activeLang]}
            data={this.state.suitesData}
            activeLang={activeLang}
          />
          {/*====== SUITES GRID END ======*/}
        </PageLayout>
      </div>
    );
  }
}

export default RoomSuites;
