import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactStars from "react-rating-stars-component";

const avatar1 = require("../../../assets/img/testimonial/Philipp.jpg");
const avatar2 = require("../../../assets/img/testimonial/John_Hind.jpg");
const avatar3 = require("../../../assets/img/testimonial/Veronique.jpg");

const reviews = [
    {
        name: "Philipp",
        rating: 5,
        title: "Nice - relaxed - small",
        review: "Had to find a new hotel since the original booking did not fit - we walked in late evening and the lady at the reception made it possible: standard room price with upgrade to junior suite.",   
        image: avatar1,
        link : 'https://www.tripadvisor.com/ShowUserReviews-g482879-d302667-r743966655-Fishermans_Cove_Resort-Bel_Ombre_Mahe_Island.html'
    },{
        name: "John Hind",
        rating: 5,
        title: "PERFECT GETAWAY",
        review: "Perfect getaway resort. value for money . love the water, bar and pool.The terrace of the sunset bar was closed due to the damages , but I still spent some time at the bar.The barman was really friendly and the cocktail divine...really sorry didnt remember the name. infinity pool was amazing.It was an amazing relaxing time.",
        image: avatar2,
        link : 'https://www.tripadvisor.com/Profile/Hindd20177'
        
    }
    ,{
        name: "Veronique",
        rating: 5,
        title: "Amazing time and cocktail at the Sunset bar",
        review: "The terrace of the sunset bar was closed due to the damages caused by the cyclone, but I still spent some time at the bar.  The barman was really friendly and the cocktail divine...I sipped it at the infinity pool. It was an amazing relaxing time after the marathon I ran",
        image: avatar3,
        link : 'https://www.tripadvisor.com/Profile/Verototoo'

        
    }
]

const GuestReviews = (props) => {
    return (
        <div className="guest-reviews-wrapper pt-4 pb-3 text-center">
            <div className="trip-logo-wrapper d-inline-block mx-auto">
                <img src={require('./../../../assets/img/travellers-choice-white.png')} alt="" />
            </div>
            <h2>Guest Reviews</h2>
            <Carousel
                dynamicHeight={false}
                showStatus={false}
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={6000}
                className="guest-carousel"
                stopOnHover={false}
            >
                {
                    reviews.map(x => (
                        <div className="review-wrapper mx-auto py-3">
                            <img className="gt-img rounded-circle" src={x.image} alt={x.name} />
                            <h5 className="gt-name font-weight-bold">{x.name}</h5>
                            <ReactStars classNames="gt-rating" count={5} value={x.rating} edit={false} size={28} />
                            <h4 className="gt-title">{x.title}</h4>
                            <p className="gt-review">{x.review}</p>
                            {/* <p className="gt-date">Date of Stay: {x.stayDate}</p> */}
                            <a href={x.link} class="mt-2">Read More</a>   
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default GuestReviews;
