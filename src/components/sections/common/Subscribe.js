import React from 'react';

const Subscribe = (props) => {
  return (
    <footer>
      <div className="footer-subscibe-area my-4">
        <h1 className="subscribe-title">Subscribe to our newsletter</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="subscribe-text text-center">
              <p>
              Be The First One to Know About The Happenings at Fishermans Cove
                </p>
              <form action="#" className="subscribe-form mt-20">
                <input type="email" placeholder="Enter your email address" />
                <button type="submit">subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Subscribe;