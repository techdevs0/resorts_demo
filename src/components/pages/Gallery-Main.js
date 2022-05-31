import React, { Component } from 'react'
import GalleryTitleBlock from '../sections/gallery/main-text-block';
import GalleryGrid from '../sections/gallery/gallery-grid';
import API from '../../utils/http';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from "../../utils/constants";


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
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar }}
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
