import React from 'react';

const categories = [
  'All',
  'Fishing & Snorkiling',
  'Special Days',
  'Food & Beverages',
  'Rooms',
  'Spa',
]

const GalleryCategories = (props) => {
  return (
    <div className="gallery-categories">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-md-center">
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

export default GalleryCategories;