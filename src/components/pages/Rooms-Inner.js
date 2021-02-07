import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import OtherRecommendations from '../sections/rooms-inner/dining-inner-grid-item';
import Subscribe from '../sections/common/Subscribe';
import RoomsInnerTitleBlock from '../sections/rooms-inner/main-text-block';
import RoomAmenities from '../sections/rooms-inner/room-amentities';
import RoomVR360 from '../sections/rooms-inner/room-360';
import BookingFormVertical from '../sections/rooms-inner/BookingFormVertical';
import BreadCrumb from '../layouts/BreadCrumb';
import API from '../../utils/http';
import FAQSection from '../sections/common/FAQSection';

const roomsData = [
  {
    title: "Paris Sychelles Restaurant",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/junior.jpg')
  },
  {
    title: "Lecardinal Restaurant",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/partial.jpg')
  },
  {
    title: "Superior Rooms",
    link: "",
    linkText: "View More",
    description: "Guests can hide themseleves away in these comfortable rooms located in the middle of a main buillding set to the rear of hotel.",
    image: require('./../../assets/img/room-suites/deluxe.jpg')
  },
]

const faqList = [
  {
    question: 'How much does a wedding for 150 guests in Seychelles cost?',
    answer: `Depending on how much you plan to spend, a wedding in Seychelles will cost somewhere between $1200 to $10000. Seychelles is home to some of the best wedding resort venues.`,
    category: 'dining',
    id: 1,
  },
  {
    question: 'Can foreigners get married in Seychelles?',
    answer: `Yes, foreigners can get married in Seychelles. The documents need to be submitted 30 days prior to the wedding for verification. It is not necessary for the couple to be present for verification, it can be arranged beforehand. All the documents must be in English or french. If any of the documents are not in English or French they will have to be translated into either language. These documents will then have to be stamped and signed by a solicitor stating that it is the true translation of the original.`,
    category: 'policy',
    id: 7,
  },
  {
    question: 'Can you get married in Seychelles?',
    answer: `Yes, you can. Seychelles has numerous luxury wedding venues. Couples marrying in Seychelles must have a valid passport and birth certificate. ... Ceremonies are conducted by the Registrar per Seychelles Law. The date selected is subject to the Registrar's availability and the ceremony can be arranged Monday - Friday. Additional cost will be incurred if you plan to organize the wedding ceremony over the weekend or public holidays depending on the availability.`,
    category: 'policy',
    id: 2,
  },
  {
    question: 'Do the hotels have the facility to organize Couple Weddings? ',
    answer: `Yes, hotels and resorts in Seychelles have the facility to organize couple weddings and the prices start from 850 Euros depending on the venue.`,
    category: 'policy',
    id: 3,
  },
  {
    question: 'Do the hotels have the facility to organize Couple Weddings? ',
    answer: `Yes, hotels and resorts in Seychelles have the facility to organize couple weddings and the prices start from 850 Euros depending on the venue.`,
    category: 'policy',
    id: 19,
  },
  {
    question: 'Do the hotels have the facility to organize Couple Weddings? ',
    answer: `Yes, hotels and resorts in Seychelles have the facility to organize couple weddings and the prices start from 850 Euros depending on the venue.`,
    category: 'policy',
    id: 20,
  },
  {
    question: 'Do the hotels have the facility to organize Couple Weddings? ',
    answer: `Yes, hotels and resorts in Seychelles have the facility to organize couple weddings and the prices start from 850 Euros depending on the venue.`,
    category: 'policy',
    id: 21,
  },
]

let breadcrumbItems=[
  {
    text: 'Fishermans Cove Resort',
    link:'/',
    isActive: false,
  },
  {
    text: 'Rooms & Suites',
    link:'/room-suites',
    isActive: false,
  },
  {
    text: '',
    link:'/rooms-inner',
    isActive: true,
  },
]

class RoomsInner extends Component {
  state = {
    singleRoom: {},
    othersData:[]
  }

  async componentDidMount() {
    let id = this.props.match.params.id;
    try {
      //getting single post data
      const response = await API.get('/rooms/'+id);

      //making breadcrumbs dynamic, appending into last item
      breadcrumbItems[breadcrumbItems.length -1].text=response.data.post_name;
      breadcrumbItems[breadcrumbItems.length -1].link='/rooms-inner/'+response.data.id;

      let singleRoom = response.data;

      //getting and appending images to single room data
      const imagesResponse = await API.get('/post_uploads/'+id);
      singleRoom.images = imagesResponse.data.filter(x=>x["360_view"]=="");
      singleRoom.images360 = imagesResponse.data.filter(x=>x["360_view"]=="1");
      this.setState({ singleRoom });
      
      //fetching others room data for
      API.get('/rooms').then(othersResponse => {
        this.setState({ othersData: othersResponse.data.filter(x => x.id !== this.state.singleRoom?.id) || [] });
      });
    } catch (error) {
      console.log(error);
    }
  }
 
  render() {
    return (
      <div className="bg-white rooms-inner-wrapper">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'rooms-inner'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={this.state.singleRoom?.post_name} />
        {/*====== BANNER PART ENDS ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {/*====== TITLE START ======*/}
              <RoomsInnerTitleBlock room={this.state.singleRoom} />
              {/*====== TITLE END ======*/}
              {/*====== ROOM GRID START ======*/}
              <RoomAmenities />
              {/*====== ROOM GRID END ======*/}
              {/*====== ROOM 360 GRID START ======*/}
              <RoomVR360 image={this.state.singleRoom?.images360?.[0]?.avatar} />
              {/*====== ROOM 360 GRID END ======*/}
            </div>
            <div className="col-md-4">
              <BookingFormVertical />
            </div>
          </div>
          {/*====== OTHERS GRID START ======*/}
          <OtherRecommendations title={"Other Rooms & Suites"} data={this.state.othersData} />
          {/*====== OTHERS GRID END ======*/}
        </div>
        <FAQSection faqList={faqList.filter(x=> x.id === this.state.singleRoom?.id)} />
        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default RoomsInner;
