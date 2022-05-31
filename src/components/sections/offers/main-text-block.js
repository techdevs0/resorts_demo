import React from 'react';
import OfferCategories from './offer-categories';
import { constants } from '../../../utils/constants';

const OfferTitleBlock = ({ activeLang }) => {
  return (
    <div className="offer-title-block">
      <div className="container">
        <h2>
          {constants?.site_content?.offers_page?.bread_crumb?.title2[activeLang]}
        </h2>

        {/* <OfferCategories /> */}

      </div>
    </div>
  );
}

export default OfferTitleBlock;