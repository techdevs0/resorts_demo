import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactStars from "react-rating-stars-component";

const avatar1 = require("../../../assets/img/testimonial/01.png");

const reviews = [
    {
        name: "ChiChi",
        rating: 5,
        title: "Welcome to Paradise",
        review: "If Monet were to paint water lilies at night then no better place than to paint from the terrace of H Resort's Trader Vics with a background of birds singing their hearts out.",
        image: avatar1,
        stayDate: new Date().toLocaleDateString()
    }
]

const GuestReviews = (props) => {
    return (
        <div className="guest-reviews-wrapper p-5 text-center">
            <h2>Guest Reviews</h2>
            <Carousel
                dynamicHeight={false}
                showStatus={false}
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={false}
                className="guest-carousel"
            >
                {
                    reviews.map(x => (
                        <div className="review-wrapper w-50 mx-auto py-5">
                            <img className="gt-img rounded-circle" src={x.image} alt={x.name} />
                            <h4 className="gt-name font-weight-bold">{x.name}</h4>
                            <ReactStars classNames="gt-rating" count={5} value={x.rating} edit={false} size={30} />
                            <h3 className="gt-title">{x.title}</h3>
                            <p className="gt-review">{x.review}</p>
                            <p className="gt-date">Date of Stay: {x.stayDate}</p>

                            <button className="btn-read-more mt-4">Read More</button>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default GuestReviews;