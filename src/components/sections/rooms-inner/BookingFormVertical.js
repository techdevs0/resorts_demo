import React, { Component } from 'react';

class BookingFormVertical extends Component {
  state = {
    checkIn: new Date(),
    checkOut: new Date(),
    adults: 1,
    rooms: 1,
    childs: 1,
    showCountPopup: false,
    showPromoPopup: false,
  }

  handleCheckInChange = (e) => {
    this.setState({ checkIn: e.target.value })
  }
  handleCheckOutChange = (e) => {
    this.setState({ checkOut: e.target.value })
  }

  render() {
    const { rooms, childs, adults, showCountPopup, showPromoPopup } = this.state;
    return (
      <section className="booking-form-vertical container d-none d-sm-block">
        <div className="container">
          <h4 className="text-muted mb-4">Check Availability</h4>
          <div className="booking-form-inner">
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="dates-group">
                  <input onChange={this.handleCheckInChange} type="date" className="form-control" placeholder="Check In" ></input>
                  <span className="d-none d-sm-block">-</span>
                  <input onChange={this.handleCheckOutChange} type="date" className="form-control" placeholder="Check Out" ></input>
                </div>
              </div>
              <div className="col-12 col-md-12">
                <div className="room-details">
                  <div className="count-group" onClick={() => this.setState({ showCountPopup: !showCountPopup, showPromoPopup: false })}>
                    <p>{`${rooms} Room${rooms > 0 ? 's' : ''}`}</p>
                    <p>{`${adults} Adult${adults > 0 ? 's' : ''}`}</p>
                    <p>{`${childs} Child${childs > 0 ? 's' : ''}`}</p>
                  </div>
                  <div className="room-details-popup" style={{ display: showCountPopup ? 'block' : 'none' }}>
                    <div className="room_item_box quantity">
                      <label>Rooms</label>
                      <div className="quantity-box">
                        <div className="quantity-button quantity-down minus empty" onClick={() => this.setState({ rooms: rooms - 1 < 1 ? 1 : rooms - 1 })}>-</div>
                        <input id="Room" type="text" min="1" className="form-control" defaultValue={rooms} name="Rooms" placeholder="" required="" data-rel="rooms" />
                        <div className="quantity-button quantity-up plus" onClick={() => this.setState({ rooms: rooms + 1 })}>+</div>
                      </div>
                    </div>
                    <div className="room_item_box quantity">
                      <label>Adults</label>
                      <div className="quantity-box">
                        <div className="quantity-button quantity-down minus empty" onClick={() => this.setState({ adults: adults - 1 < 1 ? 1 : adults - 1 })}>-</div>
                        <input id="Adult" type="text" min="1" className="form-control" defaultValue={adults} name="Adult" placeholder="" required="" data-rel="adults" />
                        <div className="quantity-button quantity-up plus" onClick={() => this.setState({ adults: adults + 1 })}>+</div>
                      </div>
                    </div>
                    <div className="room_item_box quantity">
                      <label>Children</label>
                      <div className="quantity-box">
                        <div className="quantity-button quantity-down minus empty" onClick={() => this.setState({ childs: childs - 1 < 1 ? 1 : childs - 1 })}>-</div>
                        <input id="Child" type="text" min="0" className="form-control" defaultValue={childs} name="Child" placeholder="" required="" />
                        <div className="quantity-button quantity-up plus" onClick={() => this.setState({ childs: childs + 1 })}>+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12">
                <div className="promo-codes-wrapper">
                  <div className="promo-codes" onClick={() => this.setState({ showPromoPopup: !showPromoPopup, showCountPopup: false })}>
                    <p>Promo Codes</p>
                  </div>
                  <div className="promo-popup" style={{ display: showPromoPopup ? 'flex' : 'none' }}>
                    <div className="code-item">
                      <label>Group Code/Promotion Code</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="code-item">
                      <label>Travel Industry ID</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12">
                <button className="main-btn btn-eden">Book Now</button>
              </div>
            </div>
          </div>
          {/* <button className="main-btn w-100 btn-eden d-block my-5 d-sm-none">Book Now</button> */}

        </div>
      </section>

    );
  }
}

export default BookingFormVertical;
