import React, { Component } from 'react'
import AboutTitleBlock from '../sections/about-us/main-text-block';
import AboutServices from '../sections/about-us/about-services';
import AboutSecondaryTextBlock from '../sections/about-us/secondary-text-block';
import AboutOfferSlider from '../sections/about-us/about-offer-slider';
import API from '../../langapi/http';
import PageLayout from '../layouts/PageLayout';
import SEOTags from "../sections/common/SEOTags";
import { constants } from "../../utils/constants";
import { connect } from "react-redux";

const pageId = `6297070d0da7c94b690c6cc3`;

class AboutUs extends Component {
  state = {
    premiumOffers: [],
    sections: null,
    banner: null,
    meta: {}
  }

  async componentDidMount(prevState) {
    try {

      const activeLang = localStorage.getItem('lang');

      const { premiuimoffers } = this.props;

      const premiumOffersData = await premiuimoffers;

      if (premiumOffersData && premiumOffersData.length > 0) {
        this.setState({ premiumOffers: premiumOffersData })
      }

      // API.get(`/get_premium_offers?lang=${activeLang}`).then(response => {
      //   this.setState({ premiumOffers: response.data?.data })
      // })
      //   .then(() => {
      const sectionResponse = await API.get(`/all-sections/${pageId}/${activeLang}`)
      //  .then(response => {
      this.setState({
        banner: sectionResponse?.data?.data[0]?.banner,
        sections: sectionResponse?.data?.data[0],
        meta: sectionResponse?.data?.data[0]?.meta
      });
      // })
      // })
    }
    catch (error) {
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
        text: `${constants?.site_content?.about_page?.bread_crumb?.title2[activeLang]}`,
        link: '/about-us',
        isActive: true,
      },
    ];

    return (
      <div className="bg-white about-us-wrapper">
        <SEOTags meta={this.state.meta} />
        {
          this.state.banner ?
            <PageLayout
              header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
              banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
              breadCrumb={{ items: breadcrumbItems }}
              activeLang={activeLang}
            >
              <AboutTitleBlock data={this.state.sections?.intro}
              />
              {/*====== TITLE END ======*/}

              {/*====== SERVICES START ======*/}
              <AboutServices
                activeLang={activeLang}
              />
              {/*====== SERVICES END ======*/}
              {/*====== SECONDARY START ======*/}
              <AboutSecondaryTextBlock data={this.state.sections?.dine}
                activeLang={activeLang}
              />
              {/*====== SECONDARY END ======*/}
              {/*====== ABOUT SLIDER START ======*/}
              <AboutOfferSlider data={this.state.premiumOffers} title={constants?.site_content?.about_page?.about_offer?.title[activeLang]}
                activeLang={activeLang}
              />

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

const mapStateToProps = (state) => {
  return {
    premiuimoffers: state.allPremiuimOffers.premiuimoffers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
// export default AboutUs;