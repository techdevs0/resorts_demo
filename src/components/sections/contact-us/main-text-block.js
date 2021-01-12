import React, { Component } from 'react';

const ContactTitleBlock = (props) => {
  return (
    <div className="contact-title-block py-4">
      <div className="container">
        <h1 className="text-center my-4">Contact Us</h1>
        <div className="d-flex flex-wrap title-flex">
          <div className="contact-title-item">
            <p className="text-justify mr-sm-4">
              Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet.
          </p>
            <p className="text-justify mr-sm-4">
              Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet. Complimented by a peaceful environment. Lorem ipsum doler set amet.
          </p>
          </div>
          <div className="contact-title-item contact-map-wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.312082522826!2d55.281139014327934!3d25.22641153670663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6becb9f676ed%3A0xd45a302f703b789a!2sPrism%20Events%20Digital%20Advertising!5e0!3m2!1sen!2s!4v1610439827870!5m2!1sen!2s" frameborder="0" style={{ border: 'none', width:'100%' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactTitleBlock;