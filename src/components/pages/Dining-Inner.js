import React, { Component } from "react";
import DiningInnerTitleBlock from "../sections/dining-inner/main-text-block";
import DiningInnerInfo from "../sections/dining-inner/dining-grid";
import OtherRecommendations from "../sections/dining-inner/dining-inner-grid-item";
import PageLayout from "../layouts/PageLayout";
// import SEOTags from "../sections/common/SEOTags";
import FAQInnerSection from "../sections/common/FAQInnerSection";
import SunsetBarBeverageMenu from '../../assets/img/dinning/FCR Wine List UPDATED.pdf';
import ParisSeychellesMainMenu from '../../assets/img/dinning/Paris Seychelles Menu Updated.pdf';
import LeCocolobaBarDrinksMenu from '../../assets/img/dinning/Le Cocoloba Bar Drinks Menu.pdf';
import LeCocolobaFoodMenu from '../../assets/img/dinning/Le Cocoloba Food Menu.pdf';
import LeCardinalBreakfastMenu from '../../assets/img/dinning/Le Cardinal Breakfast Menu.pdf';
import FCRWineListUPDATED from '../../assets/img/dinning/FCR Wine List UPDATED.pdf';
import FCRInRoomDiningMenuWITHPRICING from '../../assets/img/dinning/FCR In-Room Dining 03-24-2022.pdf';
import { constants } from "../../utils/constants";
import API from '../../langapi/http';
import { Helmet } from "react-helmet";


const menuPdf = [
  //sunset
  {
    route: "sunset-bar",
    beverageMenu: SunsetBarBeverageMenu,
    ourMainMenu: "",
    wineList: FCRWineListUPDATED,
    inRoomDining: FCRInRoomDiningMenuWITHPRICING,
  },
  {
    route: "paris-seychelles-restaurant",
    beverageMenu: "",
    ourMainMenu: ParisSeychellesMainMenu,
    wineList: FCRWineListUPDATED,
    inRoomDining: FCRInRoomDiningMenuWITHPRICING,
  },
  {
    route: "le-cocoloba-bar",
    beverageMenu: "",
    ourMainMenu: LeCocolobaFoodMenu,
    wineList: LeCocolobaBarDrinksMenu,
    inRoomDining: FCRInRoomDiningMenuWITHPRICING,
  },
  {
    route: "le-cardinal-restaurant",
    beverageMenu: "",
    ourMainMenu: LeCardinalBreakfastMenu,
    wineList: FCRWineListUPDATED,
    inRoomDining: FCRInRoomDiningMenuWITHPRICING,
  },
];

let breadcrumbItems = [
  {
    text: "Fishermans Cove Resort",
    link: "/",
    isActive: false,
  },
  {
    text: "Dining",
    link: "/fine-dining-seychelles",
    isActive: false,
  },
  {
    text: "",
    link: "/dining",
    isActive: true,
  },
];

class DiningInner extends Component {
  state = {
    singleHotel: {},
    othersData: [],
    sections: null,
    pageSections: [],
    faqsData: []
  };

  async componentDidMount() {
    let id = this.props.match.params.id;

    try {
      const activeLang = localStorage.getItem('lang');

      API.get(`/faqs?lang=${activeLang}`).then((faqresponse) => {
        this.setState({
          faqsData:
            faqresponse?.data?.data?.filter(
              (x) => x.page === "dining"
            ) || [],
        });
      });

      const response = await API.get(`/dinings/${id}?lang=${activeLang}`);
      let singleHotel = response?.data?.data;
      breadcrumbItems[breadcrumbItems.length - 2].text = constants?.site_content?.dinning_page?.bread_crumb?.title2[activeLang];
      breadcrumbItems[breadcrumbItems.length - 1].text = singleHotel.post_name;
      breadcrumbItems[breadcrumbItems.length - 1].link =
        "/dining/" + singleHotel.slug;

      this.setState({ singleHotel });

      API.get(`/dinings?lang=${activeLang}`).then((res) => {
        this.setState({
          othersData:
            res?.data?.data?.filter(
              (x) =>
                x._id !== this.state.singleHotel?._id
            ) || [],
        });
      })
    } catch (error) {
      console.log(error);
    }


  }

  async componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      let id = this.props.match.params.id;
      try {
        const activeLang = localStorage.getItem('lang');

        API.get(`/faqs?lang=${activeLang}`).then((faqresponse) => {
          this.setState({
            faqsData:
              faqresponse?.data?.data?.filter(
                (x) => x.page === "dining"
              ) || [],
          });
        });

        const response = await API.get(`/dinings/${id}?lang=${activeLang}`);
        let singleHotel = response?.data?.data;
        breadcrumbItems[breadcrumbItems.length - 2].text = constants?.site_content?.dinning_page?.bread_crumb?.title2[activeLang];
        breadcrumbItems[breadcrumbItems.length - 1].text =
          singleHotel.post_name;
        breadcrumbItems[breadcrumbItems.length - 1].link =
          "/dining/" + singleHotel.slug;

        this.setState({ singleHotel });

        API.get(`/dinings?lang=${activeLang}`).then((othersResponse) => {
          this.setState({
            othersData:
              othersResponse?.data?.data?.filter(
                (x) => x._id !== this.state.singleHotel?._id
              ) || [],
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  render() {
    const activeLang = localStorage.getItem('lang');
    return (
      <div className="bg-white dining-inner-wrapper">
        {/* <SEOTags meta={this.state.singleHotel?.meta_title} /> */}
        <Helmet>
          <title>
            {
              this.state.singleHotel?.meta_title || "Fishermans Cove Resort"
            }
          </title>
          <meta name="description" content={this.state.singleHotel?.meta_description} />

        </Helmet>
        {
          this.state.singleHotel?.banner_imgPreview ?
            <PageLayout
              header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
              banner={{
                title: this.state.singleHotel?.post_name,
                image: this.state.singleHotel?.banner_imgPreview,
              }}
              breadCrumb={{ items: breadcrumbItems }}
              key={this.state.singleHotel?.post_name}
              activeLang={activeLang}
            >
              {/*====== TITLE START ======*/}
              <DiningInnerTitleBlock
                dining={this.state.singleHotel}
              />
              {/*====== TITLE END ======*/}
              {/*====== ROOM GRID START ======*/}
              <DiningInnerInfo
                timingSection={this.state.sections?.timings}
                opening_hours={this.state.singleHotel?.section_opening_hours}
                dress_code={this.state.singleHotel?.section_dress_code}
                menuPdf={menuPdf}
                activeLang={activeLang}
              />

              {/*====== OTHERS GRID START ======*/}
              <OtherRecommendations
                title={constants?.site_content?.dinningInner_page?.other_recom?.title[activeLang]}
                data={this.state.othersData}
                activeLang={activeLang}
              />
              {/*====== OTHERS GRID END ======*/}

              <FAQInnerSection
                faqList={this.state.faqsData.filter((x) => x.innerpage == this.state.singleHotel?.slug)}
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

export default DiningInner;
