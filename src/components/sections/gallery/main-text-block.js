import React from 'react';
import GalleryCategories from './gallery-categories';
import { constants } from '../../../utils/constants';

const GalleryTitleBlock = ({ activeLang }) => {
  return (
    <div className="gallery-title-block">
      <div className="container">
        <h2>
          {constants?.site_content?.gallery_page?.bread_crumb?.title2[activeLang]}
        </h2>

        {/* <GalleryCategories /> */}

        {/* <p>
          Offering countless experience with outstanding services. Lorem ipsum doler set amet.
          Offering countless experience with outstanding services. Lorem ipsum doler set amet.
          Offering countless experience with outstanding services. Lorem ipsum doler set amet.
          Offering countless experience with outstanding services. Lorem ipsum doler set amet.
      </p> */}
      </div>
    </div>
  );
}

export default GalleryTitleBlock;