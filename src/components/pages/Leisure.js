import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import LeisureTitleBlock from '../sections/leisure/main-text-block';
import LeisureGrid from '../sections/leisure/leisure-grid';
import LeisureAwards from '../sections/leisure/leisure-awards';
import BreadCrumb from '../layouts/BreadCrumb';
import PageLayout from "../layouts/PageLayout";
import API from "../../utils/http";
import Helmet from "react-helmet";

const bannerImage = require('./../../assets/img/banner/Leisure-banner.jpg');

const roomsData = [
  {
    title: "Diving In Seychelles",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/leisure/divin.jpg')
  },
  {
    title: "Fishing In Seychelles",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/leisure/fishing.jpg')
  },
  {
    title: "Unlock the Sea",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/leisure/unlock-sea.jpg')
  },
  {
    title: "Water Activities",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/leisure/water.jpg')
  },
]

const breadcrumbItems=[
  {
    text: 'Fishermans Cove Resort',
    link:'/',
    isActive: false,
  },
  {
    text: 'Leisure Activities',
    link:'/whats-on',
    isActive: true,
  },
]

const pageId = 8;

class Leisure extends Component {
  state = {
    // activitiesData: [],
    activitiesData: {},
    awardData:{},
    banner: null,
  }

  async componentDidMount() {
    try {
      // const response = await API.get('/offers');
      // debugger;

      // this.setState({ premiumOffers: response.data })

      API.get(`/all_sections/${pageId}`).then(response => {
        this.setState({
          banner: response.data?.find(x => x.section_slug === "banner"),
          activitiesData: {
            activities: response.data?.find(x => x.section_slug === "activities"),
            Fishing: response.data?.find(x => x.section_slug === "Fishing"),
            Unlock: response.data?.find(x => x.section_slug === "Unlock"),
            Water: response.data?.find(x => x.section_slug === "Water"),
          },
          awardData: {
            awards: response.data?.find(x => x.section_slug === "awards"),
            excellence: response.data?.find(x => x.section_slug === "excellence")
          },
          // sections: {
          //   intro: response.data?.find(x => x.section_slug === "intro"),
          //   dine: response.data?.find(x => x.section_slug === "dine"),
          // }
        });
      })
          // .then(() => {
          //   API.get(`/all_sections/${pageId}`).then(response => {

          //     this.setState({
          //       intro: response.data?.find(x => x.section_slug === "intro"),
          //       banner: response.data?.find(x => x.section_slug === "banner"),
          //     });
          //   })
          // })
          .catch(err => {
            console.log(err)
          })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div className="bg-white">
        <Helmet>
          <title>
            Leisure Activities | Fishermans Cove Resort
            {/*Best Beach Resorts in Seychelles | Fishermans Cove Resort*/}
          </title>
          <meta
              name="description"
              content="Situated at Beau Vallon Beach, Fishermans Cove Resort is one of the best resorts in Seychelles offering countless unforgettable experiences throughout your discovery"
          />
        </Helmet>
        <PageLayout
            header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
            banner={{ title: this.state.banner?.section_name, image:  this.state.banner?.section_avatar }}
            breadCrumb={{ items: breadcrumbItems }}
        >
        {/*<Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'leisure'} />*/}
        {/*/!*====== BANNER PART START ======*!/*/}
        {/*<Mainbanner title={"Leisure Activities"} image={bannerImage} />*/}
        {/*/!*====== BANNER PART ENDS ======*!/*/}
        {/*/!*====== BOOKING FORM START ======*!/*/}
        {/*<Bookingform />*/}
        {/*/!*====== BOOKING FORM END ======*!/*/}
        {/*/!*====== BANNER PART ENDS ======*!/*/}
        {/*/!* BREADCRUMBS START *!/*/}
        {/*<BreadCrumb items={breadcrumbItems} />*/}
        {/*/!* BREADCRUMBS END *!/*/}
        {/*/!*====== TITLE START ======*!/*/}
        <LeisureTitleBlock />
        {/*====== TITLE END ======*/}
        {/*====== ROOM GRID START ======*/}
        <LeisureGrid
                     actData={this.state.activitiesData}
            // data={roomsData}
        />
        {/*====== ROOM GRID END ======*/}
        {/* ===== LEISURE AWARDS START */}
        <LeisureAwards
            award={this.state.awardData}
        />
        {/* ===== LEISURE AWARDS END */}
        {/*<Subscribe />*/}

        {/*<Footertwo />*/}

        {/*<BottomNavigator />*/}
        </PageLayout>
      </div>
    );
  }
}

export default Leisure;