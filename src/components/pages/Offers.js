import React, { Component } from "react";
import OfferTitleBlock from "../sections/offers/main-text-block";
import OfferGrid from "../sections/offers/offer-grid";
import API from "../../langapi/http";
import SEOTags from "../sections/common/SEOTags";
import { constants } from "../../utils/constants";
import PageLayout from '../layouts/PageLayout';

const pageId = '629a08d1316b8e36e6367322';

class Offers extends Component {
  state = {
    offers: [],
    banner: null,
    meta: {}
  };
  async componentDidMount() {
    try {
      const activeLang = localStorage.getItem('lang');
      const response = await API.get(`/get_offers?lang=${activeLang}`);
      this.setState({ offers: response.data?.data?.filter((x) => x.is_premium === 0) || [] });
      API.get(`/all-sections/${pageId}/${activeLang}`).then(response => {
        this.setState({
          banner: response?.data?.data[0]?.banner,
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
        link: "/",
        isActive: false,
      },
      {
        text: `${constants?.site_content?.offers_page?.bread_crumb?.title2[activeLang]}`,
        link: "/offers",
        isActive: true,
      },
    ];
    return (
      <div className="bg-white">
        <SEOTags meta={this.state.meta} />
        {
          this.state.offers.length > 0 ?
            <PageLayout
              header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
              banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
              breadCrumb={{ items: breadcrumbItems }}
              activeLang={activeLang}
            >
              {/*====== TITLE START ======*/}
              <OfferTitleBlock
                title={this.state.banner?.section_name}
              />
              {/*====== TITLE END ======*/}
              {/*====== ROOM GRID START ======*/}
              <OfferGrid title={null} data={this.state.offers} />
              {/*====== ROOM GRID END ======*/}
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

export default Offers;
