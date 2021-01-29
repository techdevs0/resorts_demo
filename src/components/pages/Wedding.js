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

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default Wedding;
