import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import GalleryTitleBlock from '../sections/gallery/main-text-block';
import GalleryGrid from '../sections/gallery/gallery-grid';
import BreadCrumb from '../layouts/BreadCrumb';
import API from '../../utils/http';
import Helmet from "react-helmet";
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
const bannerImage = require('./../../assets/img/banner/sunset.jpg');


const breadcrumbItems = [
  {
    text: 'Fishermans Cove Resort',
    link: '/',
    isActive: false,
  },
  {
    text: 'Gallery',
    link: '/gallery',
    isActive: true,
  },
]
const pageId = 144;
class GalleryMain extends Component {
  state = {
    galleryData: [],
    banner: null,
    meta: {}
  }

  async componentDidMount() {
    try {
      const response = await API.get('/uploads');
      this.setState({ galleryData: response.data });

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
      console.log(error);
    }
  }

  render() {
    const activeLang = localStorage.getItem('lang');

    return (
      <div className="bg-white">
        <SEOTags meta={this.state.meta} />

        {/*<Helmet>*/}
        {/*    <title>*/}
        {/*        Gallery | Fishermans Cove Resort*/}
        {/*        /!*Best Beach Resorts in Seychelles | Fishermans Cove Resort*!/*/}
        {/*    </title>*/}
        {/*    <meta*/}
        {/*        name="description"*/}
        {/*        content="Situated at Beau Vallon Beach, Fishermans Cove Resort is one of the best resorts in Seychelles offering countless unforgettable experiences throughout your discovery"*/}
        {/*    />*/}
        {/*</Helmet>*/}
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >
          {/*<Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop} />*/}
          {/*/!*====== BANNER PART START ======*!/*/}
          {/*<Mainbanner title={"Gallery"} image={bannerImage} />*/}
          {/*/!*====== BANNER PART ENDS ======*!/*/}
          {/*/!*====== BOOKING FORM START ======*!/*/}
          {/*<Bookingform />*/}
          {/*/!*====== BOOKING FORM END ======*!/*/}
          {/*/!* BREADCRUMBS START *!/*/}
          {/*<BreadCrumb items={breadcrumbItems} />*/}
          {/* BREADCRUMBS END */}
          {/*====== TITLE START ======*/}
          <GalleryTitleBlock />
          {/*====== TITLE END ======*/}
          {/*====== GALLERY GRID START ======*/}
          <GalleryGrid title={null} data={this.state.galleryData} />
          {/*====== GALLERY GRID END ======*/}
          {/*<Subscribe />*/}

          {/*<Footertwo />*/}

          {/*<BottomNavigator />*/}
        </PageLayout>
      </div>
    );
  }
}

export default GalleryMain;
