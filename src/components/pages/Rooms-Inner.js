import React, { Component } from "react";
import OtherRecommendations from "../sections/rooms-inner/dining-inner-grid-item";
import RoomsInnerTitleBlock from "../sections/rooms-inner/main-text-block";
import RoomAmenities from "../sections/rooms-inner/room-amentities";
import RoomVR360 from "../sections/rooms-inner/room-360";
import BookingFormVertical from "../sections/rooms-inner/BookingFormVertical";
import API from '../../langapi/http';
import PageLayout from "../layouts/PageLayout";
// import SEOTags from "../sections/common/SEOTags";
import { Helmet } from "react-helmet";
import FAQInnerSection from "../sections/common/FAQInnerSection";
import { constants } from "../../utils/constants";


let breadcrumbItems = [
  {
    text: "Fishermans Cove Resort",
    link: "/",
    isActive: false,
  },
  {
    text: "Rooms & Suites",
    link: "/room-suites",
    isActive: false,
  },
  {
    text: "",
    link: "/rooms",
    isActive: true,
  },
];

class RoomsInner extends Component {
  state = {
    singleRoom: {},
    meta: {},
    othersData: [],
    faqsData: []
  };

  async componentDidMount() {
    let id = this.props.match.params.id;
    try {
      //getting single post data
      const activeLang = localStorage.getItem('lang');

      API.get(`/faqs?lang=${activeLang}`).then((faqresponse) => {
        this.setState({
          faqsData:
            faqresponse?.data?.data?.filter(
              (x) => x.page === "rooms"
            ) || [],
        });
      });

      const response = await API.get(`/rooms/${id}?lang=${activeLang}`);
      //making breadcrumbs dynamic, appending into last item
      breadcrumbItems[breadcrumbItems.length - 1].text =
        response.data.data?.post_name;
      breadcrumbItems[breadcrumbItems.length - 1].link =
        "/rooms/" + response.data.data?.slug;

      let singleRoom = response.data.data;

      singleRoom.roomCode = singleRoom?.post_url?.split("room=")[1];

      this.setState({ singleRoom });

      //fetching others room data for
      API.get(`/rooms?lang=${activeLang}`).then((othersResponse) => {
        this.setState({
          othersData:
            othersResponse.data?.data?.filter(
              (x) => x._id !== this.state.singleRoom?._id
            ) || [],
        });
      });
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
                (x) => x.page === "rooms"
              ) || [],
          });
        });

        //getting single post data
        const response = await API.get(`/rooms/${id}?lang=${activeLang}`);
        //making breadcrumbs dynamic, appending into last item
        breadcrumbItems[breadcrumbItems.length - 1].text =
          response.data.data.post_name;
        breadcrumbItems[breadcrumbItems.length - 1].link =
          "/rooms/" + response.data.data.slug;

        let singleRoom = response.data.data;

        singleRoom.roomCode = singleRoom?.post_url?.split("room=")[1];

        this.setState({ singleRoom });

        //fetching others room data for
        API.get(`/rooms?lang=${activeLang}`).then((othersResponse) => {
          this.setState({
            othersData:
              othersResponse.data?.data.filter(
                (x) => x._id !== this.state.singleRoom?._id
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
      <div className="bg-white rooms-inner-wrapper">
        {/* <SEOTags meta={this.state.singleRoom?.meta_title} /> */}
        <Helmet>
          <title>
            {
              this.state.singleRoom?.meta_title || "Fishermans Cove Resort"
            }
          </title>
          <meta name="description" content={this.state.singleRoom?.meta_description} />

        </Helmet>
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{
            title: this.state.singleRoom?.post_name,
            image: this.state.singleRoom?.banner_imgPreview,
          }}
          breadCrumb={{ items: breadcrumbItems }}
          hideBooking
          key={this.state.singleRoom?.post_name}
          activeLang={activeLang}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 left-image-section">
                {/*====== TITLE START ======*/}
                <RoomsInnerTitleBlock room={this.state.singleRoom} />
                {/*====== TITLE END ======*/}
                {/*====== ROOM GRID START ======*/}
                <RoomAmenities
                  activeLang={activeLang}
                />
                {/*====== ROOM GRID END ======*/}
                {/*====== ROOM 360 GRID START ======*/}
                <RoomVR360
                  image={this.state.singleRoom?.images_list && JSON.parse(this.state.singleRoom?.images_list)?.find((x) => x["is360"] === "true")?.avatar}
                  activeLang={activeLang}
                />
                {/*====== ROOM 360 GRID END ======*/}
              </div>
              <div className="col-md-4 right-booking-section">
                <BookingFormVertical
                  roomCode={this.state.singleRoom?.roomCode}
                />
              </div>
            </div>
            {/*====== OTHERS GRID START ======*/}
            <OtherRecommendations
              title={constants?.site_content?.roomsInner_page?.other_recom?.title[activeLang]}
              data={this.state.othersData}
              activeLang={activeLang}
            />
            {/*====== OTHERS GRID END ======*/}
          </div>
          <FAQInnerSection
            faqList={this.state.faqsData.filter((x) => x.innerpage === this.state.singleRoom?.slug)}
            activeLang={activeLang}
          />
        </PageLayout>
      </div>
    );
  }
}

export default RoomsInner;
