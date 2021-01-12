import React from 'react';
import Slider from "react-slick";

const ContactOfferSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessibility:true,
    autoplay:false,
    centerMode:true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };
  return (
    <div className="contact-offer-slider container mx-auto">
      <h3 className="contact-grid-title text-muted">{props.title}</h3>
      <Slider {...settings}>
        {
          props.data?.map(x => (
            <div>
              <div className="contact-slider-item" style={{ backgroundImage: `url(${x.image})` }}>
                <h4>{x.title}</h4>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default ContactOfferSlider;