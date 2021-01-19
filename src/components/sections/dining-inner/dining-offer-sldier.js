import React from 'react';
import Slider from "react-slick";

const DiningOfferSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility:true,
    autoplay:true
  };
  return (
    <div className="dining-offer-slider container mx-auto">
      <h1 className="dining-grid-title ">{props.title}</h1>
      <Slider {...settings}>
        {
          props.data?.map(x => (
            <div>
              <div className="dining-slider-item" style={{ backgroundImage: `url(${x.image})` }}>
                <h2>{x.title}</h2>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default DiningOfferSlider;