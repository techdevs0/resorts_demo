import { CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import API from './../../../utils/http';;

const Subscribe = (props) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (email === "" || !email) {
      alert("Please enter email");
      return;
    }
    setIsLoading(true);

    API.post('/subscribe', JSON.stringify({ email }), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status === 200) {
        setIsLoading(false);
        setEmail('');
        alert('Successfully Subscribed !');
      }
    }).catch(error => {
      setIsLoading(false);
      console.log(error)
    });
  }

  return (
    <footer style={{ backgroundColor: '#f8f8f8' }}>
      <div className="footer-subscibe-area">
        <h1 className="subscribe-title">Subscribe to our newsletter</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="subscribe-text text-center">
              <p>
                Be The First One to Know About The Happenings at Fishermans Cove Resort
                </p>
              <form action="#" className="subscribe-form mt-20">
                {
                  isLoading ? <CircularProgress /> :
                    <>
                      <input value={email} onChange={(e) => setEmail(e.target.value)} required="required" type="email" placeholder="Enter your email address" />
                      <button type="button" onClick={handleSubmit}>Subscribe</button>
                    </>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Subscribe;
