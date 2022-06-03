import React, { Component } from 'react'
import ContactTitleBlock from '../sections/contact-us/main-text-block';
import ContactUsForm from '../sections/contact-us/contact-form';
import ContactOfferSlider from '../sections/contact-us/contact-offer-slider';
import API from '../../langapi/http';
import PageLayout from '../layouts/PageLayout';
import SEOTags from "../sections/common/SEOTags";
import { constants } from '../../utils/constants';


const pageId = `6297085cfb78da3c7314e1d2`;

class ContactUs extends Component {
  state = {
    intro: null,
    banner: null,
    meta: {}
  }

  componentDidMount() {
    try {
      const activeLang = localStorage.getItem('lang');
      API.get(`/all-sections/${pageId}/${activeLang}`).then(response => {
        this.setState({
          banner: response?.data?.data[0]?.banner,
          intro: response?.data?.data[0]?.intro,
          meta: response?.data?.data[0]?.meta
        });
      })
        .catch(err => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const activeLang = localStorage.getItem('lang');

    const breadcrumbItems = [
      {
        text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
        link: '/',
        isActive: false,
      },
      {
        text: `${constants?.site_content?.contact_page?.bread_crumb?.title2[activeLang]}`,
        link: '/contact',
        isActive: true,
      },
    ];
    const roomsData = [
      {
        title: `${constants?.site_content?.contact_page?.contact_offer?.room1[activeLang]}`,
        image: require('./../../assets/img/social/01.jpg')
      },
      {
        title: `${constants?.site_content?.contact_page?.contact_offer?.room2[activeLang]}`,
        image: require('./../../assets/img/social/02.jpg')
      },
      {
        title: `${constants?.site_content?.contact_page?.contact_offer?.room3[activeLang]}`,
        image: require('./../../assets/img/social/03.jpg')
      },
      {
        title: `${constants?.site_content?.contact_page?.contact_offer?.room3[activeLang]}`,
        image: require('./../../assets/img/social/04.jpg')
      },
      {
        title: `${constants?.site_content?.contact_page?.contact_offer?.room3[activeLang]}`,
        image: require('./../../assets/img/social/05.jpg')
      },
    ]
    return (
      <div className="bg-white">
        <SEOTags meta={this.state.meta} />
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >
          {/*====== TITLE START ======*/}
          <ContactTitleBlock data={this.state?.intro ? this.state?.intro?.section_content : null}
            activeLang={activeLang}
          />
          {/*====== TITLE END ======*/}
          {/*====== CONTACT FORM START ======*/}
          <ContactUsForm
            activeLang={activeLang}
          />
          {/*====== CONTACT FORM END ======*/}
          {/*====== ABOUT SLIDER START ======*/}
          <ContactOfferSlider data={roomsData} title={constants?.site_content?.contact_page?.contact_offer?.title[activeLang]} />
          {/*====== ABOUT SLIDER END ======*/}

        </PageLayout>
      </div>
    );
  }
}

export default ContactUs;
