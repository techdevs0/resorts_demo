import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';

const GalleryGridItem = (props) => {
  const [showLightBox, setShowLightBox] = useState(false)
  return (
    <div className="gallery-grid-item-wrapper">
      <div className="grid-item" onClick={() => props.toggleLightBox(props?.index)}>
        <div className="gallery-title" style={{ backgroundImage: `url(${props?.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          {/* <h4>{props.title}</h4> */}
          <div className="slide-hover-overlay"></div>
        </div>
        {/* {
          showLightBox && <Lightbox
            mainSrc={props.image}
            onCloseRequest={() => setShowLightBox(false)}
          />
        } */}
      </div>
    </div>
  );
}

export default withRouter(GalleryGridItem);
