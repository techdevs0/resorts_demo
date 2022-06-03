import React, { Component } from 'react'
import GalleryTitleBlock from '../sections/gallery/main-text-block';
import GalleryGrid from '../sections/gallery/gallery-grid';
import API from '../../utils/http';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from "../../utils/constants";
import LangAPI from '../../langapi/http';

const pageId = `6297121cc333da05c64f27d2`;
class GalleryMain extends Component {
  state = {
    galleryData: [],
    banner: null,
    meta: {}
  }

  async componentDidMount() {
    try {
      const activeLang = localStorage.getItem('lang');

      const response = await API.get('/uploads');
      this.setState({ galleryData: response.data });

      LangAPI.get(`/all-sections/${pageId}/${activeLang}`).then(response => {
        this.setState({
          banner: response?.data?.data[0]?.banner,
          galleryData: response?.data?.data[0]?.imageGallery,
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
        text: `${constants?.site_content?.gallery_page?.bread_crumb?.title2[activeLang]}`,
        link: '/gallery',
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
          {/*====== TITLE START ======*/}
          <GalleryTitleBlock
            activeLang={activeLang}
          />
          {/*====== TITLE END ======*/}
          {/*====== GALLERY GRID START ======*/}
          <GalleryGrid title={null} data={this.state.galleryData} />
          {/*====== GALLERY GRID END ======*/}
        </PageLayout>
      </div>
    );
  }
}

export default GalleryMain;
