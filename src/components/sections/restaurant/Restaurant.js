import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';

class Restaurant extends Component {
  render() { 
    return (
      <section className="restaurant-tab-area pt-120 pb-90">
        <Tab.Container defaultActiveKey="italian">
          <div className="container">
          <Nav variant="pills" className="restaurant-rood-list row justify-content-center nav nav-pills mb-30">
              <Nav.Item className="nav-item col-lg-2 col-md-3 col-sm-4 col-6">
                <Nav.Link className="nav-link" eventKey="chicken">
                  <i className="flaticon-boiled" />
                  <span className="title">Chicken</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item col-lg-2 col-md-3 col-sm-4 col-6">
                <Nav.Link className="nav-link" eventKey="italian">
                  <i className="flaticon-pizza" />
                  <span className="title">italian</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item col-lg-2 col-md-3 col-sm-4 col-6">
                <Nav.Link className="nav-link" eventKey="coffee">
                  <i className="flaticon-coffee" />
                  <span className="title">coffee</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item col-lg-2 col-md-3 col-sm-4 col-6">
                <Nav.Link className="nav-link" eventKey="bake-cake">
                  <i className="flaticon-cake" />
                  <span className="title">bake cake</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item col-lg-2 col-md-3 col-sm-4 col-6">
                <Nav.Link className="nav-link" eventKey="cokkies">
                  <i className="flaticon-cookie" />
                  <span className="title">cokkies</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item col-lg-2 col-md-3 col-sm-4 col-6">
                <Nav.Link className="nav-link" eventKey="coctail">
                  <i className="flaticon-cocktail" />
                  <span className="title">coctail</span>
                </Nav.Link>
              </Nav.Item>
              </Nav>
            {/* tab content */}
            <Tab.Content id="restaurant-tabContent">
              <Tab.Pane eventKey="italian">
                <div className="row">
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/01.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">Chicken</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/02.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">Chicken</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/03.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">Chicken</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/04.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">Chicken</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="chicken">
                <div className="row">
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/01.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">italian food</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/02.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">italian food</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/03.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">italian food</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/04.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">italian food</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="coffee">
                <div className="row">
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/01.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">coffee</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/02.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">coffee</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/03.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">coffee</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/04.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">coffee</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="bake-cake">
                <div className="row">
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/01.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">bake cake</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/02.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">bake cake</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/03.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">bake cake</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/04.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">bake cake</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="cokkies">
                <div className="row">
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/01.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">cokkies</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/02.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">cokkies</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/03.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">cokkies</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/04.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">cokkies</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="coctail">
                <div className="row">
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/01.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">coctail</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/02.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">coctail</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/03.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">coctail</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="food-box">
                      <div className="thumb">
                        <img src="assets/img/restu/04.jpg" alt="" />
                        <span className="price">$90</span>
                      </div>
                      <div className="desc">
                        <Link to="#" className="cat">coctail</Link>
                        <h4>4X Pan Pijja</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
        </section>
        
    );
  }
}

export default Restaurant;
