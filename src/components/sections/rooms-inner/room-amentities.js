import React from 'react';

const RoomAmenities = (props) => {
  return (
    <div className="room-features clearfix">
      <div className="container">
        <h3 className="subtitle">Amenities</h3>
        <ul className="room-features-list">
          {/* row 1 */}
          <li><a href="#"><i className="fal fa-bath" />Air Conditioning</a></li>
          <li><a href="#"><i className="fal fa-shower" />Bathroom Amenities </a></li>
          <li><a href="#"><i className="fal fa-signal-alt" />Chrome Cast </a></li>
          {/* row 2 */}
          <li><a href="#"><i className="fal fa-wifi" />Free Wifi </a></li>
          <li><a href="#"><i className="fal fa-lock" />In-room safe </a></li>
          <li><a href="#"><i className="fal fa-megaphone" />Hairdryer</a></li>
          {/* row 3 */}
          <li><a href="#"><i className="fal fa-bolt" />High-Speed Internet (chargeable)</a></li>
          <li><a href="#"><i className="fal fa-phone" />International direct telephone lines</a></li>
          <li><a href="#"><i className="fal fa-hamburger" />Refreshment Center (chargeable)</a></li>
          {/* row 4 */}
          <li><a href="#"><i className="fal fa-tv" />42” / 48” LED TV </a></li>
          <li><a href="#"><i className="fal fa-smoking-ban" />Non-Smoking Rooms </a></li>
          <li><a href="#"><i className="fal fa-hotel" />Private Balcony or Terrace</a></li>
          {/* row 5 */}
          <li><a href="#"><i className="fal fa-car-battery" />Iron &amp; Ironing board</a></li>
          <li><a href="#"><i className="fal fa-music" />Room Entertainment Services</a></li>
          <li><a href="#"><i className="fal fa-coffee" />Tea &amp; Coffee-making facilities</a></li>
        </ul>
      </div>
    </div>
  );
}

export default RoomAmenities;