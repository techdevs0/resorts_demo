import React, { useEffect, useState } from "react";

//components
import Textblock from "../sections/homepage-two/Textblock";
import RoomSlider from "../sections/homepage-two/RoomSlider";
import Experience from "../sections/homepage-two/Experience";
import GuestReviews from "../sections/homepage-two/GuestReviews";
import ServiceTabs from "../sections/homepage-two/ServicesTabs";
import API from "../../langapi/http";
import bannerimg1 from "../../assets/img/banner/home.jpg";
// import PopUp from "../popup/PopUp";
import Helmet from "react-helmet";
import PageLayout from '../layouts/PageLayout';
import { constants } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchPremiuimOffers } from '../../redux/actions/premiuimOffersActions';


const Hometwo = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  const [offerPopup, setOfferPopup] = useState(true);

  const handleShowOffer = () => {
    setOfferPopup(!offerPopup);
  }

  //Premiuim offers 

  useEffect(() => {
    const activeLang = localStorage.getItem('lang');
    if (activeLang && activeLang !== "") dispatch(fetchPremiuimOffers(activeLang));
  }, []);

  //  rooms Data

  const [roomsData, setRoomsData] = useState([]);

  const getRoomsData = () => {
    API.get(`/get_rooms_list?lang=${activeLang}`).then(response => {
      const allData = response.data?.data;
      setRoomsData(allData);
    })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getRoomsData();
  }, [activeLang]);

  const premiumOffers = useSelector((state) => state.allPremiuimOffers.premiuimoffers);

  return (
    <div>
      <Helmet>
        <title>
          Fishermans Cove Resort
        </title>
        <meta name="description" content="Fishermans Cove Resort" />

      </Helmet>

      <PageLayout
        header={{ isMobile: props.isMobile, isTop: props.isTop }}
        banner={{ title: constants?.site_content?.home_page?.banner?.title[activeLang], image: bannerimg1 }}
        // breadCrumb={{ items: breadcrumbItems }}
        activeLang={activeLang}
        key={"home"}
        isMain={true}
      >
        {/*====== ROOM SLIDER START ======*/}
        <RoomSlider data={roomsData}
          activeLang={activeLang}
        />

        {/*====== ROOM SLIDER END ======*/}
        {/*====== TEXT BLOCK START ======*/}
        <Textblock
          activeLang={activeLang}
        />
        {/*====== TEXT BLOCK END ======*/}
        {/*====== SERVICES TABS START ======*/}
        <ServiceTabs data={premiumOffers}
          activeLang={activeLang}
        />
        {/*====== SERVICES TABS END ======*/}
        {/*====== TESTIMONIAL SLIDER START ======*/}
        <GuestReviews
          activeLang={activeLang}
        />
        {/*====== EXPERIENCE START ======*/}
        <Experience
          activeLang={activeLang}
        />
        {/*====== POP Up ======*/}
        {/* <PopUp show={offerPopup} onHide={handleShowOffer}
          activeLang={activeLang}
        /> */}
      </PageLayout>
    </div>
  );
}

export default Hometwo;
