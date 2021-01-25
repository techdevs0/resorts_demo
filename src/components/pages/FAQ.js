import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import BottomNavigator from '../sections/homepage-two/BottomNavigator';
import Subscribe from '../sections/common/Subscribe';
import BreadCrumb from '../layouts/BreadCrumb';
import FAQIntroBlock from '../sections/faq/intro-block';

const breadcrumbItems = [
  {
    text: 'Fishermans Cove',
    link: '/',
    isActive: false,
  },
  {
    text: 'F.A.Q',
    link: '/faq',
    isActive: true,
  },
]

const faqList = [
  {
    question: 'What is the weather like for holidays in the Caribbean?',
    answer: `The Caribbean’s tropical climate brings warmth and sunshine all year round, supporting Caribbean holidays as the destination of choice for many holidaymakers. Added to this, the Caribbean Sea has an average temperature of 27 degrees. During the summer months, from May to October, the temperature heats up and the islands see the most significant rainfall, which is heavier on north-east facing coasts and mountains. This is when the Atlantic hurricane season affects the Caribbean, bringing slightly increased rainfall and stronger winds, however, major storms are very rare. In the event of a hurricane we have a hurricane policy in place.`
  },
  {
    question: 'When is the best time to go to The Caribbean?',
    answer: `Winter is a popular time to visit the Caribbean, between the months of November and April, as the average temperature is still hitting 26 degrees and rainfall is very minimal.

    For higher temperatures and less crowds, the summer is the best time to visit as it’s outside of the peak travel times, so you can enjoy a quieter holiday. Winter months are busier in the Caribbean and best if you prefer to avoid rainfall and winds, but still want to enjoy tropical temperatures.`
  },
  {
    question: 'What should I pack for luxury Caribbean Island holidays?',
    answer: `Packing for a Caribbean Island holiday is similar to packing for any other tropical holiday, from sun protection, swimwear and clothing, you will need all of the usual essentials. Firstly, you need to ensure you have all of the correct travel documents, such as a valid passport, tickets and/or boarding passes.
    Sun protection and lip balm with an SPF are essential, alongside after sun and bug spray to keep away those pesky bug bites. As well as the obvious sun protection products, a hat and a pair of sunglasses will also help keep the sun from your face.`
  },
]

class FAQ extends Component {
  render() {
    return (
      <div className="bg-white faq-wrapper">
        <Headertwo isMobile={this.props.isMobile} isTop={this.props.isTop} key={'faq'} />
        {/*====== BANNER PART START ======*/}
        <Mainbanner title={"F.A.Q"} />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform />
        {/*====== BOOKING FORM END ======*/}
        {/* BREADCRUMBS START */}
        <BreadCrumb items={breadcrumbItems} />
        {/* BREADCRUMBS END */}
        {/*====== INTRO START ======*/}
        <FAQIntroBlock />
        {/*====== INTRO END ======*/}

        <Subscribe />

        <Footertwo />

        <BottomNavigator />
      </div>
    );
  }
}

export default FAQ;
