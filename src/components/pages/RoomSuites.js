import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import RoomTitleBlock from '../sections/room-suites/main-text-block';
import RoomSuiteGrid from '../sections/room-suites/room-suites-grid';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';
import API from '../../utils/http';
import Helmet from "react-helmet";
import PageLayout from "../layouts/PageLayout";
import SEOTags from "../sections/common/SEOTags";

const bannerImage = require('./../../assets/img/banner/rooms.jpg');



const breadcrumbItems = [
  {
    text: 'Fishermans Cove Resort',
    link: '/',
    isActive: false,
  },
  {
    text: 'Rooms & Suites',
    link: '/room-suites',
    isActive: true,
  },
]
const pageId =79;
class RoomSuites extends Component {
  state = {
    roomsData: [],
    suitesData: [],
      banner:null,
      intro:null,
      meta:{}
  }

  componentDidMount() {
    try {
      API.get('/rooms').then(response=>{
        const roomsData = response.data.filter(x=> x.room_type==1);
        const suitesData = response.data.filter(x=> x.room_type==2);
          // console.log(response.data);
          this.setState({ roomsData, suitesData });

      })
          .then(() => {
              API.get(`/all_sections/${pageId}`).then(response => {
                  this.setState({
                      banner: response.data?.find(x => x.section_slug === "banner"),
                          intro: response.data?.find(x => x.section_slug === "intro"),
                  });
              })
          })
          .then(() => {
              API.get(`/meta/${pageId}`).then(response => {
                  this.setState({ meta: response.data });
                  console.log(response.data);
              })
          })
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="bg-white">
          <SEOTags meta={this.state.meta} />

          {/*<Helmet>*/}
          {/*    <title>Best Rooms &amp; Suites in Seychelles at Fishermans Cove Resort</title>*/}
          {/*    <meta*/}
          {/*        name="description"*/}
          {/*        content="These are among the best hotel rooms and suites in Mahe, Seychelles providing guests with an amazing facilities and a view of the ocean at their doorsteps."*/}
          {/*    />*/}
          {/*</Helmet>*/}
          <PageLayout
              header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
              banner={{ title: this.state.banner?.section_name, image:  this.state.banner?.section_avatar }}
              breadCrumb={{ items: breadcrumbItems }}
          >
        {/*<Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop} key={'room-suites'} />*/}
        {/*/!*====== BANNER PART START ======*!/*/}
        {/*<Mainbanner title={"Inherited Paradise"} image={bannerImage} />*/}
        {/*/!*====== BANNER PART ENDS ======*!/*/}
        {/*/!*====== BOOKING FORM START ======*!/*/}
        {/*<Bookingform />*/}
        {/*/!*====== BOOKING FORM END ======*!/*/}
        {/*/!* BREADCRUMBS START *!/*/}
        {/*<BreadCrumb items={breadcrumbItems} />*/}
        {/*/!* BREADCRUMBS END *!/*/}
        {/*/!*====== TITLE START ======*!/*/}
        <RoomTitleBlock data={this.state.intro}/>
        {/*====== TITLE END ======*/}
        {/*====== ROOM GRID START ======*/}
        <RoomSuiteGrid title={"Rooms"} data={this.state.roomsData} />
        {/*====== ROOM GRID END ======*/}
        {/*====== SUITES GRID START ======*/}
        <RoomSuiteGrid title={"Suites"} data={this.state.suitesData} />
        {/*====== SUITES GRID END ======*/}

        {/*<Subscribe />*/}

        {/*<Footertwo />*/}

        {/*<BottomNavigator />*/}
          </PageLayout>
      </div>
    );
  }
}

export default RoomSuites;
