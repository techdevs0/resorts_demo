import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const DiningInnerTitleBlock = (props) => {
  return (
    <div className="dining-inner-title-block">
      <div className="container">
        <div className="intro-block">
          <div className="description-item">
            <h2>{props.dining?.post_name}</h2>
            <p dangerouslySetInnerHTML={{ __html: props.dining?.post_content }}>
            </p>
          </div>
          <div className="slider-item">
            <Carousel
              dynamicHeight={false}
              showStatus={false}
              showArrows={false}
              showIndicators={false}
              showThumbs={true}
              infiniteLoop={true}
              autoPlay={true}
              emulateTouch={true}
              className="dining-carousel"
            >
              {/* {
                props.dining?.images?.map((x,i) => ( */}
              <div key={1}>
                <img src={props?.dining?.thumbnail} alt="" />
              </div>
              {/* ))
              } */}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiningInnerTitleBlock;