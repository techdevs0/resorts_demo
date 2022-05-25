import React from 'react';
import OfferCategories from './offer-categories';

const OfferTitleBlock = (props) => {
  return (
    <div className="offer-title-block">
      <div className="container">
        <h2>Offers {props.lang}</h2>
        
        {/* <OfferCategories /> */}
        
      </div>
    </div>
  );
}

export default OfferTitleBlock;