import React from 'react';

const RoomAmenities = (props) => {
  return (
    <div className="room-features clearfix">
      <div className="container">
        <h3 className="subtitle">Amenities</h3>
        <ul className="room-features-list">
          {/* row 1 */}
          <li><span><i className="fal fa-bath" />Air Conditioning</span></li>
          <li><span><i className="fal fa-shower" />Bathroom Amenities </span></li>
          <li><span><i className="fab fa-chromecast" />Chrome Cast </span></li>
          {/* row 2 */}
          <li><span><i className="fal fa-wifi" />Free Wifi </span></li>
          <li><span><i className="fal fa-key-skeleton" />In-room safe </span></li>
          <li><span><i className="fal fa-megaphone" />Hairdryer</span></li>
          {/* row 3 */}
          <li><span><i className="fal fa-bolt" />High-Speed Internet (chargeable)</span></li>
          <li><span><i className="fal fa-phone" />International direct telephone lines</span></li>
          <li><span><i className="fal fa-hamburger" />Refreshment Center (chargeable)</span></li>
          {/* row 4 */}
          <li><span><i className="fal fa-tv" />42” / 48” LED TV </span></li>
          <li><span><i className="fal fa-smoking-ban" />Non-Smoking Rooms </span></li>
          <li><span><i className="fal fa-hotel" />Private Balcony or Terrace</span></li>
          {/* row 5 */}
          <li><span><i className="fal fa-car-battery" />Iron &amp; Ironing board</span></li>
          <li><span><i className="fal fa-music" />Room Entertainment Services</span></li>
          <li><span><i className="fal fa-coffee" />Tea &amp; Coffee-making facilities</span></li>
        </ul>
      </div>
    </div>
  );
}

export default RoomAmenities;