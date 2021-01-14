import React from 'react';

const categories = [
  'All',
  'Fishing & Snorkiling',
  'Special Days',
  'Food & Beverages',
  'Rooms',
  'Spa',
]

const OfferCategories = (props) => {
  return (
    <div className="offer-categories">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {
            categories.map(x=>(  
              <button className="btn btn-default">
                {x}
              </button>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default OfferCategories;