import React, { Component } from 'react';

class Bookingform extends Component {
    render() {
        return (
            <section className="booking-form">
                <div className="container">
                    <div className="booking-form-inner">
                        <form action="#">
                            <div className="row align-items-end">
                                <div className="col-lg-3 col-md-6">
                                    <div className="inputs-filed">
                                        <label htmlFor="arrival-date">Check In</label>
                                        <div className="icon"><i className="fal fa-calendar-alt" /></div>
                                        <input type="text" placeholder="24th march 2020" name="arrival-date" id="arrival-date" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="inputs-filed">
                                        <label htmlFor="departure-date text-theme">Check Out</label>
                                        <div className="icon"><i className="fal fa-calendar-alt" /></div>
                                        <input type="text" placeholder="30th march 2020" name="departure-date" id="departure-date" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <div className="inputs-filed rooms-select">
                                        <label htmlFor="guests">Rooms</label>
                                        <div className="nice-select">
                                            <select name="guests" id="guests">
                                                <option value={0}>Select Rooms</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={4}>4</option>
                                                <option value={8}>8</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <div className="inputs-filed guests-select">
                                        <label htmlFor="guests">Guests</label>
                                        <div className="nice-select">
                                            <select name="guests" id="guests">
                                                <option value={0}>Select Guests</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={4}>4</option>
                                                <option value={8}>8</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <div className="inputs-filed">
                                        <button type="submit">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        );
    }
}

export default Bookingform;
