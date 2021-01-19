import React, { Component } from 'react';

class BookingFormVertical extends Component {
  render() {
    return (
      <div className="room-booking-form">
        <h5 className="title">Check Availability</h5>
        <form action="#">
          <div className="input-group input-group-two left-icon mb-20">
            <label htmlFor="arrival-date">Check In</label>
            <div className="icon"><i className="fal fa-calendar-alt" /></div>
            <input type="text" placeholder="20-6-2020" name="arrival-date" id="arrival-date" />
          </div>
          <div className="input-group input-group-two left-icon mb-20">
            <label htmlFor="departure-date">Check Out</label>
            <div className="icon"><i className="fal fa-calendar-alt" /></div>
            <input type="text" placeholder="30-6-2020" name="departure-date" id="departure-date" />
          </div>
          <div className="input-group input-group-two left-icon mb-20">
            <label htmlFor="room">Rooms</label>
            <select name="room" id="room">
              <option value={1}>1 Room</option>
              <option value={2}>2 Room</option>
              <option value={4}>4 Room</option>
              <option value={8}>8 Room</option>
            </select>
          </div>
          <div className="input-group input-group-two left-icon mb-20">
            <label htmlFor="departure-date">Guest</label>
            <select name="guest" id="guest">
              <option value={8}>8 Guest</option>
              <option value={10}>10 Guest</option>
              <option value={12}>12 Guest</option>
              <option value={15}>15 Guest</option>
            </select>
          </div>
          <div className="input-group">
            <button className="main-btn btn-filled">check availability</button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookingFormVertical;
