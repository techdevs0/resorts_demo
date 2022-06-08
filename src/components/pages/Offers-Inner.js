import React, { Component } from 'react'
import API from '../../langapi/http';
import OffersInnerMainBlock from '../sections/offers-inner/offers-inner-block';
import Helmet from "react-helmet";
import PageLayout from "../layouts/PageLayout";

const breadcrumbItems = [
  {
    text: 'Fishermans Cove Resort',
    link: '/',
    isActive: false,
  },
  {
    text: 'Offers',
    link: '/offers',
    isActive: true,
  },
  {
    text: 'Spa for Two',
    link: '/offers-inner',
    isActive: true,
  },
]

class OffersInner extends Component {
  state = {
    offerData: [],
  };
  async componentDidMount() {
    let id = this.props.match.params.id;
    try {
      const activeLang = localStorage.getItem('lang');

      const response = await API.get(`/offers/${id}?lang=${activeLang}`);

      let offerData = response?.data?.data;
      offerData.uploads = response?.data?.data?.uploads;
      offerData.post_metas = response.data?.data?.metas;

      breadcrumbItems[breadcrumbItems.length - 1].text = offerData.post_name;
      breadcrumbItems[breadcrumbItems.length - 1].link =
        "/offer/" + offerData.route;
      this.setState({ offerData });

    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const activeLang = localStorage.getItem('lang');
    return (
      <div className="bg-white offers-inner-wrapper">
        <Helmet>
          <title>
            {
              this.state.offerData?.meta_title || "Fishermans Cove Resort"
            }
          </title>
          <meta name="description" content={this.state.offerData?.meta_description} />

        </Helmet>

        {
          this.state.offerData?.banner_imgPreview ?
            <PageLayout
              header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
              banner={{ title: this.state.offerData?.banner_text, image: this.state.offerData?.banner_imgPreview }}
              breadCrumb={{ items: breadcrumbItems }}
              activeLang={activeLang}
            >
              {/*====== INTRO START ======*/}
              <OffersInnerMainBlock offerData={this.state.offerData}
                activeLang={activeLang}
              />
              {/*====== INTRO END ======*/}
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

export default OffersInner;
