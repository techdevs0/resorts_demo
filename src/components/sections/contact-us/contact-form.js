import React from 'react';

const ContactUsForm = (props) => {
  return (
    <div className="contact-form">
      <div className="container">
        <h3 className="section-heading p-0 text-muted">Write to Us</h3>
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
                <input type="text" placeholder="Write Message" />
              </div>
              <div className="col-12 text-center py-2 mt-4">
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