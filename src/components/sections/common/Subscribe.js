import React, { useState } from 'react';
import API from './../../../utils/http';;

const Subscribe = (props) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    API.post('/subscribe', JSON.stringify({ email }), {headers:{
      'Content-Type': 'application/json'
    }}).then(response=>{
      if (response.status == 200) {
        setEmail(null);
        alert('Successfully Subscribed !');
      }
    }).catch(error=>{
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
                Be The First One to Know About The Happenings at Fishermans Cove
              </p>
              <form action="#" className="subscribe-form mt-20">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email address" />
                <button type="button" onClick={handleSubmit}>subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Subscribe;
