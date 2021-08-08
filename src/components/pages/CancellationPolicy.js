import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';
import CancellationIntroBlock from '../sections/cancellation-policy/intro-block';
import API from '../../utils/http';
import Helmet from "react-helmet";
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
const bannerImage = require('./../../assets/img/banner/sunset.jpg');

const breadcrumbItems=[
  {
    text: 'Fishermans Cove Resort',
    link:'/',
    isActive: false,
  },
  {
    text: 'Cancellation Policy',
    link:'/cancellation-policy',
    isActive: true,
  },
]
const pageId = 46;
class CancellationPolicy extends Component {
  state = {
    pageSections: [],
      banner: null,
      intro: null,
      meta:{}
  }

  componentDidMount() {
    // const cancellationPolicyID = 46;
    // // let id = this.props.match.params.id;
    // let id = cancellationPolicyID;
    try {
      // const sectionsResonse = await API.get('/all_sections/' + id);
      // this.setState({ pageSections: sectionsResonse?.data });
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
      console.log(error)
    }
  }
  render() {
    return (
      <div className="bg-white cancellation-policy-wrapper">
          <SEOTags meta={this.state.meta} />

          {/*<Helmet>*/}
          {/*    <title>*/}
          {/*        Cancellation Policy | Fishermans Cove Resort*/}
          {/*    </title>*/}
          {/*    <meta*/}
          {/*        name="description"*/}
          {/*        content="Situated at Beau Vallon Beach, Fishermans Cove Resort is one of the best resorts in Seychelles offering countless unforgettable experiences throughout your discovery"*/}
          {/*    />*/}
          {/*</Helmet>*/}
          <PageLayout
              header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
              banner={{ title: this.state.banner?.section_name, image:  this.state.banner?.section_avatar }}
              breadCrumb={{ items: breadcrumbItems }}
          >
        {/*<Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'cancellation-policy'} />*/}
        {/*/!*====== BANNER PART START ======*!/*/}
        {/*<Mainbanner title={"Cancellation Policy"} image={bannerImage} />*/}
        {/*/!*====== BANNER PART ENDS ======*!/*/}
        {/*/!*====== BOOKING FORM START ======*!/*/}
        {/*<Bookingform />*/}
        {/*/!*====== BOOKING FORM END ======*!/*/}
        {/*/!* BREADCRUMBS START *!/*/}
        {/*<BreadCrumb items={breadcrumbItems} />*/}
        {/*/!* BREADCRUMBS END *!/*/}
        {/*/!*====== INTRO START ======*!/*/}
        <CancellationIntroBlock  data={this.state.intro}   />
        {/*====== INTRO END ======*/}

        {/*<Subscribe />*/}

        {/*<Footertwo />*/}

        {/*<BottomNavigator />*/}
          </PageLayout>
      </div>
    );
  }
}

export default CancellationPolicy;
