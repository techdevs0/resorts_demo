import React, { Component } from "react";
import OfferTitleBlock from "../sections/offers/main-text-block";
import OfferGrid from "../sections/offers/offer-grid";
import API from "../../langapi/http";
import Helmet from "react-helmet";
import { constants } from "../../utils/constants";
import PageLayout from '../layouts/PageLayout';

const bannerImage = require("./../../assets/img/offers/stay.jpg");


class Offers extends Component {
  state = {
    offers: [],
  };
  async componentDidMount() {
    try {
      const activeLang = localStorage.getItem('lang');

      const response = await API.get(`/offers?lang=${activeLang}`);
      // debugger;
      this.setState({ offers: response.data?.data?.filter((x) => x.is_premium === 0) || [] });
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
        {/* <SEOTags meta={this.state.meta} /> */}
        <Helmet>
          <title>
            {constants?.site_content?.offers_page?.bread_crumb?.title2[activeLang]}
          </title>
          <meta
            name="description"
            content="Fishermans Cove Resort is a veritable paradise that offers countless amazing experiences throughout the journey with some of the best resort deals in Seychelles."
          />
        </Helmet>
        {
          this.state.offers.length > 0 ?
            <PageLayout
              header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
              banner={{ title: `${constants?.site_content?.offers_page?.bread_crumb?.title2[activeLang]}`, image: bannerImage }}
              breadCrumb={{ items: breadcrumbItems }}
              activeLang={activeLang}
            >
              {/*====== TITLE START ======*/}
              <OfferTitleBlock
                activeLang={activeLang}
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
