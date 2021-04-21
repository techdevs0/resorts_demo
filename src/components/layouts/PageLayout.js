import React from 'react'
import Subscribe from '../sections/common/Subscribe'
import Banner from '../sections/homepage-two/Banner'
import Bookingform from '../sections/homepage-two/Bookingform'
import BottomNavigator from '../sections/homepage-two/BottomNavigator'
import BreadCrumb from './BreadCrumb'
import Footertwo from './Footertwo'
import Headertwo from './Headertwo'

export default function PageLayout(props) {
    const { header, banner, hideBooking, bookingForm, breadCrumb } = props;
    return (
        <div key={props.key}>
            <Headertwo {...header} key={props.key} />
            <Banner {...banner} />
            {!hideBooking &&
                <Bookingform />
            }
            <BreadCrumb {...breadCrumb} />
            {
                props.children
            }
            <Subscribe />
            <Footertwo />
            <BottomNavigator />
        </div>
    )
}
