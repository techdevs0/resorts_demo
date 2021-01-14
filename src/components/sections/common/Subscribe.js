import React from 'react';

const Subscribe = (props) => {
  return (
    <footer>
      <div className="footer-subscibe-area">
        <div className="container">
          <h1 className="section-heading text-muted">Subscribe</h1>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="subscribe-text text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doing
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <form action="#" className="subscribe-form mt-20">
                  <input type="email" placeholder="Enter your email address" />
                  <button type="submit">subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Subscribe;