import React from 'react';

const RoomAmenities = (props) => {
  return (
    <div className="room-features clearfix">
      <div className="container">
        <h3 className="subtitle">Amenities</h3>
        <ul className="room-features-list">
          <li><a href="#"><i className="fal fa-bath" />Air Conditioning</a></li>
          <li><a href="#"><i className="fal fa-shower" />Bathroom Amenities </a></li>
          <li><a href="#"><i className="fal fa-steam" />Chrome Cast </a></li>
          <li><a href="#"><i className="fal fa-wifi" />Free Wifi </a></li>
          <li><a href="#"><i className="fal fa-lock" />In-room safe </a></li>
          <li><a href="#"><i className="fal fa-lock" />Hairdryer</a></li>
          {/* <li><a href="#"><i className="fal fa-wifi" />High-Speed Internet (chargeable)</a></li> */}

        </ul>
      </div>

       



 
 
    </div>
  );
}

export default RoomAmenities;