import React from 'react';

const Subscribe = (props) => {
  return (
    <footer style={{backgroundColor:'#f8f8f8'}}>
      <div className="footer-subscibe-area my-4">
        <h1 className="subscribe-title">Subscribe to our news letter</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="subscribe-text text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doing
                eiusmod tempor incididunt ut
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