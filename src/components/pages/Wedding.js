import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import WeddingTitleBlock from '../sections/wedding-main/main-text-block';
import WeddingGrid from '../sections/wedding-main/wedding-grid';
import WeddingFormDialog from '../sections/wedding-main/quote-form';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';
import FAQSection from '../sections/common/FAQSection';
import API from '../../utils/http';
import SEOTags from '../sections/common/SEOTags';
import PageLayout from '../layouts/PageLayout';

const bannerImage = require('./../../assets/img/banner/wedding-banner.jpg');

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
    question: 'How much does a wedding for 150 guests in Seychelles cost?',
    answer: `Depending on how much you plan to spend, a wedding in Seychelles will cost somewhere between $1200 to $10000. Seychelles is home to some of the best wedding resort venues.`,
    category: 'dining'
  },
  {
    question: 'Can foreigners get married in Seychelles?',
    answer: `Yes, foreigners can get married in Seychelles. The documents need to be submitted 30 days prior to the wedding for verification. It is not necessary for the couple to be present for verification, it can be arranged beforehand. All the documents must be in English or french. If any of the documents are not in English or French they will have to be translated into either language. These documents will then have to be stamped and signed by a solicitor stating that it is the true translation of the original.`,
    category: 'policy'
  },
  {
    question: 'Can you get married in Seychelles?',
    answer: `Yes, you can. Seychelles has numerous luxury wedding venues. Couples marrying in Seychelles must have a valid passport and birth certificate. ... Ceremonies are conducted by the Registrar per Seychelles Law. The date selected is subject to the Registrar's availability and the ceremony can be arranged Monday - Friday. Additional cost will be incurred if you plan to organize the wedding ceremony over the weekend or public holidays depending on the availability.`,
    category: 'policy'
  },

  {
    question: 'Do the hotels have the facility to organize Couple Weddings? ',
    answer: `Yes, hotels and resorts in Seychelles have the facility to organize couple weddings and the prices start from 850 Euros depending on the venue.`,
    category: 'policy'
  },
]

const breadcrumbItems = [
  {
    text: 'Fishermans Cove Resort',
    link: '/',
    isActive: false,
  },
  {
    text: 'Weddings',
    link: '/seychelles-wedding-resort',
    isActive: true,
  },
]

const pageId = 10;

class Wedding extends Component {
  state = {
    weddingData: [],
    intro: {},
    banner: null,
    faq: [],
    meta: {}
  }


  componentDidMount() {

    API.get('/wedding').then(response => {
      this.setState({ weddingData: response.data?.filter(x => x.post_type !== "page") });
    })
      .then(() => {
        API.get(`/meta/${pageId}`).then(response => {
          this.setState({ meta: response.data });
          console.log(response.data);
        })
      })
      .then(() => {
        API.get(`/all_sections/${pageId}`).then(response => {
          let faqRes = response?.data[4]?.section_content;
          faqRes = faqRes.replace(/'/g, '"')
          faqRes = JSON.parse(faqRes)
          console.log("response", faqRes)
          this.setState({
            intro: response.data?.find(x => x.section_slug === "intro"),
            banner: response.data?.find(x => x.section_slug === "banner"),
            faq: faqRes
          });
        })
      })
      .catch(err => {
        console.log(err)
      })

  }

  render() {
    // console.log("wedding response",this.state)
    const activeLang = localStorage.getItem('lang');
    return (
      <div className="bg-white">
        <SEOTags meta={this.state.meta} />

        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >
          {/* <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop} /> */}
          {/*====== BANNER PART START ======*/}
          {/* <Mainbanner title={this.state.intro?.post_name || "Weddings In Paradise"} image={bannerImage} /> */}
          {/*====== BANNER PART ENDS ======*/}
          {/*====== BOOKING FORM START ======*/}
          {/* <Bookingform /> */}
          {/*====== BOOKING FORM END ======*/}
          {/* BREADCRUMBS START */}
          {/* <BreadCrumb items={breadcrumbItems} /> */}
          {/* BREADCRUMBS END */}
          {/*====== TITLE START ======*/}
          <WeddingTitleBlock intro={this.state.intro} />
          {/*====== TITLE END ======*/}
          {/*====== ROOM GRID START ======*/}
          <WeddingGrid title={"Wedding Services"} data={this.state.weddingData} />
          {/*====== ROOM GRID END ======*/}
          {/* <div>
          <button onClick={()=> this.setState({showWedForm: true})} className="btn main-btn btn-eden">
            Book Now
        </button>
        </div> */}
          <WeddingFormDialog />

          <FAQSection
            //faqData={this.state.faq}
            faqData={faqList}
          />

          {/* <Subscribe /> */}

          {/* <Footertwo /> */}

          {/* <BottomNavigator /> */}
        </PageLayout>
      </div>
    );
  }
}

export default Wedding;
