import React from 'react';

const ContactUsForm = (props) => {
  return (
    <div className="contact-form">
      <div className="container">
        <h3 className="text-center p-0">Write to Us</h3>
        <form action="#">
          <div className="w-75 mx-auto">
            <div className="row">
              <div className="col-md-6 my-2">
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="col-md-6 my-2">
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="col-md-6 my-2">
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="col-md-6 my-2">
                <select>
                  <option>Choose a Subject</option>
                  <option>Reservations Inquiry</option>
                  <option>Refund Policy</option>
                  <option>Rooms and Suites Info</option>
                </select>
              </div>
              <div className="col-md-12 mt-2">
                <textarea type="text" placeholder="Write Message..." rows={3} >

                </textarea>
              </div>
              <div className="col-12 text-center py-2 mt-2">
                <button type="submit" className="main-btn btn-filled">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;