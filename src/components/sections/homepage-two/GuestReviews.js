import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactStars from "react-rating-stars-component";

const avatar1 = require("../../../assets/img/testimonial/Shefali_Vyas.jpg");
const avatar2 = require("../../../assets/img/testimonial/John_Hind.jpg");
const avatar3 = require("../../../assets/img/testimonial/Veronique.jpg");

const reviews = [
    {
        name: "Shefali Vyas",
        rating: 5,
        title: "Beautiful Views!",
        review: "We stayed in one of beach rooms and the view was absolutely unbeatable. Lush grounds and the bluest water all around. What is nice is that this hotel is quite central (so if you're looking for something completely isolated, this won't be the right fit) - allowing for you to walk around, meet with locals, and try traditional cuisines (and street food!) It is also down the road from some fancy hotels, allowing for additional food options (short walk away). If you're planning a trip to the Seychelles, I certainly recommend hiring a driver for a day so you can explore additional beaches in and around the area. So much to see",
        image: avatar1,
        
    },{
        name: "John Hind",
        rating: 5,
        title: "PERFECT GETAWAY",
        review: "Perfect getaway resort. value for money . love the water, bar and pool.The terrace of the sunset bar was closed due to the damages , but I still spent some time at the bar.The barman was really friendly and the cocktail divine...really sorry didnt remember the name. infinity pool was amazing.It was an amazing relaxing time.",
        image: avatar2,
        
    }
    ,{
        name: "Veronique",
        rating: 5,
        title: "Amazing time and cocktail at the Sunset bar",
        review: "The terrace of the sunset bar was closed due to the damages caused by the cyclone, but I still spent some time at the bar.  The barman was really friendly and the cocktail divine...I sipped it at the infinity pool. It was an amazing relaxing time after the marathon I ran",
        image: avatar3,
        
    }
]

const GuestReviews = (props) => {
    return (
        <div className="guest-reviews-wrapper py-3 text-center">
            <div className="trip-logo-wrapper d-inline-block mx-auto">
                <img src={require('./../../../assets/img/travellers-choice-white.png')} alt="" />
            </div>
            <h2>Guest Reviews</h2>
            <Carousel
                dynamicHeight={false}
                showStatus={false}
                showArrows={false}
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
                            <a href="">Read More</a>   
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default GuestReviews;