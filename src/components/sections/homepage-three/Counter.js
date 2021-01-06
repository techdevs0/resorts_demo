import React, { Component } from 'react';
import CountUp from 'react-countup';

class Counter extends Component { 
  render() {
    return (
        <section className="counter-section">
        <div className="container">
          <div className="counter-inner bg-black pt-100 pb-60">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-11">
                <div className="row">
                  <div className="col-lg-3 col-6">
                    <div className="counter-box box-layout d-flex justify-content-center justify-content-lg-start">
                      <div>
                        <div className="icon">
                          <img src="assets/img/icon/01.png" alt="" />
                        </div>
                        <h4><CountUp end={84} duration={5}/>k<span className="plus-icon">+</span></h4>
                        <span className="title">Projects are Completed</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="counter-box box-layout d-flex justify-content-center">
                      <div>
                        <div className="icon">
                          <img src="assets/img/icon/02.png" alt="" />
                        </div>
                        <h4><CountUp end={10} duration={5}/>M<span className="plus-icon">+</span></h4>
                        <span className="title">Active Backers Around World</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="counter-box box-layout d-flex justify-content-center">
                      <div>
                        <div className="icon">
                          <img src="assets/img/icon/03.png" alt="" />
                        </div>
                        <h4><CountUp end={2} duration={5}/>k<span className="plus-icon">+</span></h4>
                        <span className="title">Categories Served</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="counter-box box-layout d-flex justify-content-center justify-content-lg-end">
                      <div>
                        <div className="icon">
                          <img src="assets/img/icon/04.png" alt="" />
                        </div>
                        <h4><CountUp end={100} duration={5}/>M<span className="plus-icon">+</span></h4>
                        <span className="title">Ideas Raised Funds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
  }
}

export default Counter;
