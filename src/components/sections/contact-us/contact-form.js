import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import API from '../../../utils/http';

const ContactUsForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (firstName === "" || firstName === null) {
      alert('Please enter first name');
      return;
    }
    if (lastName === "" || lastName === null) {
      alert('Please enter last name');
      return;
    }
    if (email === "" || email === null) {
      alert('Please enter email');
      return;
    }
    if (subject === "" || subject === null) {
      alert('Please enter subject');
      return;
    }
    if (message === "" || message === null) {
      alert('Please enter message');
      return;
    }
    setIsLoading(true);
    API.post('/contact', JSON.stringify({ fName: firstName, lName: lastName, email, subject, message }), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status == 200) {
        setIsLoading(false);

        setFirstName('');
        setLastName('');
        setEmail('');
        setSubject('');
        setMessage('');
        alert('Message Submitted. We will get in touch shortly.');
      }
    }).catch(error => {
      setIsLoading(false);
      console.log(error)
    });
  }

  return (
    <div className="contact-form">
      <div className="container">
        <h3 className="text-center p-0">Write to Us</h3>
        <form action="#">
          <div className="w-75 mx-auto">
            <div className="row">
              <div className="col-md-6 my-2">
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
              </div>
              <div className="col-md-6 my-2">
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
              </div>
              <div className="col-md-6 my-2">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
              </div>
              <div className="col-md-6 my-2">
                <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                  <option value="">Choose a Subject</option>
                  <option value="reservation">Reservations Inquiry</option>
                  <option value="refund">Refund Policy</option>
                  <option value="rooms">Rooms and Suites Info</option>
                </select>
              </div>
              <div className="col-md-12 mt-2">
                <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write Message..." rows={3} >

                </textarea>
              </div>
              <div className="col-12 text-center py-2 mt-2">
                {
                  isLoading ? <CircularProgress /> :
                    <button type="button" onClick={handleSubmit} className="main-btn btn-filled">
                      Submit
                    </button>
                }
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;