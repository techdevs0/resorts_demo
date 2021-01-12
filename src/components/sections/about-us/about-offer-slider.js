import React from 'react';
import Slider from "react-slick";

const AboutOfferSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility:true,
    autoplay:false,
    centerMode:true,
    className:'center',
    centerPadding: '0px',
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
    <div className="about-offer-slider container mx-auto">
      <h1 className="about-grid-title">{props.title}</h1>
      <Slider {...settings}>
        {
          props.data?.map(x => (
            <div>
              <div className="about-slider-item" style={{ backgroundImage: `url(${x.image})` }}>
                <h3>{x.title}</h3>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default AboutOfferSlider;