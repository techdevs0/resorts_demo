import { CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import API from './../../../utils/http';
import { constants } from '../../../utils/constants';

const Subscribe = ({ activeLang }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (email === "" || !email) {
      alert(`${constants?.site_content?.about_page?.subscribe?.email_error[activeLang]}`);
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
        alert(`${constants?.site_content?.about_page?.subscribe?.submit_text[activeLang]}`);
      }
    }).catch(error => {
      setIsLoading(false);
      console.log(error)
    });
  }

  return (
    <footer style={{ backgroundColor: '#f8f8f8' }}>
      <div className="footer-subscibe-area">
        <h1 className="subscribe-title">
          {constants?.site_content?.about_page?.subscribe?.title[activeLang]}
        </h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="subscribe-text text-center">
              <p>
                {constants?.site_content?.about_page?.subscribe?.subtitle[activeLang]}
              </p>
              <form action="#" className="subscribe-form mt-20">
                {
                  isLoading ? <CircularProgress /> :
                    <>
                      <input value={email} onChange={(e) => setEmail(e.target.value)} required="required" type="email"
                        placeholder={constants?.site_content?.about_page?.subscribe?.place_holder[activeLang]} />
                      <button type="button" onClick={handleSubmit}>
                        {constants?.site_content?.about_page?.subscribe?.btn_text[activeLang]}
                      </button>
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
