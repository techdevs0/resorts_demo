import React from 'react';

const FAQCategories = (props) => {
  return ( 
    <div className="faq-categories-wrapper">
      <div className={`category-item ${props.currentIndex === 1 ? 'active': ''}`} onClick={()=> props.setCurrentIndex(1)}>
        <i className="fal fa-money-bill-alt"></i>
        <h5>
          Reservations
        </h5>
      </div>
      <div className={`category-item ${props.currentIndex === 2 ? 'active': ''}`} onClick={()=> props.setCurrentIndex(2)}>
        <i className="fal fa-utensils-alt"></i>
        <h5>
          Dining
        </h5>
      </div>
      <div className={`category-item ${props.currentIndex === 3 ? 'active': ''}`} onClick={()=> props.setCurrentIndex(3)}>
        <i className="fal fa-hotel"></i>
        <h5>
          Rooms &amp; Suites
        </h5>
      </div>
      <div className={`category-item ${props.currentIndex === 4 ? 'active': ''}`} onClick={()=> props.setCurrentIndex(4)}>
        <i className="fal fa-info-circle"></i>
        <h5>
          Policies
        </h5>
      </div>
    </div>
   );
}
 
export default FAQCategories;