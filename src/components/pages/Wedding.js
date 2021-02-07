import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import WeddingTitleBlock from '../sections/wedding-main/main-text-block';
import WeddingGrid from '../sections/wedding-main/wedding-grid';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';
import FAQSection from '../sections/common/FAQSection';

const roomsData = [
  {
    title: "Seaside Pontoon Wedding",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/wedding/seaside.jpg'),
    description: [
      "Wedding registrar and legal wedding certificate",
      "Tropical bouquet and boutonniere",
      "Basic décor of pontoon",
      "One bottle of champagne for toasting",
      "Romantic turndown in the room",
    ]
  },
  {
    title: "Barefoot Wedding",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/wedding/barefoot.jpg'),
    description: [
      "Wedding registrar and legal wedding certificate",
      "Tropical bouquet and boutonniere",
      "Basic floral arch set up",
      "One bottle champagne for toasting",
      "One tier wedding cake",
      "Romantic turndown in the room",
      "Breakfast for the couple on the private terrace or balcony the morning after the wedding",
    ]
  },
  {
    title: "Fishermans Cove Resort Special",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/wedding/special.jpg'),
    description: [
      "Wedding registrar and legal wedding certificate",
      "Tropical bouquet and boutonniere Deluxe décor",
      "One bottle of champagne for toasting",
      "One tier wedding cake",
      "Bridal hair and bridal makeup",
      "Exclusive candlelight 5-course dinner on the pontoon gazebo",
    ]
  },
  {
    title: "Renewal of your wedding vows",
    link: "",
    linkText: "View More",
    image: require('./../../assets/img/wedding/renewal.jpg'),
    description: [
      "Wedding celebrant",
      "Tropical bouquet and boutonniere",
      "Basic décor of pontoon",
      "One bottle of champagne",
      "Exclusive candlelight 5-course dinner on the pontoon gazebo",
    ]
  },
]


const faqList = [
  {
    question: 'What is the weather like for holidays in the Caribbean?',
    answer: `The Caribbean’s tropical climate brings warmth and sunshine all year round, supporting Caribbean holidays as the destination of choice for many holidaymakers. Added to this, the Caribbean Sea has an average temperature of 27 degrees. During the summer months, from May to October, the temperature heats up and the islands see the most significant rainfall, which is heavier on north-east facing coasts and mountains. This is when the Atlantic hurricane season affects the Caribbean, bringing slightly increased rainfall and stronger winds, however, major storms are very rare. In the event of a hurricane we have a hurricane policy in place.`,
    category: 'dining'
  },
  {
    question: 'What activities are there to do in the Caribbean Islands?',
    answer: `Depending on the resort you are staying at, there are a whole host of activities to take part in in the Caribbean. Elite Island Resorts have it all covered from exciting water sports to relaxing spa treatments. A range of bars and restaurants are available on all-inclusive holidays, with many resorts offering cocktail classes, so you can recreate your favourite Caribbean drinks at home.

    Complimentary water sports include windsurfing, kayaking, snorkelling, stand up paddle boarding, pedal boats and hobie cat sailing. Your resort will also be happy to arrange scuba diving, boating or fishing excursions.`,
    category:'policy'
  },
  {
    question: 'Do you provide honeymoon packages?',
    answer: `All of our resorts will make the perfect honeymoon destination, with many offering romantic packages to enjoy with your other half. Some of the honeymoon packages available offer couples massages, spa treatments, breakfast in bed and private dining options. We want to make sure that your honeymoon in the Caribbean is perfect in every way!

    To find out more about each resort and how they can make your honeymoon a dream come true, click here.`,
    category:'policy'
  },
]

const breadcrumbItems=[
  {
    text: 'Fishermans Cove Resort',
    link:'/',
    isActive: false,
  },
  {
    text: 'Weddings',
    link:'/weddings',
    isActive: true,
  },
]

class Wedding extends Component {
  render() {
    return (
      <div className="bg-white">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop}  key={'weddings'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"Weddings In Paradise"} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== TITLE START ======*/}
        <WeddingTitleBlock />
        {/*====== TITLE END ======*/}
        {/*====== ROOM GRID START ======*/}
        <WeddingGrid title={"Wedding Services"} data={roomsData} />
        {/*====== ROOM GRID END ======*/}

        <FAQSection faqList={faqList} />

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default Wedding;
